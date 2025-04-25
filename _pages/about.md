---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## Table of Contents
- [About](#about)
- [Biography](#biography)
- [Professional Skills](#skills)
- [Awards, Honours, and Recognitions](#awards)
- [Collaborators](#colaborations)

## About 
<a id="about"></a>

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
<a id="biography"></a>

Esteban Garzón received the B.Sc. Degree (cum laude) in Electronics Engineering from the Universidad San
Francisco de Quito (USFQ), Ecuador, in 2016, the dual M.Sc. degree (GPA: 4.0/4.0) in Nanoelectronics
and Electronics from USFQ and University of Calabria (UNICAL), Italy, in 2018, and the Ph.D. degree (Hons.)
in Electronics Engineering from UNICAL, in 2022. He is currently an Assistant Professor with the Department of Computer Engineering, Modeling, Electronics, and Systems Engineering (DIMES), UNICAL. In July 2024, he received the National Scientific Habilitation (ASN) for Associate Professor of Electronics (Sector 09/E3) in Italian Universities. In Sep. 2024, he was awarded the distinction of Adjunct Professor at the USFQ, Quito, Ecuador. 

In 2019-2020 he was a visiting Ph.D. student at EnICS laboratories, BIU, Israel. In Jul-Sep 2022 and
Jul-Aug 2023, he was a visiting researcher at EnICS labs. In Jan-Feb 2024, he was a visiting researcher at
the Department of Information Engineering, University of Pisa, Italy.

E. Garzón was an IEEE graduate student member from 2016, became an IEEE member in 2022, and
IEEE Senior Member in 2024. He has authored/coauthored more than 55 scientific papers in international
peer-reviewed journals and conferences, and has participated in several IC tapeouts. His research interests
include domain-specific hardware accelerators, electronics/spintronics, embedded memories, and standard
and emerging technologies for logic & memory, and low-power applications. He has received several awards,
research grants, and funding (as Principal Investigator). E. Garzón has been part of several IEEE conference committees, and journal boards. Moreover, he has been an active reviewer of several journals (IEEE, Elsevier, Frontiers, Wiley) and conferences.

<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Professional Skills  </h2>
<a id="skills"></a>
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
<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Awards, Honours, and Recognitions  </h2>
<a id="awards"></a>

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


<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Current and Past Collaborators  </h2>
<a id="colaborations"></a>

### National  
* **Prof. Marco Lanuzza**, Department of Computer Engineering, Modeling, Electronics and Systems, University of Calabria, Rende, Italy  
* **Prof. Felice Crupi**, Department of Computer Engineering, Modeling, Electronics and Systems, University of Calabria, Rende, Italy  
* **Prof. Raffaele De Rose**, Department of Computer Engineering, Modeling, Electronics and Systems, University of Calabria, Rende, Italy  
* **Dr. Ramiro Taco**, Department of Computer Engineering, Modeling, Electronics and Systems, University of Calabria, Rende, Italy  
* **Prof. Giuseppe Iannaccone**, Department of Information Engineering, University of Pisa, Pisa, Italy  
* **Prof. Sebastiano Strangio**, Department of Information Engineering, University of Pisa, Pisa, Italy  
* **Prof. Mario Carpentieri**, Department of Electrical and Information Engineering, Politecnico di Bari, Bari, Italy  
* **Dr. Andrea Meo**, Department of Electrical and Information Engineering, Politecnico di Bari, Bari, Italy  
* **Prof. Giovanni Finocchio**, Department of Mathematical and Computer Sciences, Physical Sciences and Earth Sciences, University of Messina, Messina, Italy  

### International  
* **Prof. Pedram Khalili**, McCormick School of Engineering and Applied Science, Northwestern University, Illinois, USA  
* **Prof. Adam Teman**, EnICS Labs, Faculty of Engineering, Bar-Ilan University, Ramat-Gan, Israel  
* **Dr. Leonid Yavits**, EnICS Labs, Faculty of Engineering, Bar-Ilan University, Ramat-Gan, Israel  
* **Prof. Alexander Fish**, EnICS Labs, Faculty of Engineering, Bar-Ilan University, Ramat-Gan, Israel  
* **Prof. Lionel Trojman**, Institut supérieur d’électronique de Paris, Paris, France  
* **Prof. Etienne Sicard**, L’Institut National des Sciences Appliquées, Toulouse, France  
* **Prof. Andrei Vladimirescu**, University of California, Berkeley, California, USA  
* **Prof. Luis-Miguel Procel**, Institute of Micro and Nano Electronics, Faculty of Engineering, Quito, Ecuador
* **Prof. Eduardo Javier Holguin Weber**, Institute of Micro and Nano Electronics, Faculty of Engineering, Quito, Ecuador  



