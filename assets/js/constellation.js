(function () {
  // Create & append canvas directly to <body> — guaranteed outside all layout containers
  var wrapper = document.createElement('div');
  wrapper.id = 'constellation-bg';
  wrapper.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:0;pointer-events:none;overflow:hidden;';

  var c = document.createElement('canvas');
  c.id = 'constellation';
  wrapper.appendChild(c);
  document.body.insertBefore(wrapper, document.body.firstChild);

  var ctx = c.getContext('2d');

  function resize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var N = 55, pts = [], i, p;

  for (i = 0; i < N; i++) {
    pts.push({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35
    });
  }

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    for (i = 0; i < N; i++) {
      p = pts[i];
      if (!reduce) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
      }
    }

    for (i = 0; i < N; i++) {
      for (var j = i + 1; j < N; j++) {
        var a = pts[i], b = pts[j];
        var dx = a.x - b.x, dy = a.y - b.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < 140) {
          ctx.strokeStyle = 'rgba(26,122,109,' + ((1 - d / 140) * 0.18) + ')';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (i = 0; i < N; i++) {
      ctx.fillStyle = 'rgba(26,122,109,0.45)';
      ctx.beginPath();
      ctx.arc(pts[i].x, pts[i].y, 2, 0, 6.283);
      ctx.fill();
    }

    if (!reduce) requestAnimationFrame(draw);
  }

  draw();
})();
