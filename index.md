# Hello world

<ul>
{% for blog in contentful %}
<li><a href="{{blog.slug | url}}">{{blog.title}}</a></li>
{% endfor %}
</ul>
