---
title: "Talks"
layout: gridlay
sitemap: false
permalink: /talks/
---


# Talks

{% if site.data.conference_talks %}
## Personal Talks in Conferences

<ol>
{% for publi in site.data.conference_talks %}
* <strong>{{ publi.title }}</strong> <br/> <i>{{ publi.authors }}</i>, {{ publi.conf }} ({{ publi.year }})
{% endfor %}
{% endif %}
</ol>

{% if site.data.invited_talks %}
## Invited Talks/Seminars

<ol>
{% for publi in site.data.invited_talks %}
* {{ publi.name }}
{% endfor %}
{% endif %}
</ol>