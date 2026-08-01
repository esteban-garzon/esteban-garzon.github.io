/* Publications page: type filter, live search, and lazy BibTeX loading. */
(function () {
  'use strict';

  function init() {
    initBibtex();
    initFilters();
  }

  // --- BibTeX: fetch on first open, plus copy-to-clipboard ----------------

  function initBibtex() {
    var triggers = document.querySelectorAll('a.btn-bib[data-bib]');

    Array.prototype.forEach.call(triggers, function (trigger) {
      trigger.addEventListener('click', function () {
        var panel = document.querySelector(trigger.getAttribute('href'));
        if (!panel || panel.getAttribute('data-loaded') === 'true') return;

        panel.setAttribute('data-loaded', 'true');
        var code = panel.querySelector('code');

        fetch(trigger.getAttribute('data-bib'))
          .then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.text();
          })
          .then(function (text) {
            code.textContent = text.trim();
          })
          .catch(function () {
            panel.setAttribute('data-loaded', 'false');
            code.textContent = 'Could not load the BibTeX entry.';
          });
      });
    });

    document.addEventListener('click', function (e) {
      var button = e.target.closest ? e.target.closest('.bib-copy') : null;
      if (!button) return;

      var code = button.parentNode.querySelector('code');
      if (!code) return;

      copyText(code.textContent).then(function (ok) {
        button.textContent = ok ? 'Copied' : 'Press ⌘C';
        button.classList.toggle('is-copied', ok);
        setTimeout(function () {
          button.textContent = 'Copy';
          button.classList.remove('is-copied');
        }, 2000);
      });
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text)
        .then(function () { return true; })
        .catch(function () { return false; });
    }
    // Fallback for non-secure contexts (e.g. plain http://127.0.0.1).
    return new Promise(function (resolve) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      document.body.removeChild(ta);
      resolve(ok);
    });
  }

  // --- Filter + search ----------------------------------------------------

  function initFilters() {
    var toolbar = document.querySelector('.pub-toolbar');
    if (!toolbar) return;

    var buttons = toolbar.querySelectorAll('.pub-filter');
    var search = toolbar.querySelector('.pub-search');
    var counter = toolbar.querySelector('.pub-count');
    var empty = document.querySelector('.pub-empty');
    var items = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var headings = Array.prototype.slice.call(document.querySelectorAll('.pub-year'));

    var state = { type: 'all', query: '' };

    function apply() {
      var shown = 0;

      items.forEach(function (item) {
        var typeOk = state.type === 'all' || item.getAttribute('data-type') === state.type;
        var textOk = !state.query ||
                     item.getAttribute('data-search').indexOf(state.query) !== -1;
        var visible = typeOk && textOk;

        item.classList.toggle('is-hidden', !visible);
        if (visible) shown++;
      });

      // Hide a year heading when nothing under it survives the filter.
      headings.forEach(function (heading) {
        var list = heading.nextElementSibling;
        while (list && !list.classList.contains('pub-list')) {
          list = list.nextElementSibling;
        }
        if (!list) return;
        var any = list.querySelector('.pub:not(.is-hidden)');
        heading.classList.toggle('is-hidden', !any);
        list.classList.toggle('is-hidden', !any);
      });

      if (counter) {
        counter.textContent = shown + (shown === 1 ? ' entry' : ' entries');
      }
      if (empty) {
        empty.classList.toggle('is-visible', shown === 0);
      }
    }

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener('click', function () {
        Array.prototype.forEach.call(buttons, function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('is-active');
        button.setAttribute('aria-pressed', 'true');
        state.type = button.getAttribute('data-filter');
        apply();
      });
    });

    if (search) {
      search.addEventListener('input', function () {
        state.query = search.value.trim().toLowerCase();
        apply();
      });
    }

    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
