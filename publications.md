---
layout: page
title: publications
permalink: /publications/
---

# [ORCID: 0000-0003-4830-177X](http://orcid.org/0000-0003-4830-177X)

# [Google Scholar Citations](https://scholar.google.com/citations?view_op=list_works&hl=en&user=P6adsOMAAAAJ)

# [ACS 2016](http://connect.acspubs.org/2016Recap?elqTrackId=0196e8d97f6b49e0995f9f64a42165cd&elq=f031033ea41b4c2493dcd722728fa99a&elqaid=4311&elqat=1&elqCampaignId=1385)

# Journal Articles

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


