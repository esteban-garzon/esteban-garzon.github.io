---
layout: gridlay
title: "PIMAT publications"
sitemap: false
permalink: /proj-pimat-publ/
---

## Table of Contents
- [Publications](#publications)
- [Deliverables](#resources-deliverables)
- [Tapeouts](#tapeouts)
- [Other Resources](#resources)


## Publications
<a id="publications"></a>

{% assign tot_count = 0 %}
{% assign B_count = 0 %}
{% assign J_count = 0 %}
{% assign C_count = 0 %}
{% assign yeartest = true %}
{% for publi in site.data.publist %}
  {% if publi.project == "PIMAT" %}  {# Only count when project is PIMAT #}
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
  {% endif %}
{% endfor %}

* Total Number of peer-reviewed publications: {{ tot_count }}
  * Journals: {{ J_count }}
  * Conferences: {{ C_count }}
* A complete list of the PI's publications: <a href="{{ site.baseurl }}/publications/" target="_blank">link</a>

<ol>
{% for publi in site.data.publist %}
  {% if publi.project == "PIMAT" %}

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


## Deliverables
<a id="resources-deliverables"></a>

<table style="width: 100%; border-collapse: collapse; text-align: left;">
	<tr>
        <th style="border: 1px solid black; padding: 8px;">Status</th>
        <th style="border: 1px solid black; padding: 8px;">Item</th>
        <th style="border: 1px solid black; padding: 8px;">WP</th>
        <th style="border: 1px solid black; padding: 8px;">Description</th>
        <th style="border: 1px solid black; padding: 8px;">Type</th>
        <th style="border: 1px solid black; padding: 8px;">Link</th>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">✔</td>
        <td style="border: 1px solid black; padding: 8px;">Item 1</td>
        <td style="border: 1px solid black; padding: 8px;">WP1</td>
        <td style="border: 1px solid black; padding: 8px;">Short description</td>
        <td style="border: 1px solid black; padding: 8px;">Type A</td>
        <td style="border: 1px solid black; padding: 8px;"><a href="#">Link 1</a></td>
    </tr>
</table>


## Tapeouts
<a id="tapeouts"></a>

... working on it... :)

## Other Resources
<a id="resources"></a>

... working on it... :)