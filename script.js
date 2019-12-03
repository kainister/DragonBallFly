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
      const step = 0.4
      const player = document.querySelector("a-camera")
      let r = player.getAttribute('rotation');
      var pos = player.getAttribute("position");
      pos.x += step * sin(r.y);
      pos.y += step * tan(r.x);
      pos.z += step * cos(r.y);
      player.setAttribute("position", pos);
    }
  })
