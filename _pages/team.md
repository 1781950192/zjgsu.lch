---
title: "团队成员"
layout: gridlay
sitemap: false
permalink: /team/
---

## 课题组负责人

{% include team-pi.html %}

## 课题组科研骨干

{% include team-chenchao.html %}

{% include team-mabo.html %}

{% include team-tuhuaqing.html %}

{% if site.data.team_members.size > 0 %}
## 课题组学生

{::nomarkdown}
<div class="grid-container">
  {% for member in site.data.team_members %}
  {% unless member.name == "陈超" or member.name == "马博" or member.name == "凃化清" %}
  <div class="team-card">
    <img src="{{ site.baseurl }}/images/{{ member.photo }}" class="team-photo" alt="{{ member.name }}" loading="lazy">
    <h4 class="team-name">{{ member.name }}</h4>
    <p class="team-info">{{ member.info }}</p>
    <div class="team-links">
      {% if member.email %}<a href="mailto:{{ member.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
      {% if member.website %}<a href="{{ member.website }}" class="icon-link" title="Website"><i class="fa-solid fa-house"></i></a>{% endif %}
      {% if member.scholar %}<a href="{{ member.scholar }}" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
      {% if member.github %}<a href="{{ member.github }}" class="icon-link" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
    </div>
  </div>
  {% endunless %}
  {% endfor %}
</div>
{:/nomarkdown}
{% endif %}

{% if site.data.alumni.size > 0 %}
## 课题组已毕业学生

{::nomarkdown}
<div class="section-card">
  <table class="alumni-table">
    <thead>
      <tr><th>姓名</th><th>在读时间</th><th>当前职位</th></tr>
    </thead>
    <tbody>
      {% for member in site.data.alumni %}
      <tr>
        <td>{{ member.name }}</td>
        <td>{{ member.duration }}</td>
        <td>{{ member.info }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
{:/nomarkdown}
{% endif %}

## 欢迎加入

**李传煌课题组欢迎优秀的本科生、硕士生、博士生加入！**

联系方式：{{ site.email }}
