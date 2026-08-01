---
title: "Talks"
layout: gridlay
sitemap: false
permalink: /talks/
toc:
  - title: Personal Talks in Conferences
    id: personal
  - title: Invited Talks / Seminars
    id: invited
---

<h1>Talks</h1>

{% include toc.html %}

{% if site.data.conference_talks %}
<h2 class="section-heading" id="personal">Personal Talks in Conferences</h2>

<ul class="stack-list">
{% for talk in site.data.conference_talks %}
<li><strong>{{ talk.title }}</strong><br/><em>{{ talk.authors }}</em><br/>{{ talk.conf }} ({{ talk.year }})</li>
{% endfor %}
</ul>
{% endif %}

{% if site.data.invited_talks %}
<h2 class="section-heading" id="invited">Invited Talks &amp; Seminars</h2>

<ul class="stack-list">
{% for talk in site.data.invited_talks %}
<li>{{ talk.name }}</li>
{% endfor %}
</ul>
{% endif %}
