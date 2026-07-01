---
title: "发表论文"
layout: gridlay
sitemap: false
permalink: /publications/
---

## 发表论文

<input type="text" class="pub-search" id="pubSearch" placeholder="按标题、作者或年份筛选...">

<div class="section-card" id="pubList">
<h3>预印本</h3>

{% bibliography --query @unpublished %}

<h3>期刊论文</h3>

{% bibliography --query @article %}

<h3>会议论文</h3>

{% bibliography --query @inproceedings %}
</div>
