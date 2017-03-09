/*

CHARACTER
v1.0.0
COPYRIGHT 2017
AUTHOR: KARL STELTENPOHL

*/

Character = function (bodyDimensions) {

    this.threeGroup       = new THREE.Group();
    this.isBlinking       = false;
    this.isMouthMoving    = false;
    this.oldTargetLookPosition;
    this.newTargetLookPosition;

    var abstract          = [];
    var mesh              = [];

    loopRecursively(bodyDimensions, this.threeGroup);
    
    this.abstract = abstract;
    this.meshy = mesh;

    this.threeGroup.traverse( function ( object ) {
      if ( object instanceof THREE.Mesh ) {
        object.castShadow = true;
        object.receiveShadow = false;
      }
    });

    function loopRecursively(obj, parent) {
      for(var i=0; i<Object.keys(obj).length; i++) {
        var key = Object.keys(obj)[i];
        if(typeof obj[key].children != 'undefined') {
          genAbstract(key, obj[key], parent, i);
        }
        else {
          genMesh(key, obj[key], parent);
        }
      }
    }

    function genAbstract(key, obj, parent) {

      // Create the group
      abstract[key] = new THREE.Group();
      
      // Dive in again
      loopRecursively(obj.children, abstract[key]);

      if(obj.position) {
        abstract[key].position.x = obj.position.x;
        abstract[key].position.y = obj.position.y;
        abstract[key].position.z = obj.position.z;
      }

      // Add the group to the parent group
      parent.add(abstract[key]);      
    }

    function genMesh(key, obj, parent) {
      
      // Default color
      var color = 0xCCCCCC;
      var geo = 'box';

      // Color
      if(obj.color) { color = obj.color; }

      // Geometry
      if(obj.geo) { geo = obj.geo; }
      
      switch(geo) {

        case 'cylinder':
          var geo = new THREE.CylinderGeometry( obj.top, obj.bottom, obj.height, obj.segments);
          break;

        default: 
          var geo = new THREE.BoxGeometry( obj.width, obj.height, obj.depth);
          break;
      }

      // Material
      var material    = new THREE.MeshLambertMaterial( {color: color, shading: THREE.FlatShading} );

      // image mesh
      if(obj.image) {
        var loader = new THREE.TextureLoader();
        loader.load(
          obj.image,
          function ( texture ) {
            var material = new THREE.MeshBasicMaterial( {
              map: texture
            });
            mesh[key] = new THREE.Mesh( geo, material );
            parent.add(mesh[key]);
            mesh[key] = meshRotation(mesh[key], obj.position);
          }
        );        
      } 
      // standard mesh
      else {
        
        mesh[key] = new THREE.Mesh( geo, material );
        mesh[key] = meshPosition(mesh[key], obj.position);
        mesh[key] = meshSkewMatrix(mesh[key], obj.skew);
        mesh[key] = meshRotation(mesh[key], obj.rotate);
        parent.add(mesh[key]);
      }
    }

    function meshRotation (mesh, rotate) {
      if(rotate) {
        mesh.geometry.applyMatrix(new THREE.Matrix4().makeRotationX( THREE.Math.degToRad(rotate.x) ));
        mesh.geometry.applyMatrix(new THREE.Matrix4().makeRotationY( THREE.Math.degToRad(rotate.y) ));
        mesh.geometry.applyMatrix(new THREE.Matrix4().makeRotationZ( THREE.Math.degToRad(rotate.z) ));
      }
      return mesh;
    }

    function meshPosition (mesh, position) {
      if(position) {
        mesh.position.x = position.x;
        mesh.position.y = position.y;
        mesh.position.z = position.z;
      }
      return mesh;
    }
      
    function meshSkewMatrix (mesh, skew) {
      if(skew) {
        skewMatrixBody = new THREE.Matrix4();
        skewMatrixBody.set(skew[0],   skew[1],  skew[2],  skew[3],
                           skew[4],   skew[5],  skew[6],  skew[7],
                           skew[8],   skew[9],  skew[10], skew[11],
                           skew[12],  skew[13], skew[14], skew[15]);
        mesh.geometry.applyMatrix(skewMatrixBody);
      }
      return mesh;
    }
};

// Blink
Character.prototype.blink = function(name) {
  var _this = this;
  if (!_this.isBlinking && Math.random()>.99) {
    this.isBlinking = true;
    TweenMax.to (this.abstract["eyes"].children[0].scale, .07, {y:0, yoyo:true, repeat:1});
    TweenMax.to (this.abstract["eyes"].children[1].scale, .07, {y:0, yoyo:true, repeat:1, onComplete:function() {
      _this.isBlinking = false;
    }, ease: Back.easeOut});
  }
};

// Look At It
Character.prototype.lookAtIt = function (name,v) {
  if (!this.oldTargetLookPosition) { this.oldTargetLookPosition = new THREE.Vector3(); }
  this.newTargetLookPosition = v.clone();
  this.lookPosition = this.oldTargetLookPosition.clone().add(this.newTargetLookPosition.sub(this.oldTargetLookPosition).multiplyScalar(.15));
  this.abstract["head"].lookAt(this.lookPosition);
  this.oldTargetLookPosition = this.lookPosition;
};
