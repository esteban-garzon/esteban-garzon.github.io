---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

<style>
code {padding: 6px 8px; font-size: 90%;}
</style>

# Welcome!

I am an Assistant Professor (RTD-A; non-tenured track) at the <a href="https://www.unical.it/" target="_blank">Universitiy of Calabria</a>. My research interests include domain-specific hardware accelerators, electronics/spintronics, and standard and emerging technologies for logic & memory, and low-power applications. 

I received my Ph.D. degree (Hons.) in Electronics Engineering from <a href="https://www.unical.it/" target="_blank">Universitiy of Calabria</a>, in 2022, under the supervision of <a href="https://people.dimes.unical.it/marcolanuzza/" target="_blank">Prof. Marco Lanuzza</a> and <a href="https://www.eng.biu.ac.il/temanad/" target="_blank">Prof. Adam Teman</a>. In July 2024, I received the National Scientific Habilitation (ASN) for Associate Professor of Electronics (Sector 09/E3) in Italian Universities. In 2025, I

In 2019-2020 I was a visiting Ph.D. student at <a href="https://enicslabs.com/" target="_blank">Emerging Nanoscaled Circuits and Systems (EnICS)</a> laboratories, Bar-Ilan University, Israel. In Jul-Sep 2022 and Jul-Aug 2023, I was a visiting researcher at EnICS labs. In Jan-Feb 2024, I was a visiting researcher at the Department of Information Engineering, University of Pisa, Italy. 

I am IEEE Senior Member. I have authored/coauthored more than 55 scientific papers in international peer-reviewed journals and conferences, and have participated in several IC tapeouts. I have received several awards, research grants, and funding (as Principal Investigator). I have been part of several IEEE conference committees, and journal boards. Moreover, I have been an active reviewer of several journals (IEEE, Elsevier, Frontiers, Wiley) and conferences.


<!--
### Research

My recent research activity at UNICAL .... 
-->


<!--
<br/>
<div class="well-md">
<h4>Sponsors</h4>
<div style='display:block; text-align:center; margin-left:auto; margin-right:auto;'>
 {% for funder in site.data.funders %}{% if funder.url %}<a href="{{funder.url}}" target="_blank"><img src='/images/logopic/{{ funder.image }}' style='max-height: 70px; max-width: 170px;'/></a>{% else %}<img src='/images/logopic/{{ funder.image }}' class='mycenter' style='max-height: 70px; max-width: 170px;'/>{% endif %}   {% endfor %}
</div>
</div>
-->


<div class="well-md">
  <h4>Sponsors</h4>
  <div style="display:block; text-align:center; margin:0 auto;">
    {% for funder in site.data.funders %}
      <a href="{{ funder.url }}" target="_blank">
        <img
          src="/images/logopic/{{ funder.image }}"
          style="background-color: #ffffff; max-height: 70px; max-width: 170px;"
          alt="{{ funder.name }} logo"
        />
      </a>
    {% endfor %}
  </div>
</div>



