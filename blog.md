---
layout: page
title: "Blog"
---

<div class="ukiyo-section">
  <div class="section-header">
    <h2 class="section-title-jp">文章</h2>
    <h2 class="section-title-en">Blog</h2>
  </div>
  
  <div style="margin-bottom: 3em; text-align: center; max-width: 700px; margin-left: auto; margin-right: auto;">
    <p style="color: var(--text-secondary); font-size: 1.05em; line-height: 1.8;">
      Welcome to my blog where I share thoughts on music, data science, diving, and life.
      <span style="display: block; margin-top: 0.5em; font-family: 'Hiragino Mincho ProN', 'Yu Mincho', serif; color: var(--text-tertiary); font-size: 0.95em;">
        音楽、データサイエンス、ダイビング、そして人生についての考えを共有します。
      </span>
    </p>
  </div>

  <div class="blog-posts">
    {% if site.show_excerpts %}
      {% include home.html %}
    {% else %}
      {% include archive.html title="Posts" %}
    {% endif %}
  </div>
</div>
