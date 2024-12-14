---
layout: gridlay
title: International Journals
sitemap: false
permalink: /international-journals/
---

# International Journals

{% for publi in site.data.publist %}
  {% if publi.type_J %}
  - **{{ publi.title }}** by {{ publi.authors }} ({{ publi.year }})
  {% endif %}
{% endfor %}
