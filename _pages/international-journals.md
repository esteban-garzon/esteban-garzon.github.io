---
layout: gridlay
title: International Journals
sitemap: false
permalink: /international-journals/
---

## International Journals

<ol>
{% for publi in site.data.publist %}
  {% if publi.type_J %}

  {% assign bibtest = false %}
  {% if publi.url %}
    {% assign bibfile = "/papers/" | append:  publi.url  | append: ".txt" %}
    {% for file in site.static_files %}
      {% if file.path contains bibfile %}
        {% assign bibtest = true %}
      {% endif %}
    {% endfor %}
  {% endif %}

  <li>
  {{ publi.title }}<br/>
  {{ publi.authors }}<br/> 
  {{ publi.display }} ({{ publi.year }})<br/>
  <div class="flex-item2">
    {% if publi.pdf %}<a href="{{ site.url }}{{ site.baseurl }}/papers/{{ publi.pdf }}.pdf" target="_blank"><button class="btn-pdf">PDF</button></a>{% endif %}
    {% if publi.doi %}<a href="http://dx.doi.org/{{ publi.doi }}" target="_blank"><button class="btn-doi">DOI/URL</button></a> {% endif %}
    {% if publi.arxiv %}<a href="https://arxiv.org/abs/{{ publi.arxiv }}" target="_blank"><button class="btn-arxiv">ARXIV</button></a> {% endif %}
    {% if bibtest == true %} <a data-toggle="collapse" href="#{{publi.url}}2"  class="btn-bib" style="text-decoration:none; color:#ebebeb; hover:#ebebeb;" role="button" aria-expanded="false" aria-controls="{{publi.url}}2">BIB</a> {% endif %}
    {% if publi.abstract %} <a data-toggle="collapse" href="#{{publi.url}}"  class="btn-abstract" style="text-decoration:none; color:#ebebeb; hover:#ebebeb;" role="button" aria-expanded="false" aria-controls="{{publi.url}}">ABSTRACT</a> {% endif %}
    {% if publi.project %}<a href="{{ site.baseurl }}/proj-{{ publi.project | downcase }}/" target="_blank"><button class="btn-project">Proj. {{ publi.project }}</button></a> {% endif %}
  </div>

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
  {% endif %}
{% endfor %}
</ol>



