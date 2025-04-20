---
title: "Service"
layout: gridlay
sitemap: false
permalink: /service/
---

## Table of Contents
- [Journal Boards](#boards)
- [Conference Committees](#committees)

{% if site.data.journal_boards %}
## Journal Boards
<a id="boards"></a>

<ol>
{% for publi in site.data.journal_boards %}
<li>
 {{ publi.name }}
</li>
{% endfor %}
{% endif %}
</ol>


{% if site.data.conference_committees %}
## Conference Committees
<a id="committees"></a>

<ol>
{% for publi in site.data.conference_committees %}
<li>
 {{ publi.name }}
</li>
{% endfor %}
{% endif %}
</ol>

