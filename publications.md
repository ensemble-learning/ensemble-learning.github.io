---
layout: page
title: Publications
permalink: /publications/
---

## Journal Articles
|[**Google Scholar**](https://goo.gl/AgbNaK)
|[**ResearchGate**](https://www.researchgate.net/profile/Tao_Cheng13)
|[**ORCID**](http://orcid.org/0000-0003-4830-177X)
|[**ResearcherID**](http://www.researcherid.com/rid/B-3491-2016)
|[**YouTube**](https://www.youtube.com/channel/UCrIGh8ExIuTYXbV99Do0F-A)
|[**Twitter**](https://twitter.com/Tao94037228)
|[**Linkedin**](https://www.linkedin.com/in/tao-cheng-5191331a)
|[**facebook**](https://www.facebook.com/tao.cheng.395)
|[**Tumblr**](https://www.tumblr.com/blog/tchengsblog)
|[**Instagram**](https://www.instagram.com/t.cheng.t.cheng/)
|  
|[**ACS**](https://acs.manuscriptcentral.com/acs)
|[**RSC**](https://mc.manuscriptcentral.com/rsc)
|[**PNAS**](https://www.pnascentral.org/cgi-bin/main.plex)
|[**Wiley**](http://www.editorialmanager.com/anie/default.aspx)
|[**Science**](https://cts.sciencemag.org/scc/login.html;jsessionid=46E64D41CACA096CC503DD3274EE02DF)
|[**Nature**](http://mts-nature.nature.com/cgi-bin/main.plex)
|[**Nature Communications**](http://mts-ncomms.nature.com/cgi-bin/main.plex)
|  

### **Research Scientist at Caltech from 2015 to 2018**
<div class='panel-pub'>
<ol start='49' reversed>
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
    {% if article.image_url%}
        <div class="image_url">
            <img src="{{ article.image_url}}" height="180" align="middle">
        </div>
    {% endif %}
    </li>
{% endfor %}
</ol>
</div>

### **Postdoc at Caltech from 2012 to 2015**
<div class='panel-pub'>
<ol start='16' reversed>
{% for article in site.data.journal-postdoc %}
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
    {% if article.image_url%}
        <div class="image_url">
            <img src="{{ article.image_url}}" height="180" align="middle">
        </div>
    {% endif %}
    </li>
{% endfor %}
</ol>
</div>


### **Ph. D. at Shanghai Jiao Tong University (from 2007 to 2012)**
<div class='panel-pub'>
<ol reversed>
{% for article in site.data.journal-sjtu %}
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
    {% if article.image_url%}
        <div class="image_url">
            <img src="{{ article.image_url}}" height="180" align="middle">
        </div>
    {% endif %}
    </li>
{% endfor %}
</ol>
</div>
