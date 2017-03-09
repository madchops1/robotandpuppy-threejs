/*

ROBOT ANIMATIONS
v1.0.0
COPYRIGHT 2017
AUTHOR: KARL STELTENPOHL
DO NOT COPY FOR ANY USE

*/

// Move Mouth
Character.prototype.robotMoveMouth = function (name) {
  var _this = this;
  if(!_this.isMouthMoving && Math.random()>.99) {
    this.isMouthMoving = true;
    TweenMax.to (this.meshy["teethLine1"].scale, .5, { y: 1.3, yoyo:true, repeat:1 });
    TweenMax.to (this.meshy["teethLine2"].scale, .5, { y: 1.3, yoyo:true, repeat:1 });
    TweenMax.to (this.meshy["teethLine3"].scale, .5, { y: 1.3, yoyo:true, repeat:1 });
    TweenMax.to (this.meshy["whiteTeeth"].scale, .5, { y: 1.3, yoyo:true, repeat:1, onComplete:function(){
      _this.isMouthMoving = false;
    }});
  }
};

// Grab
Character.prototype.robotGrab = function (name, mouse) {
  var _this = this;
  if( !_this.isGrabbing && 
      !_this.isGrabbed && 
      mouse.x < -36 && 
      mouse.x > -47 && 
      mouse.y > 86 && 
      mouse.y < 111) {

    this.isGrabbing = true;
    body = document.querySelector('body');
    body.classList.remove('nocursor');
    
    var grabSpeed = .4;

    // Go high
    if(mouse.y > 106 && mouse.y < 111) {
      TweenMax.to (this.abstract["leftArm"].rotation, grabSpeed, { x: -0.5, yoyo:true, repeat:1 });
      TweenMax.to (this.abstract["rightArm"].rotation, grabSpeed, { x: -0.5, yoyo:true, repeat:1 });
    }
    // Go middle
    if(mouse.y > 91 && mouse.y <= 106) {
      TweenMax.to (this.abstract["leftArm"].rotation, grabSpeed, { x: 0, yoyo:true, repeat:1 });
      TweenMax.to (this.abstract["rightArm"].rotation, grabSpeed, { x: 0, yoyo:true, repeat:1 });
    }
    // Go low
    if(mouse.y > 81 && mouse.y <= 91) {
      TweenMax.to (this.abstract["leftArm"].rotation, grabSpeed, { x: 0.5, yoyo:true, repeat:1 });
      TweenMax.to (this.abstract["rightArm"].rotation, grabSpeed, { x: 0.5, yoyo:true, repeat:1 });
    }

    TweenMax.to (this.abstract["body"].position, grabSpeed, { z: 4, yoyo:true, repeat:1 });
    TweenMax.to (this.abstract["body"].rotation, grabSpeed, { x: 0.1, yoyo:true, repeat:1 });

    var i=0;
    for (var j=4; j>=0; j--) {
      i++;
      //ease: Back.easeOut
      switch(j) {
        case 4:
          TweenMax.to (this.abstract["leftArm"].children[j].position, grabSpeed, { x: -2, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["leftArm"].children[j].rotation, grabSpeed, { y: -0.9, yoyo:true, repeat:1 });
          break;
        case 3:
          TweenMax.to (this.abstract["leftArm"].children[j].position, grabSpeed, { z: 10, x: 1, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["leftArm"].children[j].rotation, grabSpeed, { y: -1.5, yoyo:true, repeat:1 });
          break;
        case 2:
          TweenMax.to (this.abstract["leftArm"].children[j].position, grabSpeed, { z: 19, x: -1, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["leftArm"].children[j].rotation, grabSpeed, { y: -2.0, yoyo:true, repeat:1 });
          break;
        case 1:
          TweenMax.to (this.abstract["leftArm"].children[j].position, grabSpeed, { z: 25, x: -4, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["leftArm"].children[j].rotation, grabSpeed, { y: -2.3, yoyo:true, repeat:1 });
          break;
        case 0:
          TweenMax.to (this.abstract["leftArm"].children[j].position, grabSpeed, { z: 31, x: -9, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["leftArm"].children[j].rotation, grabSpeed, { y: -2.6, yoyo:true, repeat:1 });
          break;
      }
      switch(j) {
        case 4:
          TweenMax.to (this.abstract["rightArm"].children[j].position, grabSpeed, { x: 2, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["rightArm"].children[j].rotation, grabSpeed, { y: 0.9, yoyo:true, repeat:1 });
          break
        case 3:
          TweenMax.to (this.abstract["rightArm"].children[j].position, grabSpeed, { z: 10, x: -1, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["rightArm"].children[j].rotation, grabSpeed, { y: 1.5, yoyo:true, repeat:1 });
          break;
        case 2:
          TweenMax.to (this.abstract["rightArm"].children[j].position, grabSpeed, { z: 19, x: 1, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["rightArm"].children[j].rotation, grabSpeed, { y: 2.0, yoyo:true, repeat:1 });
          break;
        case 1:
          TweenMax.to (this.abstract["rightArm"].children[j].position, grabSpeed, { z: 25, x: 4, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["rightArm"].children[j].rotation, grabSpeed, { y: 2.3, yoyo:true, repeat:1 });
          break;
        case 0:
          TweenMax.to (this.abstract["rightArm"].children[j].position, grabSpeed, { z: 31, x: 9, yoyo:true, repeat:1 });
          TweenMax.to (this.abstract["rightArm"].children[j].rotation, grabSpeed, { y: 2.6, yoyo:true, repeat:1, onComplete:function(){
            _this.isGrabbing = false;
          }});
          break;
      }
    }
  }
};
