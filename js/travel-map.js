/* Travel map (/travel-map/) -- progressive enhancement only.
   Without this file the maps still render, the native SVG <title> tooltips
   still work and the country/city breakdown below is complete. All this adds
   is a two-way highlight between a marker and its entry in that breakdown. */
(function () {
  'use strict';

  function init() {
    var markers = document.querySelectorAll('.map__marker[data-city]');
    var cities = document.querySelectorAll('.travel-city[data-city]');
    if (!markers.length || !cities.length) { return; }

    // One city can own several markers (world map + Europe inset), so index by
    // slug rather than pairing elements one to one.
    var byCity = {};
    function bucket(slug) {
      if (!byCity[slug]) { byCity[slug] = { markers: [], cities: [] }; }
      return byCity[slug];
    }

    Array.prototype.forEach.call(markers, function (marker) {
      bucket(marker.getAttribute('data-city')).markers.push(marker);
      marker.setAttribute('tabindex', '0');
      marker.setAttribute('role', 'link');
    });
    Array.prototype.forEach.call(cities, function (city) {
      bucket(city.getAttribute('data-city')).cities.push(city);
    });

    function highlight(slug, on) {
      var group = byCity[slug];
      if (!group) { return; }
      group.markers.forEach(function (el) { el.classList.toggle('is-active', on); });
      group.cities.forEach(function (el) { el.classList.toggle('is-active', on); });
    }

    function reveal(slug) {
      var group = byCity[slug];
      if (!group || !group.cities.length) { return; }
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      group.cities[0].scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth',
        block: 'center'
      });
    }

    Array.prototype.forEach.call(markers, function (marker) {
      var slug = marker.getAttribute('data-city');
      marker.addEventListener('mouseenter', function () { highlight(slug, true); });
      marker.addEventListener('mouseleave', function () { highlight(slug, false); });
      marker.addEventListener('focus', function () { highlight(slug, true); });
      marker.addEventListener('blur', function () { highlight(slug, false); });
      marker.addEventListener('click', function () { reveal(slug); });
      marker.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          reveal(slug);
        }
      });
    });

    Array.prototype.forEach.call(cities, function (city) {
      var slug = city.getAttribute('data-city');
      city.addEventListener('mouseenter', function () { highlight(slug, true); });
      city.addEventListener('mouseleave', function () { highlight(slug, false); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
