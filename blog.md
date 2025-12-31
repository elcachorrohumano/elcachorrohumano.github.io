---
layout: page
title: "Blog"
---

<div class="ukiyo-section">
  <div class="section-header">
    <p class="section-title-jp">文章</p>
    <h2 class="section-title-en">Blog</h2>
  </div>
  
  <p class="intro-text text-center" style="max-width: 700px; margin: 0 auto 2rem;">
    Welcome to my blog where I share thoughts on music, data science, diving, and life.
    <span style="display: block; margin-top: 0.5rem; color: var(--text-tertiary); font-size: 0.9rem;">
      音楽、データサイエンス、ダイビング、そして人生についての考えを共有します。
    </span>
  </p>

  <div class="blog-posts">
    {% if site.show_excerpts %}
      {% include home.html %}
    {% else %}
      {% include archive.html title="Posts" %}
    {% endif %}
  </div>
</div>
