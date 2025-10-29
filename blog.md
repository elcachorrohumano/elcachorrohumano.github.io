---
layout: page
title: "Blog"
---

<div style="margin-bottom: 2em; text-align: center;">
  <p style="color: #8a8d93; font-size: 1.1em;">Welcome to my blog where I share thoughts on music, data science, diving, and life.</p>
</div>

{% if site.show_excerpts %}
  {% include home.html %}
{% else %}
  {% include archive.html title="Posts" %}
{% endif %}
