(function () {
  var data = window.SD || [];
  var box  = document.getElementById('search-box');
  var res  = document.getElementById('search-res');
  if (!box || !res) return;

  function show(q) {
    q = q.trim().toLowerCase();
    res.innerHTML = '';
    if (q.length < 2) { res.classList.remove('on'); return; }

    var hits = [];
    for (var i = 0; i < data.length && hits.length < 60; i++) {
      if (data[i].t.toLowerCase().indexOf(q) >= 0) hits.push(data[i]);
    }
    if (!hits.length) {
      res.innerHTML = '<div class="sr-none">No results</div>';
      res.classList.add('on');
      return;
    }
    var frag = document.createDocumentFragment();
    hits.forEach(function (d) {
      var a = document.createElement('a');
      a.href = d.p; a.className = 'sr';
      a.innerHTML = '<span>' + d.t.replace(/</g, '&lt;') + '</span>'
                  + '<span class="cat"> — ' + d.c + '</span>';
      frag.appendChild(a);
    });
    res.appendChild(frag);
    res.classList.add('on');
  }

  box.addEventListener('input', function () { show(this.value); });

  document.addEventListener('click', function (e) {
    if (!res.contains(e.target) && e.target !== box) res.classList.remove('on');
  });

  box.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { res.classList.remove('on'); this.value = ''; }
    if (e.key === 'Enter')  { var f = res.querySelector('.sr'); if (f) location.href = f.href; }
    if (e.key === 'ArrowDown') { var f = res.querySelector('.sr'); if (f) { f.focus(); e.preventDefault(); } }
  });

  res.addEventListener('keydown', function (e) {
    var cur = document.activeElement;
    if (e.key === 'ArrowDown' && cur.nextElementSibling) { cur.nextElementSibling.focus(); e.preventDefault(); }
    if (e.key === 'ArrowUp') {
      if (cur.previousElementSibling) cur.previousElementSibling.focus();
      else box.focus();
      e.preventDefault();
    }
    if (e.key === 'Escape') { res.classList.remove('on'); box.focus(); }
  });
}());

// Jump-bar anchor clicks replace history state instead of pushing a new entry,
// so Back skips past them to the actual previous page.
document.querySelectorAll('.jump-bar a[href*="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    var hash = href.indexOf('#');
    if (hash === -1) return;
    var id = href.slice(hash + 1);
    var el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView();
    history.replaceState(null, '', href);
  });
});
