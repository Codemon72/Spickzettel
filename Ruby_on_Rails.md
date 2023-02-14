### Code Snippets 
```s
<pre><%= action_name %></pre>

<pre><%= action_name.eql? 'foo' %></pre>

<div class="<%= 'active' if action_name.eql? 'foo' %>"></div>

<div class="<%= 'active' if action_name.eql?('foo') || action_name.eql?('bar') %>"></div>


<% if loc[:name] == current_user.whereami %>
  <%= image_tag("Location.svg", class: "w-8 h-8") %>
<% else %>
  <%= hidden_field_tag 'id', loc[:id] %>
<% end %>


<% if offer.commodity.abundance == 1 %>
  <span>blib: 1</span>
<% elsif offer.commodity.abundance == 2 %>
  <span>blab: 2</span>
<% elsif offer.commodity.abundance == 3%>
  <span>blub: 3</span>
<% end %>
```
