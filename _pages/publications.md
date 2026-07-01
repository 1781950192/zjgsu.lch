---
title: "教师与成果"
layout: gridlay
sitemap: false
permalink: /publications/
---

## 教师简介

### 李传煌

<div class="section-card">
<div class="pi-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ site.photo }}" class="pi-photo" alt="{{ site.name }}" loading="lazy">
<div>
<h3 class="pi-name">{{ site.name }}</h3>
<p style="font-style: italic; color: var(--text-secondary);">{{ site.title }}, {{ site.institution }}</p>
<div class="pi-links">
{% if site.email %}<a href="mailto:{{ site.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if site.links.google_scholar and site.links.google_scholar != "" %}<a href="{{ site.links.google_scholar }}" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
{% if site.links.cv and site.links.cv != "" %}<a href="{{ site.url }}{{ site.baseurl }}/{{ site.links.cv }}" class="icon-link" title="CV"><i class="ai ai-cv"></i></a>{% endif %}
{% if site.links.github and site.links.github != "" %}<a href="{{ site.links.github }}" class="icon-link" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
</div>
{% if site.data.pi[0].bio %}
<p style="margin-top: var(--space-4);">{{ site.data.pi[0].bio }}</p>
{% endif %}
{% if site.data.pi[0].education %}
<ul style="margin-top: var(--space-4);">
{% for education in site.data.pi[0].education %}
<li>{{ education | replace: "-","&#8211;" }}</li>
{% endfor %}
</ul>
{% endif %}
</div>
</div>
</div>

{% if site.data.grants %}
<div class="section-card">
<h3>科研项目</h3>
<ul>
{% for grant in site.data.grants %}
<li>{{ grant.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if site.data.awards %}
<div class="section-card">
<h3>获奖情况</h3>
<ul>
{% for award in site.data.awards %}
<li>{{ award.name | replace: "-","&#8211;" }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

### 陈超

<div class="section-card">
<div class="pi-card">
{% assign chenchao = site.data.team_members | where: "name", "陈超" | first %}
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ chenchao.photo }}" class="pi-photo" alt="陈超" loading="lazy">
<div>
<h3 class="pi-name">陈超</h3>
<p style="font-style: italic; color: var(--text-secondary);">{{ chenchao.info }}</p>
<div class="pi-links">
{% if chenchao.email %}<a href="mailto:{{ chenchao.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if chenchao.scholar and chenchao.scholar != "" %}<a href="{{ chenchao.scholar }}" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
{% if chenchao.website and chenchao.website != "" %}<a href="{{ chenchao.website }}" class="icon-link" title="Website"><i class="fa-solid fa-house"></i></a>{% endif %}
</div>
</div>
</div>
</div>

### 马博

<div class="section-card">
<div class="pi-card">
{% assign mabo = site.data.team_members | where: "name", "马博" | first %}
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ mabo.photo }}" class="pi-photo" alt="马博" loading="lazy">
<div>
<h3 class="pi-name">马博</h3>
<p style="font-style: italic; color: var(--text-secondary);">{{ mabo.info }}</p>
<div class="pi-links">
{% if mabo.email %}<a href="mailto:{{ mabo.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if mabo.scholar and mabo.scholar != "" %}<a href="{{ mabo.scholar }}" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
{% if mabo.website and mabo.website != "" %}<a href="{{ mabo.website }}" class="icon-link" title="Website"><i class="fa-solid fa-house"></i></a>{% endif %}
</div>
</div>
</div>
</div>

## 发表论文

<input type="text" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year...">

<div class="section-card" id="pubList">
<h3>Preprints</h3>

{% bibliography --query @unpublished %}

<h3>Refereed Journal Articles</h3>

{% bibliography --query @article %}

<h3>Refereed Conference Proceedings</h3>

{% bibliography --query @inproceedings %}
</div>
