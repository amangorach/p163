AFRAME.registerComponent("wire-fence", {
  init: function () {
    //starting x position
    posX = -20;
    //starting z-position
    posZ = 85;


  },
});

//boxes
//UPDATE the component code here
AFRAME.registerComponent("boxes", {
  schema: {
    height: { type: "number", default: 5 },
    width: { type: "number", default: 15 },
    depth: { type: "number", default: 0.4 },
  },
  init: function () {
    //keep the loop counter very less if the scene is not loading
    for (var i = 0; i < 20; i++) {

      var box = document.createElement("a-entity");
      box.setAttribute("id", "box" + i);

      //set position attribute
      posX = Math.random() * 40 - 20;
      posY = 1.8;
      posZ = Math.random() * 20 - 30;

      position = { x: posX, y: posY, z: posZ };

      // rotation
      rotX = 0
      rotY = Math.random()*45 - 10;
      rotZ = 0

      rotation = {x:rotX, y:rotY, z:rotZ};

      box.setAttribute("rotation", rotation)
      box.setAttribute("position", position)
      //set geometry attribute
      box.setAttribute("geometry", {
        primitive: "box",
        height: this.data.height,
        width: this.data.width,
        depth: this.data.depth
      });

      //set material attribute
      box.setAttribute("material", {
       color:"grey"
      })

      // set static-body attribute
      box.setAttribute("static-body", {})

      //append the box to the scene
      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }
  },
});

