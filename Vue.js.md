Docs: https://vuejs.org/guide/introduction.html


### Vue-specific properties and methods `$`

In Vue.js, the `$` prefix is used to denote a special property or method provided by Vue itself. It's a convention used to differentiate Vue-specific properties and methods from user-defined properties and methods. By doing this, Vue ensures that its built-in methods and properties won't conflict with any of your defined properties.

- `$emit`: allows to trigger custom events. These events can then be caught and handled by parent components.
- `$refs`: Used to access a reference to a DOM element or child component.
- `$slots`: Provides access to content slots.
- `$scopedSlots`: Used for accessing scoped slots.
- `$set`: A method to add a reactive property on an object, especially useful since Vue cannot detect property addition or deletion.
- `$watch`: Allows for the manual watching of a property.
- `$nextTick`: Used to defer the execution of a function until the next DOM update cycle.

The `$` prefix helps developers quickly recognize that they are working with Vue's internal features rather than custom-defined ones.



**2. Template Syntax**

- Interpolation: `{{ message }}`
- Directives: `v-bind:title="message"`, `v-model="message"`, `v-for="item in items"`, `v-on:click="sayHello"`
- Shortcuts: `@click` for `v-on:click`, `:href` for `v-bind:href`

**3. Components**

```js
Vue.component('my-component', {
  template: '<p>{{ message }}</p>',
  data: function() {
    return {
      message: 'Hello from component!'
    };
  }
});
```

**4. Computed Properties**

```js
new Vue({
  el: '#app',
  data: {
    a: 1,
    b: 2
  },
  computed: {
    sum: function() {
      return this.a + this.b;
    }
  }
});
```

**5. Watchers**

```js
new Vue({
  el: '#app',
  data: {
    query: ''
  },
  watch: {
    query: function(newQuery, oldQuery) {
      console.log('Query changed!');
    }
  }
});
```

**6. Lifecycle Hooks**

- `created()`: Called after the instance is created.
- `mounted()`: Called after the DOM is mounted.
- `updated()`: Called after a data change causes the virtual DOM to be re-rendered and patched.
- `destroyed()`: Called after the instance is destroyed.

**7. Conditional Rendering**

```html
<p v-if="seen">Now you see me</p>
<p v-else-if="age > 30">Age is more than 30</p>
<p v-else>Now you don't</p>
```

**8. List Rendering**

```html
<ul>
  <li v-for="item in items" :key="item.id">{{ item.text }}</li>
</ul>
```

**9. Event Handling**

- Listen to DOM events: `v-on:click="doSomething"`
- Event modifiers: `v-on:click.prevent` (prevent default), `v-on:submit.prevent` (prevent form submission)

**10. Two-Way Binding**

- `v-model`: `v-model="message"`

**11. Vue Router (if using `vue-router`)**

```js
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');
```

**12. Vuex (for state management, if using `vuex`)**

- State: `state: { count: 0 }`
- Mutations: `mutations: { increment(state) { state.count++ } }`
- Actions: 
  ```js
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  }
  ```
