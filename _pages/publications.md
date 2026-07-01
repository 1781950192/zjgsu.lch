---
title: "发表论文"
layout: gridlay
sitemap: false
permalink: /publications/
---

## 发表论文

<input type="text" class="pub-search" id="pubSearch" placeholder="按标题、作者或年份筛选...">

<div class="section-card" id="pubList">
<h3>Preprints</h3>

{% bibliography --query @unpublished %}

<h3>Journal Articles</h3>

{% bibliography --query @article %}

<h3>Conference Proceedings</h3>

{% bibliography --query @inproceedings %}
</div>
