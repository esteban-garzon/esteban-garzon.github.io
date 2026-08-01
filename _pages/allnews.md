---
title: "News"
layout: textlay
sitemap: false
permalink: /allnews.html
---

<h1>News</h1>

<ul class="timeline">
{% for article in site.data.news %}
<li class="timeline__item">
<span class="timeline__date">{{ article.date }}</span>
<p class="timeline__body">{{ article.headline }}</p>
</li>
{% endfor %}
</ul>
