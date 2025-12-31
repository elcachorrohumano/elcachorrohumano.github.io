---
layout: page
title: "Photo Gallery"
---

<div class="ukiyo-section">
  <div class="section-header">
    <p class="section-title-jp">写真画廊</p>
    <h2 class="section-title-en">Photo Gallery</h2>
  </div>
  
  <p class="intro-text text-center" style="max-width: 700px; margin: 0 auto 2rem;">
    A collection of moments from my journeys through life, music, and the sea.
  </p>

  <div class="photo-gallery">
    {% assign gallery_count = 0 %}
    {% for file in site.static_files %}
      {% if file.path contains 'photo_gallery' %}
        {% assign ext = file.extname | downcase %}
        {% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.gif' or ext == '.webp' %}
          <div class="gallery-item">
            <img src="{{ file.path }}" alt="{{ file.name }}" loading="lazy">
          </div>
          {% assign gallery_count = gallery_count | plus: 1 %}
        {% endif %}
      {% endif %}
    {% endfor %}
    
    {% if gallery_count == 0 %}
      <div class="gallery-empty">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width: 120px; height: 120px; margin: 0 auto 1.5rem; display: block; opacity: 0.4;">
          <rect x="40" y="60" width="120" height="100" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="75" cy="95" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
          <polyline points="40,140 70,110 100,130 130,100 160,120 160,160 40,160" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
        <p style="font-size: 1.1rem;">No photos yet. Add images to the <code>photo_gallery</code> folder to populate this gallery.</p>
        <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 0.5rem;">写真はまだありません</p>
      </div>
    {% endif %}
  </div>
</div>
