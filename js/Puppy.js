/*

PUPPY
v1.0.0
COPYRIGHT 2017
AUTHOR: KARL STELTENPOHL
DO NOT COPY FOR ANY USE

*/

Puppy = function() {
  this.bodyDimensions = { 
    "body": {
      "height": 70,
      "width": 40,
      "depth": 20,
      "position" : { "x": 0, "y": 35, "z": 0 },
      "children": {

        "head": {
          "height": 12,
          "width": 12,
          "depth": 18,
          "position" : { "x": 0, "y": 0, "z": 10 },
          "children" : {
            "skull": {
              "height": 12,
              "width": 12,
              "depth": 12,
              "position" : { "x": 0, "y": 1, "z": -2 },
              "color": 0xFBF7E8
            },
            "face": {
              "height": 8,
              "width": 8,
              "depth": 8,
              "position" : { "x": 0, "y": -1, "z": 7.5 },
              "color": 0xFBF7E8
            },
            "tounge": {
              "height": .5,
              "width": 2,
              "depth": 3,
              "position" : { "x": 0, "y": -3, "z": 9 },
              "color": 0xf72a42
            },
            "leftEar": {
              "height": 10,
              "width": 2,
              "depth": 8,
              "position" : { "x": 6.5, "y": 1, "z": -5 },
              "skew":  [1,    -.2,    0,    0,
              0,    1,    0,    0,
              0,    .2,   1,    0,
              0,    0,    0,    1],
              "color": 0xFBF7E8
            },
            "rightEar": {
              "height": 10,
              "width": 2,
              "depth": 8,
              "position" : { "x": -6.5, "y": 1, "z": -5 },
              "color": 0xFBF7E8,
              "skew":  [  1,    .2,   0,    0,
              0,    1,    0,    0,
              0,    .2,   1,    0,
              0,    0,    0,    1],
            },
            "eyes": {
              "height": 3,
              "width": 3,
              "depth": 3,
              "position": { "x": 0, "y": 4, "z": 3 },
              "children": {
                "leftEye": {
                  "height": 3,
                  "width": 3,
                  "depth": 3,
                  "position" : { "x": -3.5, "y": 0, "z": 0 },
                  "color": 0x333333
                },
                "rightEye": {
                  "height": 3,
                  "width": 3,
                  "depth": 3,
                  "position" : { "x": 3.5, "y": 0, "z": 0 },
                  "color": 0x333333
                },
              }
            },
            "nose": {
              "height": 3,
              "width": 3,
              "depth": 3,
              "position" : { "x": 0, "y": 0, "z": 12.5 },
              "color": 0x111111
            }
          }
        },

        "torso": {
          "height": 30,
          "width": 15,
          "depth": 15,
          "position" : { "x": 0, "y": -20, "z": 0 },
          "skew":    [1,    0,    0,    0,
          0,    1,    0,    0,
          0,    0.4,  1,    0,
          0,    0,    0,    1],
          "color": 0xFBF7E8
        },

        "rightLeg": {
          "height": 20,
          "width": 7,
          "depth": 7,
          "position" : { "x": -8, "y": -27.5, "z": -6 },
          "children": {
            "thigh": {
              "height": 15,
              "width": 7,
              "depth": 7,
              "position": { "x": -3, "y": 0, "z": 4 },
              "skew":  [1,    -.3,    0,    0,
              0,    1,      0,    0,
              0,    0.5,    1,    0,
              0,    0,      0,    1],
              "color": 0xFBF7E8
            },
            "shin": {
              "height": 15,
              "width": 5,
              "depth": 5,
              "position" : { "x": -4.5, "y": 0, "z": 12 },
              "skew":  [1,    -.1,    0,    0,
              0,    1,      0,    0,
              0,    -0.3,   1,    0,
              0,    0,      0,    1],
              "color": 0xFBF7E8
            },
            "paw": {
              "height": 5,
              "width": 5,
              "depth": 5,
              "position" : { "x": -4, "y": -5, "z": 18 },
              "color": 0xFBF7E8
            }
          }
        },

        "leftLeg": {
          "height": 20,
          "width": 7,
          "depth": 7,
          "position" : { "x": 8, "y": -27.5, "z": -6 },
          "children": {
            "thigh": {
              "height": 15,
              "width": 7,
              "depth": 7,
              "position": { "x": 3, "y": 0, "z": 4 },
              "skew":  [1,    .3,    0,    0,
              0,    1,     0,    0,
              0,    .5,    1,    0,
              0,    0,     0,    1],
              "color": 0xFBF7E8
            },
            "shin": {
              "height": 15,
              "width": 5,
              "depth": 5,
              "position" : { "x": 4.5, "y": 0, "z": 12 },
              "skew":  [1,    .1,    0,    0,
              0,    1,     0,    0,
              0,    -.3,  1,    0,
              0,    0,     0,    1],
              "color": 0xFBF7E8
            },
            "paw": {
              "height": 5,
              "width": 5,
              "depth": 5,
              "position" : { "x": 4, "y": -5, "z": 18 },
              "color": 0xFBF7E8
            }
          }
        },

        "rightArm": {
          "height": 20,
          "width": 5,
          "depth": 5,
          "position" : { "x": -8, "y": -14, "z": 10 },
          "children": {
            "thigh": {
              "height": 13,
              "width": 5,
              "depth": 5,
              "position" : { "x": -0, "y": 0, "z": 0 },
              "skew":  [1,    -.1,    0,    0,
              0,    1,      0,    0,
              0,    -.3,   1,    0,
              0,    0,      0,    1],
              "color": 0xFBF7E8
            },
            "shin": {
              "height": 15,
              "width": 4,
              "depth": 4,
              "position" : { "x": .5, "y": -13.5, "z": 5 },
              "skew":  [1,    0,    0,    0,
              0,    1,      0,    0,
              0,    -.4,    1,    0,
              0,    0,      0,    1],
              "color": 0xFBF7E8
            },
            "paw": {
              "height": 5,
              "width": 5,
              "depth": 5,
              "position" : { "x": .5, "y": -18.5, "z": 10 },
              "color": 0xFBF7E8
            }
          }
        },

        "leftArm": {
          "height": 20,
          "width": 5,
          "depth": 5,
          "position" : { "x": 8, "y": -14, "z": 10 },
          "children": {
            "thigh": {
              "height": 13,
              "width": 5,
              "depth": 5,
              "position" : { "x": -0, "y": 0, "z": 0 },
              "skew":  [1,    .1,    0,    0,
              0,    1,      0,    0,
              0,    -.3,   1,    0,
              0,    0,      0,    1],
              "color": 0xFBF7E8
            },
            "shin": {
              "height": 15,
              "width": 4,
              "depth": 4,
              "position" : { "x": -.5, "y": -13.5, "z": 5 },
              "skew":  [1,    0,    0,    0,
              0,    1,      0,    0,
              0,    -.4,    1,    0,
              0,    0,      0,    1],
              "color": 0xFBF7E8
            },
            "paw": {
              "height": 5,
              "width": 5,
              "depth": 5,
              "position" : { "x": -.5, "y": -18.5, "z": 10 },
              "color": 0xFBF7E8
            }
          }
        },

        "tail": {
          "height": 6,
          "width": 2,
          "depth": 2,
          "position" : { "x": 0, "y": -32, "z": -14 },
          "children": {
            "one": {
              "height": 6,
              "width": 2,
              "depth": 2,
              "position": { "x":0, "y": 0, "z": 0 },
              "rotate": { "x":100, "y": 0, "z": 0 },
              "color": 0xFBF7E8
            }
          }
        }
      }
    }
  };

  return this.bodyDimensions;
};
