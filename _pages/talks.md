---
title: "Talks"
layout: gridlay
sitemap: false
permalink: /talks/
---


## Table of Contents
- [Personal Talks in Conferences](#personal)
- [Invited Talks/Seminars](#invited)


{% if site.data.conference_talks %}
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Personal Talks in Conferences  </h2>
<a id="personal"></a>

<ol>
{% for publi in site.data.conference_talks %}
<li>
<strong>{{ publi.title }}</strong> <br/> <i>{{ publi.authors }}</i>, {{ publi.conf }} ({{ publi.year }})
</li>
{% endfor %}
{% endif %}
</ol>

{% if site.data.invited_talks %}
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Invited Talks/Seminars  </h2>
<a id="invited"></a>

<ol>
{% for publi in site.data.invited_talks %}
<li>
{{ publi.name }}
</li>
{% endfor %}
{% endif %}
</ol>