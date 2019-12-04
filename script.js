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
      let r = player.getAttribute('rotation');
      var pos = player.getAttribute("position");
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
    }
  })
