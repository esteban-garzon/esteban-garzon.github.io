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
{% for publi in site.data.publist_pimat %}
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
* A complete list of the PI's publications: <a href="{{ site.baseurl }}/publications/" target="_blank">link</a>

... working on it... :)


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