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
## Personal Talks in Conferences
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
## Invited Talks/Seminars
<a id="invited"></a>

<ol>
{% for publi in site.data.invited_talks %}
<li>
{{ publi.name }}
</li>
{% endfor %}
{% endif %}
</ol>