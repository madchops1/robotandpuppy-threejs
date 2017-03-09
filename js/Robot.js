/*

ROBOT
v1.0.0
COPYRIGHT 2017
AUTHOR: KARL STELTENPOHL
DO NOT COPY FOR ANY USE

*/

Robot = function() {
  this.bodyDimensions = { 
    "body": {
      "height": 100,
      "width": 40,
      "depth": 20,
      "position" : { "x": 0, "y": 50, "z": 0 },
      
      "children": {
        
        "head": {
          "height": 20,
          "width" : 30,
          "depth" : 10,
          "position" : { "x": 0, "y": 50, "z": 0 },
          "children" : {
            "face" : {
              "height": 20,
              "width" : 30,
              "depth" : 10,
              "color" : 0xd6d6d6,
              "position" : { "x": 0, "y": 0, "z": 0 }
            },
            "eyes": {
              "height": 6,
              "width" : 6,
              "depth" : 2,
              "position" : { "x": 0, "y": 3, "z": 4.5 },
              "children": {
                "leftEye" : {
                  "height": 6,
                  "width" : 6,
                  "depth" : 2,
                  "position" : { "x": -8, "y": 0, "z": 0 },
                  "color": 0xFFF999
                },
                "rightEye" : {
                  "height": 6,
                  "width" : 6,
                  "depth" : 2,
                  "position" : { "x": 8, "y": 0, "z": 0 },
                  "color": 0xFFF999
                },
              }
            },
            "mouth" : {
              "height": 4,
              "width" : 22,
              "depth" : 2,
              "position" : { "x": 0, "y": -4, "z": 4.5 },
              "children": {
                "whiteTeeth": {
                  "height": 4,
                  "width" : 22,
                  "depth" : 2,
                  "position" : { "x": 0, "y": 0, "z": 0 },
                  "color": 0xFFFFFF
                },
                "teethLine1": {
                  "height": 4,
                  "width" : .5,
                  "depth" : 1,
                  "position" : { "x": -6, "y": 0, "z": 1 },
                  "color": 0xbbbbbb
                },
                "teethLine2": {
                  "height": 4,
                  "width" : .5,
                  "depth" : 1,
                  "position" : { "x": 0, "y": 0, "z": 1 },
                  "color": 0xbbbbbb
                },
                "teethLine3": {
                  "height": 4,
                  "width" : .5,
                  "depth" : 1,
                  "position" : { "x": 6, "y": 0, "z": 1 },
                  "color": 0xbbbbbb
                },
              }
            }
          }
        },

        "torso": {
          "height": 40,
          "width" : 40,
          "depth" : 20,
          "position" : { "x": 0, "y": 20, "z": 0 },
          "children" : {

            "chest" : {
              "height": 40,
              "width" : 40,
              "depth" : 20,
              "position" : { "x": 0, "y": 0, "z": 0 },
            },
            "sctratches": { 
              "height": 10,
              "width" : 6,
              "depth" : 1,
              "position" : { "x": 5, "y": 0, "z": 9.8 },
              "children" : {
                "scratchone": {
                  "height": 10,
                  "width" : .2,
                  "depth" : 1,
                  "position" : { "x": 0, "y": 0, "z": 0 },
                  "color": 0xbbbbbb
                },
                "scratchtwo": {
                  "height": 8,
                  "width" : .2,
                  "depth" : 1,
                  "position" : { "x": 2, "y": 1, "z": 0 },
                  "color": 0xbbbbbb
                },
                "scratchthree": {
                  "height": .2,
                  "width" : 6,
                  "depth" : 1,
                  "position" : { "x": 2, "y": 1, "z": 0 },
                  "color": 0xbbbbbb
                }
              }
            },
            "boltone": {
              "height": 5,
              "width" : 5,
              "depth" : 1,
              "position" : { "x": -14, "y": 14, "z": 10 },
              "color": 0xbbbbbb
            },
            "bolttwo": {
              "height": 5,
              "width" : 5,
              "depth" : 1,
              "position" : { "x": 14, "y": 14, "z": 10 },
              "color": 0xbbbbbb

            },
            "boltthree": {
              "height": 5,
              "width" : 5,
              "depth" : 1,
              "position" : { "x": -14, "y": -14, "z": 10 },
              "color": 0xbbbbbb
            },
            "boltfour": {
              "height": 5,
              "width" : 5,
              "depth" : 1,
              "position" : { "x": 14, "y": -14, "z": 10 },
              "color": 0xbbbbbb
            }
          }
        },
        
        "rightArm": {
          "height": 40,
          "width" : 15,
          "depth" : 15,
          "position" : { "x": -25, "y": 30, "z": 0 },

          "children" : {
            "rArm1": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": -40, "y": 0, "z": 0 }

            },
            "rArm2": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": -30, "y": 0, "z": 0 }
            },
            "rArm3": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": -20, "y": 0, "z": 0 }
            },
            "rArm4": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": -10, "y": 0, "z": 0 }
            },
            "rArm5": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": 0, "y": 0, "z": 0 }
            }
          }
        },

        "leftArm": {
          "height": 40,
          "width" : 15,
          "depth" : 15,
          "position" : { "x": 25, "y": 30, "z": 0 },

          "children" : {
            "lArm1": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": 40, "y": 0, "z": 0 }

            },
            "lArm2": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": 30, "y": 0, "z": 0 }
            },
            "lArm3": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": 20, "y": 0, "z": 0 }
            },
            "lArm4": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": 10, "y": 0, "z": 0 }
            },
            "lArm5": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 90},
              "position" : { "x": 0, "y": 0, "z": 0 }
            }
          }
        },

        /*
        "cursor": {
          "height": 12,
          "width": 10,
          "depth": 0,
          "position" : { "x": 75, "y": 1000, "z": 0 },
          //"position" : { "x": 75, "y": 40, "z": 0 },
          "image": "images/cursor.png",
          "transparent": true
        },
        */

        "rightLeg": {
          "height": 40,
          "width" : 15,
          "depth" : 15,
          "position" : { "x": -10, "y": -55, "z": 0 },

          "children": {
            "one": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0},                          
              "position" : { "x": 0, "y": 50, "z": 0 }
            },
            "two": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0},
              "position" : { "x": 0, "y": 40, "z": 0 }
            },
            "three": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0},                                
              "position" : { "x": 0, "y": 30, "z": 0 }
            },
            "four": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0},
              "position" : { "x": 0, "y": 20, "z": 0 }
            },
            "five": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0},                                 
              "position" : { "x": 0, "y": 10, "z": 0 }
            }
          }
        },

        "leftLeg": {
          "height": 40,
          "width" : 15,
          "depth" : 15,
          "position" : { "x": 10, "y": -55, "z": 0 },

          "children": {
            "one": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0},                               
              "color" : 0xd6d6d6,
              "position" : { "x": 0, "y": 50, "z": 0 }

            },
            "two": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0}, 
              "position" : { "x": 0, "y": 40, "z": 0 }
            },
            "three": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0},                              
              "position" : { "x": 0, "y": 30, "z": 0 }
            },
            "four": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0}, 
              "position" : { "x": 0, "y": 20, "z": 0 }
            },
            "five": {
              "height": 10,
              "top" : 6,
              "bottom" : 6,
              "color" : 0xd6d6d6,
              "geo": "cylinder",
              "rotate": { "x": 0, "y": 0, "z": 0}, 
              "position" : { "x": 0, "y": 10, "z": 0 }
            }
          }
        }
      }
    }
  };

  return this.bodyDimensions;
};
