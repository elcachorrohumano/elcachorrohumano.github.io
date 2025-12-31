---
layout: page
title: "Blog"
title_jp: "文章"
subtitle: "Thoughts on music, data science, diving, and life"
---

<p class="intro-text text-center reveal" style="max-width: 700px; margin: 0 auto 2.5rem;">
  Welcome to my blog where I share thoughts on music, data science, diving, and life.
  <span style="display: block; margin-top: 0.75rem; color: var(--text-tertiary); font-size: 0.9rem; font-style: italic;">
    音楽、データサイエンス、ダイビング、そして人生についての考えを共有します。
  </span>
</p>

<div class="blog-posts reveal">
  {% if site.show_excerpts %}
    {% include home.html %}
  {% else %}
    {% include archive.html title="Posts" %}
  {% endif %}
</div>
