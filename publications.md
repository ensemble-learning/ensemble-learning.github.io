---
layout: page
title: Publications
permalink: /publications/
---
 
## Journal Articles
|[**Google Scholar**](https://goo.gl/AgbNaK)
|[**ResearchGate**](https://www.researchgate.net/profile/Tao_Cheng13)
|[**YouTube**](https://www.youtube.com/channel/UCrIGh8ExIuTYXbV99Do0F-A)
|[**Linkedin**](https://www.linkedin.com/in/tao-cheng-5191331a)
|[**ORCID**](http://orcid.org/0000-0003-4830-177X)
|  
|[**ACS**](https://acs.manuscriptcentral.com/acs)
|[**RCS**](https://mc.manuscriptcentral.com/rsc)
|[**PNAS**](https://cts.sciencemag.org/scc/login.html;jsessionid=46E64D41CACA096CC503DD3274EE02DF)
|  

<div class='panel-pub'>
<ol reversed>
{% for article in site.data.journal %}
    <li>
    <div class="title">
    <span class="title">{{ article.title }}</span>
    {% if article.fulltext %}
        <a title="fulltext" href="{{ site.url }}/downloads/journal/{{ thesis.fulltext }}"><i class="fa fa-file-pdf-o"></i></a>
    {% endif %}
    </div>
    <div class='author'>
    {% for author in article.author %}
        <span class='{{ author.role }}'>{{ author.family }} {{ author.given_initial }}{% if author.role contains 'corr' %}*{% endif %}; </span>
    {% endfor %}
    </div>
    <div class="pubinfo">
    <span class="source">{{ article.journal.abbreviation }} </span><span class="year">{{ article.year }}, </span><span class="volume">{{ article.volume }}, </span><span class="page">{{ article.page }}.</span>{% if article.language != 'english' %}<span class="language"> (In {{ article.language }})</span>{% endif %}
    </div>
    <div class="url">
        <a href="{{ article.URL }}">{{ article.URL }}</a>
    </div>
    <div class="note">
        <span class="note">{{ article.note }}</span>
    </div>
    <div class="media1">
        <span class="media1">{{ article.media1}}</span>
    </div>
    <div class="media1_url">
        <a href="{{ article.media1_url}}">{{ article.media1_url}}</a>
    </div>
    </li>
{% endfor %}
</ol>
</div>


