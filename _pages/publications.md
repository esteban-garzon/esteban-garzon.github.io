---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
---

## Publications

{% assign tot_count = 0 %}
{% assign B_count = 0 %}
{% assign J_count = 0 %}
{% assign C_count = 0 %}
{% assign yeartest = true %}
{% for publi in site.data.publist %}
  {% if publi.year %}
    {% assign tot_count = tot_count | plus: 1 %}
  {% else %}
    {% assign yeartest = false %}
  {% endif %}
  {% if publi.type_B %}
    {% assign B_count = B_count | plus: 1 %}
  {% endif %}
  {% if publi.type_J %}
    {% assign J_count = J_count | plus: 1 %}
  {% endif %}
  {% if publi.type_C %}
    {% assign C_count = C_count | plus: 1 %}
  {% endif %}
{% endfor %}

* Total Number of peer-reviewed publications: {{ tot_count }}
  * Journals: {{ J_count }}
  * Conferences: {{ C_count }}
  * Book Chapter: {{ B_count }}

<button onclick="window.location.href='{{ site.baseurl }}/international-journals/'">Journals</button> <button onclick="window.location.href='{{ site.baseurl }}/conferences/'">Conferences</button> <button onclick="window.location.href='{{ site.baseurl }}/book-chapters/'">Book Chapter</button>  

{% if yeartest == false %}
## Coming Soon
{% endif %}

{% for publi in site.data.publist %}
{% if publi.year %}{% else %}

{% assign bibtest = false %}
{% if publi.url %}
{% assign bibfile = "/papers/" | append:  publi.url  | append: ".txt" %}
{% for file in site.static_files %}
  {% if file.path contains bibfile %}
   {% assign bibtest = true %}
  {% endif %}
{% endfor %}
{% endif %}

<div class="well-sm">
<ul class="flex-container">
<li class="flex-item1">
  {% if publi.image %}
   <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="100%" style="float: left" />
  {% endif %}
</li>
<li class="flex-item2">
  <strong> {{ publi.title }}</strong><br/>
  <em>{{ publi.authors }} </em><br/>
  {{ publi.display }}<br/>
  {% if publi.pdf %}<a href="{{ site.url }}{{ site.baseurl }}/papers/{{ publi.pdf }}.pdf" target="_blank"><button class="btn-pdf">PDF</button></a>{% endif %}
  {% if publi.doi %}<a href="http://dx.doi.org/{{ publi.doi }}" target="_blank"><button class="btn-doi">DOI/URL</button></a> {% endif %}
  {% if publi.arxiv %}<a href="https://arxiv.org/abs/{{ publi.arxiv }}" target="_blank"><button class="btn-arxiv">ARXIV</button></a> {% endif %}
  {% if bibtest == true %} <a data-toggle="collapse" href="#{{publi.url}}2"  class="btn-bib" style="text-decoration:none; color:#ebebeb; hover:#ebebeb;" role="button" aria-expanded="false" aria-controls="{{publi.url}}2">BIB</a> {% endif %}
  {% if publi.abstract %} <a data-toggle="collapse" href="#{{publi.url}}"  class="btn-abstract" style="text-decoration:none; color:#ebebeb; hover:#ebebeb;" role="button" aria-expanded="false" aria-controls="{{publi.url}}">ABSTRACT</a> {% endif %}

{% if publi.abstract %}
<div class="collapse" id="{{publi.url}}"><div class="well-abstract">
 {{publi.abstract}}
</div></div>
{% endif %}

{% if bibtest == true %}
<div class="collapse" id="{{publi.url}}2"><div class="well-bib">
 <iframe src='{{site.url}}{{site.baseurl}}/papers/{{publi.url}}.txt' scrolling='yes' width="100%" height="210" frameborder='0'></iframe>
</div></div>
{% endif %}

</li>
</ul>
</div>
{% endif %}
{% endfor %}

{% if site.group_pub_by_year == true %}{% else %}
## Journal Papers and Proceedings 
{% endif %}

{% for myyear in site.data.years %}

{% assign yeartest = false %}
{% for publi in site.data.publist %}
  {% if publi.year == myyear.year %}
   {% assign yeartest = true %}
  {% endif %}
{% endfor %}

{% if site.group_pub_by_year == true %}
{% if yeartest == true %}
## {{ myyear.year }}
{% endif %}
{% endif %}

{% for publi in site.data.publist %}
{% if publi.year == myyear.year %}


{% assign bibtest = false %}
{% if publi.url %}
{% assign bibfile = "/papers/" | append:  publi.url  | append: ".txt" %}
{% for file in site.static_files %}
  {% if file.path contains bibfile %}
   {% assign bibtest = true %}
  {% endif %}
{% endfor %}
{% endif %}

<div class="well-sm">
<ul class="flex-container">
<li class="flex-item1">
  {% if publi.image %}
   <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="200%" style="float: left" />
  {% endif %}
</li>
<li class="flex-item2">
  <strong> {{ publi.title }}</strong> <br />
  <em>{{ publi.authors }} </em><br />
  {{ publi.display }} {% if publi.year %}({{publi.year}}){% endif %}<br/>
  {% if publi.pdf %}<a href="{{ site.url }}{{ site.baseurl }}/papers/{{ publi.pdf }}.pdf" target="_blank"><button class="btn-pdf">PDF</button></a>{% endif %}
  {% if publi.doi %}<a href="http://dx.doi.org/{{ publi.doi }}" target="_blank"><button class="btn-doi">DOI/URL</button></a> {% endif %}
  {% if publi.arxiv %}<a href="https://arxiv.org/abs/{{ publi.arxiv }}" target="_blank"><button class="btn-arxiv">ARXIV</button></a> {% endif %}
  {% if bibtest == true %} <a data-toggle="collapse" href="#{{publi.url}}2" class="btn-bib" style="text-decoration:none; color:#ebebeb; hover:#ebebeb;" role="button" aria-expanded="false" aria-controls="{{publi.url}}2">BIB</a> {% endif %}
  {% if publi.abstract %} <a data-toggle="collapse" href="#{{publi.url}}" class="btn-abstract" style="text-decoration:none; color:#ebebeb; hover:#ebebeb;" role="button" aria-expanded="false" aria-controls="{{publi.url}}">ABSTRACT</a>{% endif %}
  {% if publi.project %}<a href="{{ site.baseurl }}/proj-{{ publi.project | downcase }}/" target="_blank"><button class="btn-project">Proj. {{ publi.project }}</button></a> {% endif %}

{% if publi.abstract %}
<br/>
<div class="collapse" id="{{publi.url}}"><div class="well-abstract">
 {{publi.abstract}}
</div></div>
{% endif %}

{% if bibtest == true %}
<div class="collapse" id="{{publi.url}}2"><div class="well-bib">
<iframe src='{{site.url}}{{site.baseurl}}/papers/{{publi.url}}.txt' scrolling='yes' width="100%" height="210" frameborder='0'></iframe>
</div></div>
{% endif %}

</li>
</ul>

</div>
{% endif %}
{% endfor %}

{% endfor %}

