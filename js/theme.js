/* Light/dark theme toggle.
   The initial theme is resolved by an inline script in _includes/head.html
   so there is no flash of the wrong theme on load. */
(function () {
  'use strict';

  var root = document.documentElement;

  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* private mode */ }
  }

  function init() {
    var button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', function () {
        apply(current() === 'dark' ? 'light' : 'dark');
      });
    }

    // Follow the OS only while the visitor has not made an explicit choice.
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) { /* private mode */ }

    if (!stored && window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function (e) {
        root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      };
      if (mq.addEventListener) {
        mq.addEventListener('change', onChange);
      } else if (mq.addListener) {
        mq.addListener(onChange);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
