---
title: "Service"
layout: gridlay
sitemap: false
permalink: /service/
toc:
  - title: Memberships & Committees
    id: memberships
  - title: Conference Committees
    id: committees
  - title: Journal Boards
    id: boards
---

<h1>Service</h1>

{% include toc.html %}

{% if site.data.memberships %}
<h2 class="section-heading" id="memberships">Memberships &amp; Committees</h2>

<ul class="stack-list">
{% for item in site.data.memberships %}
<li>{{ item.name }}</li>
{% endfor %}
</ul>
{% endif %}

{% if site.data.conference_committees %}
<h2 class="section-heading" id="committees">Conference Committees</h2>

<ul class="stack-list">
{% for item in site.data.conference_committees %}
<li>{{ item.name }}</li>
{% endfor %}
</ul>
{% endif %}

{% if site.data.journal_boards %}
<h2 class="section-heading" id="boards">Journal Boards</h2>

<ul class="stack-list">
{% for item in site.data.journal_boards %}
<li>{{ item.name }}</li>
{% endfor %}
</ul>
{% endif %}
