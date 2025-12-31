---
layout: page
title: "Photo Gallery"
title_jp: "写真画廊"
subtitle: "Moments from my journeys through life, music, and the sea"
---

<div class="photo-gallery">
  {% assign gallery_count = 0 %}
  {% for file in site.static_files %}
    {% if file.path contains 'photo_gallery' %}
      {% assign ext = file.extname | downcase %}
      {% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.gif' or ext == '.webp' %}
        <div class="gallery-item reveal reveal-delay-{{ gallery_count | modulo: 6 | plus: 1 }}">
          <img src="{{ file.path }}" alt="{{ file.name }}" loading="lazy">
        </div>
        {% assign gallery_count = gallery_count | plus: 1 %}
      {% endif %}
    {% endif %}
  {% endfor %}
  
  {% if gallery_count == 0 %}
    <div class="gallery-empty">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width: 100px; height: 100px; margin: 0 auto 1.5rem; display: block; opacity: 0.3;">
        <rect x="40" y="60" width="120" height="100" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="75" cy="95" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
        <polyline points="40,140 70,110 100,130 130,100 160,120 160,160 40,160" fill="none" stroke="currentColor" stroke-width="2"/>
      </svg>
      <p style="font-size: 1.0625rem; margin-bottom: 0.5rem;">No photos yet.</p>
      <p style="font-size: 0.9rem; color: var(--text-muted);">Add images to the <code>photo_gallery</code> folder to populate this gallery.</p>
      <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 1rem; font-style: italic;">写真はまだありません</p>
    </div>
  {% endif %}
</div>
