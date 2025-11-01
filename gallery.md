---
layout: page
title: "Photo Gallery"
---

<div class="ukiyo-section">
  <div class="section-header">
    <h2 class="section-title-jp">写真画廊</h2>
    <h2 class="section-title-en">Photo Gallery</h2>
  </div>
  
  <div class="gallery-intro">
    <p style="text-align: center; color: var(--text-secondary); margin-bottom: 2em;">
      A collection of moments from my journeys through life, music, and the ocean.
    </p>
  </div>

  <div class="photo-gallery">
    {% assign gallery_files = site.static_files | where_exp: "file", "file.path contains 'photo_gallery'" %}
    {% assign image_files = gallery_files | where_exp: "file", "file.extname == '.jpg' or file.extname == '.jpeg' or file.extname == '.png' or file.extname == '.gif' or file.extname == '.webp' or file.extname == '.JPG' or file.extname == '.JPEG' or file.extname == '.PNG'" %}
    
    {% if image_files.size > 0 %}
      {% for image in image_files %}
        <div class="gallery-item">
          <img src="{{ image.path }}" alt="{{ image.name }}" loading="lazy">
        </div>
      {% endfor %}
    {% else %}
      <div class="gallery-empty">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width: 150px; height: 150px; margin: 0 auto; opacity: 0.3;">
          <rect x="40" y="60" width="120" height="100" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="75" cy="95" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
          <polyline points="40,140 70,110 100,130 130,100 160,120 160,160 40,160" fill="none" stroke="currentColor" stroke-width="2"/>
          <text x="100" y="185" font-family="serif" font-size="12" fill="currentColor" text-anchor="middle">画</text>
        </svg>
        <p style="margin-top: 1.5em; font-size: 1.1em;">No photos yet. Add images to the <code>photo_gallery</code> folder to populate this gallery.</p>
        <p style="margin-top: 0.5em; font-size: 0.95em; opacity: 0.8;">写真はまだありません</p>
      </div>
    {% endif %}
  </div>
</div>

<style>
.gallery-intro {
  max-width: 700px;
  margin: 0 auto 3em;
}

code {
  background: var(--bg-accent);
  padding: 0.2em 0.5em;
  border-radius: 3px;
  font-family: monospace;
  color: var(--accent-primary);
}
</style>

