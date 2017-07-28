---
layout: page
title: Publications
permalink: /publications/
---
 
## Journal Articles
|[**Google Scholar Citations**](https://goo.gl/AgbNaK)
|[**Researchgate**](https://www.researchgate.net/profile/Tao_Cheng13)
|[**ORCID: 0000-0003-4830-177X**](http://orcid.org/0000-0003-4830-177X)
|[**Researchgate**](https://www.researchgate.net/profile/Tao_Cheng13)
|[**ACS 2016**](https://goo.gl/mqexYI)
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
    </li>
{% endfor %}
</ol>
</div>


