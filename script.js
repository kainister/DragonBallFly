function cos(v) {
    return Math.cos((v - 180) * (Math.PI / 180.0));
  }

  function sin(v) {
    return Math.sin((v - 180) * (Math.PI / 180.0));
  }


  function tan(v) {
    return Math.tan((v - 180) * (Math.PI / 180.0));
  }

  AFRAME.registerComponent("fly", {
    init: function() {
      
    },
    tick() {
      const step = 0.7
      const player = document.querySelector("a-camera")
      const goku = document.querySelector("a-gltf-model")
      let r = player.getAttribute('rotation');
      var pos = player.getAttribute("position");
      var rot = goku.getAttribute("rotation");
      pos.x += step * sin(r.y);
      pos.y += step * tan(r.x);
      pos.z += step * cos(r.y);

      if (pos.y <= 1) {
        pos.y = 1.5;
      }
      if (pos.y >= 350) {
        pos.y = 350;
      }
      if (pos.x >= 180) {
        pos.x = 180;
      }
      if (pos.x <= -180) {
        pos.x = -180;
      }
      if (pos.z >= 180) {
        pos.z = 180;
      }
      if (pos.z <= -180) {
        pos.z = -180;
      }
      player.setAttribute("position", pos);

      if (rot.z <= 0) {
        setTimeout(function(){
          for(let i = 0; i <= 5; i++){
            rot.z = i;
            goku.setAttribute("rotation", rot)
          }
        },1000)
      }
      if(rot.z === 5){
        setTimeout(function(){
          for(let i = 5; i >= -5; i--){
            rot.z = i;
            goku.setAttribute("rotation", rot)
          }
        },1000)
      }
    }
  })
