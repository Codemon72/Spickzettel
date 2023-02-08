### Code Snippets 
```s
<pre><%= action_name %></pre>

<pre><%= action_name.eql? 'foo' %></pre>

<div class="<%= 'active' if action_name.eql? 'foo' %>"></div>

<div class="<%= 'active' if action_name.eql?('foo') || action_name.eql?('bar') %>"></div>
```
