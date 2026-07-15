(function () {
  var c = document.getElementById('constellation');
  if (!c) return;
  var ctx = c.getContext('2d');
  var W = c.width, H = c.height;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var N = 60, pts = [], i, p;
  for (i = 0; i < N; i++) {
    pts.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (i = 0; i < N; i++) {
      p = pts[i];
      if (!reduce) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
    }
    for (i = 0; i < N; i++) {
      for (var j = i + 1; j < N; j++) {
        var a = pts[i], b = pts[j];
        var dx = a.x - b.x, dy = a.y - b.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx.strokeStyle = 'rgba(26,122,109,' + ((1 - d / 130) * 0.5) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    for (i = 0; i < N; i++) {
      ctx.fillStyle = '#1a7a6d';
      ctx.beginPath();
      ctx.arc(pts[i].x, pts[i].y, 2.3, 0, 6.283);
      ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }
  draw();
})();
