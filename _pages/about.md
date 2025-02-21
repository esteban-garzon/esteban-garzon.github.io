---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About 


{% for member in site.data.pi %}

<div class="row">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="30%" style="float: left" />
  <h3>{{ member.name }}</h3>
  <i style="font-size:20px">{{ member.info }}</i><br>

  {% if member.website %}<a href="{{ member.website }}" target="_blank"><i class="fa fa-home fa-3x"></i></a> {% endif %}
  {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-3x"></i></a> {% endif %}
  {% if member.scholar %} <a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-3x"></i></a> {% endif %}
  {% if member.cv %} <a href="{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-3x"></i></a> {% endif %}
  {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-3x"></i></a> {% endif %}
  {% if member.researchgate %} <a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-3x"></i></a> {% endif %}
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  {% if member.number_educ == 6 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  <li> {{ member.education6 }} </li>
  {% endif %}

  {% if member.number_educ == 7 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  <li> {{ member.education6 }} </li>
  <li> {{ member.education7 }} </li>
  {% endif %}

  </ul>
</div>

{% endfor %}

## Biography

Esteban Garzón received the B.Sc. Degree (cum laude) in Electronics Engineering from the Universidad San
Francisco de Quito (USFQ), Ecuador, in 2016, the dual M.Sc. degree (GPA: 4.0/4.0) in Nanoelectronics
and Electronics from USFQ and University of Calabria (UNICAL), Italy, in 2018, and the Ph.D. degree
in Electronics Engineering from UNICAL, in 2022. The same year, he won a highly competitive research
fellowship funded by the Italian Ministry for Universities and Research (MUR), under the call “Horizon
Europe 2021-2027 Programme”. He is currently a research fellow with the Department of Computer
Engineering, Modeling, Electronics, and Systems Engineering (DIMES), UNICAL. In July 2024, he received the National Scientific Habilitation (ASN) for Associate Professor of Electronics (Sector 09/E3) in Italian Universities. In Sep. 2024, he was awarded the distinction of Adjunct Professor at the USFQ, Quito, Ecuador.


In 2019-2020 he was a visiting Ph.D. student at EnICS laboratories, BIU, Israel. In Jul-Sep 2022 and
Jul-Aug 2023, he was a visiting researcher at EnICS labs. In Jan-Feb 2024, he was a visiting researcher at
the Department of Information Engineering, University of Pisa, Italy.

E. Garzón was an IEEE graduate student member from 2016, became an IEEE member in 2022, and
IEEE Senior Member in 2024. He has authored/coauthored more than 50 scientific papers in international
peer-reviewed journals and conferences, and has participated in several IC tapeouts. His research interests
include domain-specific hardware accelerators, electronics/spintronics, cryogenic memories, and standard
and emerging technologies for logic & memory, and low-power applications. He has received several awards,
research grants, and funding. E. Garzón has been part of several IEEE conference committees, and journal
boards as review editor of Frontiers in Electronics and Frontiers in Aerospace Engineering. Moreover, he has
been an active reviewer of several journals (IEEE, Elsevier, Frontiers, Wiley) and conferences (only IEEE).

## Professional Skills 
- **Integrated Circuit (IC) Design & System-Level Evaluation Skills (Not limited to)**
  - Transistor-level circuit design (analog blocks for memory architectures)
  - Register-transfer level design (digital circuits using HDLs)
  - Synthesis & Timing Analysis
  - Physical Design
    - Floorplanning
    - Place-and-Route
    - Layout Design
    - Design Verification & timing closure
  - Advanced semiconductor devices (FinFETs, SOI)
  - Emerging non-volatile memory technologies
    - MRAM (mainly STT-MRAM)
    - RRAM
  - Multi-level simulation frameworks and co-simulation techniques that integrate circuit-level, architectural-level, and system-level models

- **CAD/EDA (Not limited to)**
  * Virtuoso
  * Genus
  * Innovus
  * Xcelium

{% if site.data.awards %}
## Awards, Honours, and Recognitions

<ol>
{% for award in site.data.awards %}
<li>
 {{ award.name }}
</li>
{% endfor %}
{% endif %}
</ol>

{% if site.data.grants %}

<!-- 
## Grants

{% for grant in site.data.grants %}
* {{ grant.name }}
{% endfor %}

{% endif %}
-->

<!-- 
## Collaborators

* <a href="http://colonius.caltech.edu/" target="_blank">Professor Tim Colonius (Department of Mechanical and Civil Engineering, Caltech)</a>
* <a href="https://www.imperial.ac.uk/people/g.rigas" target="_blank">Professor Georgios Rigas (Department of Aeronautics, Imperial College London)</a>
* <a href="http://flowphysics.ucsd.edu/" target="_blank">Professor Oliver Schmidt (Department of Mechanical and Aerospace Engineering, UC San Diego)</a>
* <a href="http://atowne.com/" target="_blank">Professor Aaron Towne (Department of Mechanical Engineering, University of Michigan)</a>
* <a href="https://scholar.google.fr/citations?user=X7P6FUEAAAAJ&hl=fr" target="_blank"> Dr. Peter Jordan (Institut Pprime, CNRS, Universit ́e de Poitiers )</a>
* <a href="http://denissipp.free.fr/" target="_blank"> Dr. Denis Sipp (Research Director at ONERA)</a>
* <a href="http://www.ita.br/~cavalieri" target="_blank"> Professor Andre Cavalieri (Engenharia Aeronáutica, Instituto Tecnológico de Aeronáutica)</a>
* <a href="https://www.cascadetechnologies.com/" target="_blank"> Dr. Guillaume Brès (Director of Operations and Senior Research Scientist, CASCADE Technologies)</a>
-->




