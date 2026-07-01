---
title: "团队成员"
layout: team
sitemap: false
permalink: /team/
---

## 课题组负责人

<div class="section-card">
<div class="member-profile">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ site.photo }}" alt="{{ site.name }}" class="member-photo" loading="lazy">
<div class="member-info">
### {{ site.data.pi[0].name }}

**职称**：教授，博士生导师

**职务**：浙江工商大学科学技术部部长、浙江工商大学网络与通信工程研究所所长

**研究方向**：智慧网络、开放架构网络、软件定义网络、算力网络、网络虚拟化、网络安全、边缘计算、可信人工智能、大数据处理及应用

**电子邮件**：{{ site.email }}

**办公室地址**：{{ site.data.pi[0].address }}

{{ site.data.pi[0].bio }}

**学术获奖**：
- 浙江省科技进步二等奖（2022，1/9）
- 教育部高校科研优秀成果奖（科学技术）科技进步二等奖（2018, 3/12）
- 浙江省科技发明一等奖（2015, 4/9）
- 全国商业科技进步三等奖（2011, 4/9）

**科研项目**：
- 浙江省自然科学基金重点项目"模型化新型软件定义边缘算力网络业务智慧承载关键技术研究"（2023-2025），主持
- 国家自然科学基金项目"异构软件定义网络情景式智能服务部署关键技术研究"(2019-2022)，主持
- 国家自然科学基金项目"SDN系统随机网络演算模型及性能优化研究"(2015-2017)，主持

**发表论文**：在IEEE/ACM Transactions on Networking、IEEE Transactions on Vehicular Technology、Computer Networks、《通信学报》、《软件学报》等发表论文50余篇。

**专利**：申请发明专利50项，已授权37项。

**国际标准**：参与制定IETF互联网国际标准RFC6956、RFC5813、RFC6984、RFC6053等。

</div>
</div>
</div>

## 课题组科研骨干

<div class="section-card">
{% assign chenchao = site.data.team_members | where: "name", "陈超" | first %}
<div class="member-profile">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ chenchao.photo | default: 'team/default.jpg' }}" alt="陈超" class="member-photo" loading="lazy">
<div class="member-info">
### 陈超

**职称**：特聘研究员，副教授，硕士生导师

**职务**：浙江工商大学信息与电子工程学院、萨塞克斯人工智能学院副院长、党委委员

**研究方向**：下一代无线通信、联邦学习、空天地一体化网络、网络编码、机器/深度学习

**电子邮件**：{{ chenchao.email | default: "chenchao@zjgsu.edu.cn" }}

**个人简介**：浙江德清人，Korea University海归博士，入选浙江省高校领军人才培养计划。2015年10月至今在浙江工商大学信息与电子工程学院工作。

**学术获奖**：
- 浙江省科学技术进步奖二等奖（2021）
- 2021-2022年浙江工商大学"三育人"先进个人

**代表性论文**：
- Chao Chen, Seung Jun Baek, Rui Yin, Shengtian Yang, Xiaohan Yu, Chuanhuang Li, Practical and Efficient Coded Transmission for Full-Duplex Relay Networks Without CSI, **IEEE/ACM Transactions on Networking**, 2024.
- Chao Chen, Bohang Jiang, Shengli Liu, Chuanhuang Li, Celimuge Wu, Rui Yin, Efficient Federated Learning in Resource-Constrained Edge Intelligence Networks using Model Compression, **IEEE Transactions on Vehicular Technology**, 2024.
- Chao Chen, Seungjun Baek, Multicast Scheduling for Relay-Based Heterogeneous Networks Using Rateless Codes, **IEEE Transactions on Mobile Computing**, 2017.

**科研项目**：
- 浙江省自然科学基金重点项目"定向毫米波传输网络多播优化调度关键技术研究"（2025-2027），主持
- 国家自然科学基金国际（地区）合作与交流项目"面向全双工通信系统的高吞吐量编码广播/多播技术研究"（2022-2023），主持
- 国家自然科学基金"基于流体模型的无线中继网络多播编码与优化调度"（2019-2021），主持

</div>
</div>
</div>

<div class="section-card">
{% assign mabo = site.data.team_members | where: "name", "马博" | first %}
<div class="member-profile">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ mabo.photo | default: 'team/default.jpg' }}" alt="马博" class="member-photo" loading="lazy">
<div class="member-info">
### 马博

**职称**：副教授，硕士生导师

**教育背景**：博士，英国谢菲尔德大学（2017-2021）；硕士，英国纽卡斯尔大学（2015-2016）；本科，东南大学（2010-2014）

**研究方向**：异构网（HetNet）优化、无人机（UAV）网络优化、算力网络

**电子邮件**：{{ mabo.email | default: "mabo@zjgsu.edu.cn" }}

**个人简介**：1991年9月生，2021年8月加入浙江工商大学信息与电子工程学院，2024年12月升任副教授。博士期间连续三年获得谢菲尔德大学电子电气学院学院奖学金。2025年度浙江工商大学优秀教师。

**学术兼职**：
- IEEE International Conference on Communications (ICC) 无人机5G通信研讨会技术程序委员会委员（2022-2026）
- IEEE Journal on Selected Areas in Communications (JSAC)、IEEE Transactions on Vehicular Technology (TVT)、IEEE Internet of Things Journal (IoT-J) 审稿人

**代表性论文**：
- Bo Ma, Yexin Pan, Yong Xu, Ziyi Gao, Zitian Zhang, Chao Chen, Chuanhuang Li*. UAV-Assisted Computing Power Network Task Allocation and 3D Urban Trajectory Optimization. **IEEE Internet of Things Journal**, 2025.
- Bo Ma, Xiaosen Hu, Yexin Pan, Qin Lu, Chuanhuang Li*. Optimizing Profit and Delay in Computing Power Network via Deep Deterministic Policy Gradient: A Task Decomposition and Computing Path Optimization Approach. **IEEE Transactions on Services Computing**, 2025.
- Bo Ma, H. Kuang, S. Liu, C. Li. UAV Assisted Cellular Network Traffic Offloading: Joint Swarm, 3D Deployment, and User Allocation Optimization Based on a Data-Aware Method. **Computer Networks**, 2023.

**科研项目**：
- 国家自然科学基金青年项目"低时延高可靠无人机边缘算力网络"（2025-2027），主持
- 浙江省自然科学基金青年项目"基于深度确定性策略梯度算法的5G多无人机蜂窝异构网路径规划关键技术研究"（2022），主持
- 浙江工商大学省属高校基本科研业务费项目（青锐项目）"智联计算网络无人机业务承载方法研究"（2023），主持

</div>
</div>
</div>

{% if site.data.team_members.size > 0 %}
## 课题组学生

<div class="grid-container">
{% for member in site.data.team_members %}
{% unless member.name == "陈超" or member.name == "马博" %}
<div class="team-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ member.photo }}" class="team-photo" alt="{{ member.name }}" loading="lazy">
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
{% endif %}

{% if site.data.alumni.size > 0 %}
## 课题组已毕业学生

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
{% endif %}

## 欢迎加入

**李传煌课题组欢迎优秀的本科生、硕士生、博士生加入！**

联系方式：{{ site.email }}
