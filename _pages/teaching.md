---
title: "Teaching"
layout: gridlay
sitemap: false
permalink: /teaching/
---

## Table of Contents
- [Teaching](#teaching)
- [Supervision](#supervision)

<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Teaching </h2>
<a id="teaching"></a>

{% if site.data.teaching.lecturer %}
{% for item in site.data.teaching.lecturer %}
* <strong>{{ item.role }}, <a href="{{ item.institution_url }}" target="_blank">{{ item.institution }}</a> ({{ item.institution_abbr }}), {{ item.location }}</strong>
    * {{ item.course }}
        * {{ item.level }} course: {{ item.degree }}
        * Academic years: {{ item.years }}
        {% if item.hours %}* Hours: {{ item.hours }}{% endif %}
{% endfor %}
{% endif %}

{% if site.data.teaching.phd_seminars %}
* <strong>PhD Courses/Seminars</strong>
{% for item in site.data.teaching.phd_seminars %}
    * {{ item.title }}, <a href="{{ item.institution_url }}" target="_blank">{{ item.institution }}</a>, {{ item.location }}
        * Hours: {{ item.hours }}
{% endfor %}
{% endif %}

<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Supervision </h2>
<a id="supervision"></a>

{% if site.data.teaching.supervision %}
{% for item in site.data.teaching.supervision %}
* <strong>{{ item.type }}</strong>
    {% if item.main_tutor %}* As Main Tutor/Supervisor: {{ item.main_tutor }}{% endif %}
    {% if item.co_tutor %}* As Co-Tutor/Co-Supervisor: {{ item.co_tutor }}{% endif %}
{% endfor %}
{% endif %}



<!-- ## Table of Contents
- [Teaching](#teaching)
- [Supervision](#supervision)

<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Teaching </h2>
<a id="teaching"></a>

* <strong>Lecturer, <a href="https://www.unical.it/" target="_blank">University of Calabria</a> (UNICAL), Rende, Italy</strong>
    * Sensors Laboratory
        * Graduate course: Electronics Graduate Degree
        * Academic years: 2025/2026
        * Hours: 16

* <strong>Lecturer, <a href="https://www.unical.it/" target="_blank">University of Calabria</a> (UNICAL), Rende, Italy</strong>
    * Analog Systems Design 
        * Graduate course: Electronics Graduate Degree
        * Academic years: 2024/2025
        * Hours: 10

* <strong>Lecturer, <a href="https://www.unical.it/" target="_blank">University of Calabria</a> (UNICAL), Rende, Italy</strong>
    * Analog Systems Design Laboratory
        * Graduate course: Electronics Graduate Degree
        * Academic years: 2021/2022 - Present
        * Hours: 16

* <strong>Lecturer (invited), <a href="https://www.usfq.edu.ec/en" target="_blank">University San Francisco de Quito</a> (USFQ), Quito, Ecuador</strong>
    * Digital CMOS Technology
        * Graduate course: Nanoelectronics Graduate Degree
        * Academic years: 2021/2022, 2022/2023

* <strong>PhD Courses/Seminars</strong>
    * Spintronic Technology For Energy-Efficient hybrid CMOS/MTJ Memory Applications, <a href="https://dimes.unical.it/" target="_blank">DIMES, University of Calabria</a>, Rende, Italy
        * Hours: 6
    * Hybrid CMOS/MTJ Circuit Design, <a href="https://orientami.poliba.it/" target="_blank">Politecnico di Bari</a>, Bari, Italy
        * Hours: 10

<h2 style="background-color: #f2f2f2; padding: 0.2em;"> Supervision </h2>
<a id="supervision"></a>

* <strong>M.Sc. Students</strong>
    * As Main Tutor/Supervisor: 2
    * As Co-Tutor/Co-Supervisor: 5

* <strong>Ph.D Students</strong>
    * As Co-Tutor/Co-Supervisor: 2 -->
