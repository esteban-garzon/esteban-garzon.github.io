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


<!-- ###################################################################### 
                              PUBLICATIONS
######################################################################   -->
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Publications </h2>
<a id="publications"></a>

{% assign tot_count = 0 %}
{% assign B_count = 0 %}
{% assign J_count = 0 %}
{% assign C_count = 0 %}
{% assign yeartest = true %}
{% for publi in site.data.publist %}
  {% if publi.project == "PIMAT" %} 
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


<!-- ###################################################################### 
                                DELIVERABLES & MILESTONES
######################################################################   -->
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Deliverables & Milestones </h2>
<a id="resources-deliverables"></a>

<table style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr>
        <th style="border: 1px solid black; padding: 8px;">Item</th>
        <th style="border: 1px solid black; padding: 8px;">WP</th>
        <th style="border: 1px solid black; padding: 8px;">Description</th>
        <th style="border: 1px solid black; padding: 8px;">Status</th>
        <th style="border: 1px solid black; padding: 8px;">Type</th>
        <th style="border: 1px solid black; padding: 8px;">File</th>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">MS4</td>
        <td style="border: 1px solid black; padding: 8px;">WP4</td>
        <td style="border: 1px solid black; padding: 8px;">Dissemination, communication, and exploitation plan</td>
        <td style="border: 1px solid black; padding: 8px;">✔ Milestone Achieved at M1</td>
        <td style="border: 1px solid black; padding: 8px;">Public</td>
        <td style="border: 1px solid black; padding: 8px;"><a href="{{ site.baseurl }}/proj-pimat-ms4/" target="_blank">link</a></td>
    </tr> 
    <tr>
        <td style="border: 1px solid black; padding: 8px;">D4.1</td>
        <td style="border: 1px solid black; padding: 8px;">WP4</td>
        <td style="border: 1px solid black; padding: 8px;">Dissemination, communication, and exploitation plan</td>
        <td style="border: 1px solid black; padding: 8px;">✔ Delivered/ready at M1</td>
        <td style="border: 1px solid black; padding: 8px;">Confidential</td>
        <td style="border: 1px solid black; padding: 8px;">Limited (<a href="https://drive.google.com/file/d/1PHQISA59X2wwJcD--rMRuXrSYD0Uamf0/view?usp=sharing">Link</a>)</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">D5.1</td>
        <td style="border: 1px solid black; padding: 8px;">WP5</td>
        <td style="border: 1px solid black; padding: 8px;">Data management plan</td>
        <td style="border: 1px solid black; padding: 8px;">✔ Delivered/ready at M1</td>
        <td style="border: 1px solid black; padding: 8px;">Confidential</td>
        <td style="border: 1px solid black; padding: 8px;">Limited (<a href="https://drive.google.com/file/d/1kgQ1Yxy9zssJDBChgj7J76uqAZc-2FMn/view?usp=sharing">Link</a>)</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">D5.2</td>
        <td style="border: 1px solid black; padding: 8px;">WP5</td>
        <td style="border: 1px solid black; padding: 8px;">Risk management plan</td>
        <td style="border: 1px solid black; padding: 8px;">✔ Delivered/ready at M2</td>
        <td style="border: 1px solid black; padding: 8px;">Confidential</td>
        <td style="border: 1px solid black; padding: 8px;">Limited (<a href="https://drive.google.com/file/d/1zqNvQpjMph5CG9Jw6Ul4eBZfRK1dgg6h/view?usp=sharing">Link</a>)</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">D5.3</td>
        <td style="border: 1px solid black; padding: 8px;">WP5</td>
        <td style="border: 1px solid black; padding: 8px;">Partners Agreement</td>
        <td style="border: 1px solid black; padding: 8px;">✔ Delivered/ready at M3</td>
        <td style="border: 1px solid black; padding: 8px;">Confidential</td>
        <td style="border: 1px solid black; padding: 8px;">Limited (<a href="https://drive.google.com/file/d/1wmhZjJ1IfAa91GOTFz_exIIwbvLn5kEE/view?usp=sharing">Link</a>)</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">D1.1</td>
        <td style="border: 1px solid black; padding: 8px;">WP1</td>
        <td style="border: 1px solid black; padding: 8px;">Desk research: SOTA analysis</td>
        <td style="border: 1px solid black; padding: 8px;">✔ Delivered/ready at M3</td>
        <td style="border: 1px solid black; padding: 8px;">Confidential</td>
        <td style="border: 1px solid black; padding: 8px;">Limited (<a href="https://drive.google.com/file/d/1mSq_VaSi_2aKH_GyETjtYS14risdtLMv/view?usp=sharing">Link</a>)</td>
    </tr>
</table>




<!-- ###################################################################### 
                              TAPEOUTS
######################################################################   -->
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Tapeouts </h2>
<a id="tapeouts"></a>

... working on it... :)


<!-- ###################################################################### 
                              OTHER RESOURCES
######################################################################   -->
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Other Resources </h2>
<a id="resources"></a>

... working on it... :)
<!-- files datasets, public data -->