# Hello world

## Recent Blogs

<ul>
{% for blog in contentfulBlogs %}
<li><a href="{{blog.slug | url}}">{{blog.title}}</a></li>
{% endfor %}
</ul>

## Pages

<ul>
{% for page in contentfulPages %}
<li><a href="{{page.slug | url}}">{{page.title}}</a></li>
{% endfor %}
</ul>
