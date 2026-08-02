---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
toc:
  - title: Biography
    id: biography
  - title: Professional Skills
    id: skills
  - title: Awards & Honours
    id: awards
  - title: Collaborators
    id: colaborations
---

<h1>About</h1>

{% include toc.html %}

{% assign pi = site.data.pi | first %}

<div class="profile" markdown="0">
<img class="profile__photo" src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ pi.photo }}" alt="Portrait of Esteban Garzón" />
<div class="profile__body">
<h3>{{ pi.name }}</h3>
<p class="lead">{{ pi.info }}</p>
{% include social-links.html member=pi size="lg" %}
<h4>Positions &amp; Education</h4>
{% include education-list.html member=pi %}
</div>
</div>

<h2 class="section-heading" id="biography">Biography</h2>

Esteban Garzón received the B.Sc. Degree (cum laude) in Electronics Engineering from the Universidad San
Francisco de Quito (USFQ), Ecuador, in 2016, the dual M.Sc. degree (GPA: 4.0/4.0) in Nanoelectronics
and Electronics from USFQ and University of Calabria (UNICAL), Italy, in 2018, and the Ph.D. degree (Hons.)
in Electronics Engineering from UNICAL, in 2022. He is currently an Assistant Professor with the Department of Computer Engineering, Modeling, Electronics, and Systems Engineering (DIMES), UNICAL. In July 2024, he received the National Scientific Habilitation (ASN) for Associate Professor of Electronics (Sector 09/E3) in Italian Universities. In Sep. 2024, he was awarded the distinction of Adjunct Professor at the USFQ, Quito, Ecuador. 

In 2019-2020 he was a visiting Ph.D. student at EnICS laboratories, BIU, Israel. In Jul-Sep 2022 and
Jul-Aug 2023, he was a visiting researcher at EnICS labs. In Jan-Feb 2024, he was a visiting researcher at
the Department of Information Engineering, University of Pisa, Italy.

E. Garzón was an IEEE graduate student member from 2016, became an IEEE member in 2022, and
IEEE Senior Member in 2024. He has authored/coauthored more than 70 scientific papers in international
peer-reviewed journals and conferences, and has participated in several IC tapeouts. His research interests
include domain-specific hardware accelerators, electronics/spintronics, embedded memories, and standard
and emerging technologies for logic & memory, and low-power applications. He has received several awards,
research grants, and funding (as Principal Investigator). E. Garzón has been part of several IEEE conference committees, and journal boards. Moreover, he has been an active reviewer of several journals (IEEE, Elsevier, Frontiers, Wiley) and conferences.

<h2 class="section-heading" id="skills">Professional Skills</h2>

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
<h2 class="section-heading" id="awards">Awards, Honours, and Recognitions</h2>

<ul class="stack-list">
{% for award in site.data.awards %}
  <li>{{ award.name }}</li>
{% endfor %}
</ul>
{% endif %}

<h2 class="section-heading" id="colaborations">Current and Past Collaborators</h2>

### National  
* **Prof. Marco Lanuzza**, Department of Computer Engineering, Modeling, Electronics and Systems, University of Calabria, Rende, Italy  
* **Prof. Felice Crupi**, Department of Computer Engineering, Modeling, Electronics and Systems, University of Calabria, Rende, Italy  
* **Prof. Raffaele De Rose**, Department of Computer Engineering, Modeling, Electronics and Systems, University of Calabria, Rende, Italy  
* **Dr. Ramiro Taco**, Department of Computer Engineering, Modeling, Electronics and Systems, University of Calabria, Rende, Italy  
* **Prof. Giuseppe Iannaccone**, Department of Information Engineering, University of Pisa, Pisa, Italy  
* **Prof. Sebastiano Strangio**, Department of Information Engineering, University of Pisa, Pisa, Italy  
* **Dr. Alessandro Catania**, Department of Information Engineering, University of Pisa, Pisa, Italy  
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



