---
layout: gridlay
title: "PIMAT publications"
sitemap: false
permalink: /proj-pimat-publ/
publications: true
toc:
  - title: Publications
    id: publications
  - title: Deliverables & Milestones
    id: resources-deliverables
  - title: Tapeouts
    id: tapeouts
  - title: Other Resources
    id: resources
---

<h1>PIMAT publications</h1>

{% include toc.html %}
<!-- ###################################################################### 
                              PUBLICATIONS
######################################################################   -->
<h2 class="section-heading" id="publications">Publications</h2>

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

<ul class="pub-list">
{% for publi in site.data.publist %}
  {% if publi.project == "PIMAT" %}
    {% include publication-card.html publi=publi %}
  {% endif %}
{% endfor %}
</ul>


<!-- ###################################################################### 
                                DELIVERABLES & MILESTONES
######################################################################   -->
<h2 class="section-heading" id="resources-deliverables">Deliverables & Milestones</h2>

<div class="table-wrap">
<table>
    <tr>
        <th>Item</th>
        <th>WP</th>
        <th>Description</th>
        <th>Status</th>
        <th>File</th>
    </tr>
    <tr>
        <td>D3.1</td>
        <td>WP3</td>
        <td>Benchmarking and Assessment</td>
        <td>✔ Delivered/ready at M16</td>
        <td> -- </td>
    </tr> 
    <tr>
        <td>D4.5</td>
        <td>WP4</td>
        <td>Dissemination, communication, and exploitation plan</td>
        <td>✔ Delivered/ready at M16</td>
        <td> -- </td>
    </tr> 
    <tr>
        <td>MS4</td>
        <td>WP4</td>
        <td>Dissemination, communication, and exploitation plan</td>
        <td>✔ Milestone Achieved at M1</td>
        <td><a href="{{ site.baseurl }}/proj-pimat-ms4/" target="_blank">link</a></td>
    </tr> 
    <tr>
        <td>D4.1</td>
        <td>WP4</td>
        <td>Dissemination, communication, and exploitation plan</td>
        <td>✔ Delivered/ready at M1</td>
        <td> -- </td>
    </tr>
    <tr>
        <td>D5.1</td>
        <td>WP5</td>
        <td>Data management plan</td>
        <td>✔ Delivered/ready at M1</td>
        <td> -- </td>
    </tr>
    <tr>
        <td>D5.2</td>
        <td>WP5</td>
        <td>Risk management plan</td>
        <td>✔ Delivered/ready at M2</td>
        <td> -- </td>
    </tr>
    <tr>
        <td>D5.3</td>
        <td>WP5</td>
        <td>Partners Agreement</td>
        <td>✔ Delivered/ready at M3</td>
        <td> -- </td>
    </tr>
    <tr>
        <td>D1.1</td>
        <td>WP1</td>
        <td>Desk research: SOTA analysis</td>
        <td>✔ Delivered/ready at M3</td>
        <td> -- </td>
    </tr>
    <tr>
        <td>D1.2</td>
        <td>WP1</td>
        <td>Algorithm-hardware co-design and optimization</td>
        <td>✔ Delivered/ready at M7</td>
        <td> -- </td>
    </tr>
    <tr>
        <td>D4.2</td>
        <td>WP4</td>
        <td>Hardware for Transformer Networks</td>
        <td>✔ Delivered/ready at M11</td>
        <td> -- </td>
    </tr>
    <tr>
        <td>D2.1</td>
        <td>WP2</td>
        <td>IC design report</td>
        <td>✔ Delivered/ready at M13</td>
        <td> -- </td>
    </tr>
    <tr>
        <td>MS1</td>
        <td>WP1</td>
        <td>HW-oriented algorithm defined</td>
        <td>✔ Delivered/ready at M14</td>
        <td> -- </td>
    </tr>
</table>
</div>




<!-- ###################################################################### 
                              TAPEOUTS
######################################################################   -->
<h2 class="section-heading" id="tapeouts">Tapeouts</h2>

... working on it... :)


<!-- ###################################################################### 
                              OTHER RESOURCES
######################################################################   -->
<h2 class="section-heading" id="resources">Other Resources</h2>

... working on it... :)
<!-- files datasets, public data -->