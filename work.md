---
layout: page
title: "Work"
permalink: /work/
---

<nav>
  <a href="#portfolio">Portfolio</a> · <a href="#career">Career</a>
  · <a href="/assets/MyCV_JorgeEstebanRamirezSashida.pdf">Download CV</a>
  · <a href="/blog/">Blog</a>
  · <a href="/about/">About</a>
  
</nav>

## Portfolio {#portfolio}

<div class="cards">
{% assign projects = site.data.projects | sort: "date" | reverse %}
{% for p in projects %}
  <article class="card">
    <header>
      <h3><a href="{{ p.repo }}" target="_blank" rel="noopener">{{ p.title }}</a></h3>
      <small>{{ p.period }}</small>
    </header>
    <div>
      <p>{{ p.description }}</p>
      {% if p.tags %}<p><small>{{ p.tags | join: " · " }}</small></p>{% endif %}
    </div>
  </article>
{% endfor %}
</div>

## Career {#career}

<div class="timeline">
{% assign jobs = site.data.experience | sort: "start" | reverse %}
{% for job in jobs %}
  <section class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <header>
        <h3>{{ job.company }}</h3>
        <small>{{ job.role }} — {{ job.location }}</small><br>
        <small>{{ job.period }}</small>
      </header>
      {% if job.logo %}<img src="{{ job.logo | relative_url }}" alt="{{ job.company }} logo" class="company-logo">{% endif %}
      {% if job.summary %}<p>{{ job.summary }}</p>{% endif %}
      {% if job.highlights %}
        <ul>
        {% for h in job.highlights %}
          <li>{{ h }}</li>
        {% endfor %}
        </ul>
      {% endif %}
    </div>
  </section>
{% endfor %}
</div>


