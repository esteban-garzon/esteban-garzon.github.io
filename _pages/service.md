---
title: "Service"
layout: gridlay
sitemap: false
permalink: /service/
---

## Table of Contents
- [Journal Boards](#boards)
- [Memberships and Committees](#memberships)
- [Conference Committees](#committees)

{% if site.data.journal_boards %}
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Journal Boards </h2>
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
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Memberships And Committees </h2>
<a id="memberships"></a>

<ol>
{% for publi in site.data.memberships %}
<li>
 {{ publi.name }}
</li>
{% endfor %}
{% endif %}
</ol>


{% if site.data.conference_committees %}
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Conference Committees </h2>
<a id="committees"></a>

<ol>
{% for publi in site.data.conference_committees %}
<li>
 {{ publi.name }}
</li>
{% endfor %}
{% endif %}
</ol>

