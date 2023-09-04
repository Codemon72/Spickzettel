Docs: https://vuejs.org/guide/introduction.html

# Vue

- `Reactivity`: Automatically updates the DOM when data changes.
- `Components`: Build UI using reusable, self-contained components.
- `Declarative Templates`: Write HTML-like syntax to declare your UI.
- `Directives`: Use special attributes like `v-if`, `v-for` to apply logic in templates.
- `Easy Integration`: Can be integrated into projects using other JS libraries.
- `Opinionated`: Provides official packages for state management, routing, etc.


### Basic SetUp

- Install Node
```js
npm init vue@latest // give it a name - say 'no' to everything except ROUTER, ESLINT, PRETTIER 
// cd into repo
npm install // or `npm i`
// to run it:
npm run dev
```
When you run `npm init vue@latest`, you are using a package called `create-vue`, which is the official scaffolding tool for Vue.js. This command initializes a new Vue.js project with the latest version of Vue.

`create-vue` uses `vite` as the build tool by default in Vue 3. So, when you create a new project using `npm init vue@latest`, it sets up a new Vue project using Vite behind the scenes.

Vite is a build tool developed by the same person who created Vue.js, Evan You. It is designed to be fast and efficient, and it is the recommended build tool for Vue 3.

You won't see any mention of Vite in the `npm init vue@latest` command, but if you look in the `package.json` file of the newly created project, you will see `vite` listed as a dependency. This means that `vite` is being used as the build tool for your Vue project.
–––

### Deployment

Recommended: Render: https://render.com/
Why: free tier for small projects, easy to use

Build command: `npm run build`
Publish directory: `dist`
–––


### Recommended Extensions for VSCode

- Prettier
- Prettier Eslint
- Volar 
  - syntax highlighting, error checking, formatting, and other language features
- Vue VSCode Snippets 
  - allows you to use `vbase-css` for a new standard component
–––


### PROPS

To pass props from a parent to a child component:

1. In the parent component, bind the data to be passed to the child component using `v-bind` or its shorthand `:`. 
2. In the child component, declare the props that you expect to receive using the `props` option. 
3. In the child component, you can then use the received props just like any other data property.

Example:

Parent Component:
```html
<template>
  <div>
    <child-component :user="parentUser"/>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentUser: {
        name: 'John Doe',
        image: 'path_to_image.jpg'
      }
    }
  }
}
</script>
```

Child Component:
```html
<template>
  <div>
    <p>{{ user.name }}</p>
    <img :src="user.image" alt="user image">
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>
```

In this example, the `parentUser` object from the parent component is passed down as a `user` prop to the child component. The child component declares `user` as a prop and then uses it in its template.
–––

### Emitter
Event emitting allows a child component to communicate with its parent component.

1. In the child component, use the `this.$emit` method to emit an event, optionally passing a value as an argument.
2. In the parent component, listen for the emitted event using `v-on` directive or its shorthand `@`, and define a method that will be triggered when the event is emitted.

Here's an example:

Child Component:
```html
<template>
  <div>
    <button @click="notifyParent">Notify Parent</button>
  </div>
</template>

<script>
export default {
  methods: {
    emits: ['child-event'], // not mandatory but provides better documentation and allows the Vue compiler to do some checks
    notifyParent() {
      this.$emit('child-event', 'Hello, Parent!');
    }
  }
}
</script>
```

Parent Component:
```html
<template>
  <div>
    <child-component @child-event="handleChildEvent"/>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  methods: {
    handleChildEvent(message) {
      alert(message);
    }
  }
}
</script>
```

In this example, the child component emits a `child-event` event with a message when the button is clicked. The parent component listens for `child-event` and triggers the `handleChildEvent` method when the event is emitted, displaying an alert with the message passed from the child component.
–––


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
–––


### Directives

Directives in Vue.js are special attributes with the `v-` prefix that you attach to DOM elements. They apply special reactive behavior to the DOM. Essentially, they are instructions to the Vue.js library on how to handle the DOM element they are attached to.

For example, `v-if` is a directive that conditionally renders an element based on the truthiness of the expression value:

```html
<div v-if="isVisible">This text is visible</div>
```

In this case, the `v-if` directive will render the `div` element only if the `isVisible` data property is `true`.

Here are a few commonly used Vue directives:

- `v-model`: Creates a two-way binding between a form input and a data property.
- `v-for`: Renders a list of items based on an array.
- `v-if`, `v-else-if`, `v-else`: Conditionally render elements.
- `v-on`: Attaches event listeners to elements (e.g., `v-on:click`).
- `v-bind`: Dynamically bind one or more attributes or a component prop to an expression.
- `v-html`: Dynamically binds and renders raw HTML content to an element. It updates the `innerHTML` of an element to the value of the provided expression. Note that using `v-html` can be risky because it can inadvertently expose your application to cross-site scripting (XSS) attacks if used on user-generated content.

Directives are a key feature of Vue.js that help you build dynamic and interactive web applications by reacting to changes in your data and updating the DOM accordingly.
–––


### TEMPLATE SYNTAX

- Interpolation: `{{ message }}`
- Directives: `v-bind:title="message"`, `v-model="message"`, `v-for="item in items"`, `v-on:click="sayHello"`
- Shortcuts: 
  - `@click` for `v-on:click`
  - `:href` for `v-bind:href`



### Watchers

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

### Lifecycle Hooks

- `created()`: Called after the instance is created.
- `mounted()`: Called after the DOM is mounted.
- `updated()`: Called after a data change causes the virtual DOM to be re-rendered and patched.
- `destroyed()`: Called after the instance is destroyed.

### Conditional Rendering

```html
<p v-if="seen">Now you see me</p>
<p v-else-if="age > 30">Age is more than 30</p>
<p v-else>Now you don't</p>
```

### List Rendering

```html
<ul>
  <li v-for="item in items" :key="item.id">{{ item.text }}</li>
</ul>
```

### Event Handling

- Listen to DOM events: `v-on:click="doSomething"`
- Event modifiers: `v-on:click.prevent` (prevent default), `v-on:submit.prevent` (prevent form submission)
–––


### Two-Way Data Binding

`v-model` is a directive used for two-way data binding between a form input and a piece of data in your component's data. It essentially combines `v-bind` (for binding a value to the input) and `v-on:input` (for updating the data when the input changes).

Example:

```html
<template>
  <div>
    <input v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>
```

In this example, the `message` data property is bound to the input field. As the user types into the input field, the `message` data property is automatically updated, and vice versa.

Note: In Vue 3, `v-model` can also be used on components, allowing you to synchronize a prop's value with the parent component's state.
–––


### Vue Router (if using `vue-router`)

- you can install it with npm but it's much easier during `npm init vue@latest`
- /views folder represents pages

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
–––

