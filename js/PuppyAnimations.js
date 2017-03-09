/*

PUPPY ANIMATIONS
v1.0.0
COPYRIGHT 2017
AUTHOR: KARL STELTENPOHL
DO NOT COPY FOR ANY USE

*/

// Tail animation
Character.prototype.puppyUpdateTail = function(t) {
  for (var i=0; i<this.abstract["tail"].children.length; i++) {
    var angleStep = -i*.5;
    var angleAmp = Math.PI/(30/(i+1));
    var rotZ = Math.sin(t+angleStep)*angleAmp;
    var st = this.abstract["tail"].children[i];
    st.rotation.z = rotZ; //(rotY * i);
  }
};

// Lick animation
Character.prototype.puppyLick = function() {
  var _this = this;
  if (!_this.isLicking && Math.random()>.99) {
    this.isLicking = true;
    TweenMax.to (this.meshy["tounge"].scale, 0.4, {z: 6, yoyo: true, repeat: 1, onComplete:function() {
      _this.isLicking = false;
    }, ease: Back.easeOut});
  }
};

// Grab animation
Character.prototype.puppyGrab = function() {
  var _this = this;
  if (!_this.isGrabbing && Math.random()>.99) {
    this.isGrabbing = true;
    TweenMax.to (this.meshy["body"].scale, 0.2, {y: 20, yoyo: true, repeat: 1, onComplete:function() {
      _this.isGrabbing = false;
    }, ease: Back.easeOut});
  }
}
