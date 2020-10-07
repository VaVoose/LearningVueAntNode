var msg = "Hello World";
console.log(msg);

//Dom made a branch

Vue.component('grocery-list', {
  props: ["items"],
  template: '<li> {{ items.text }} </li>'
});

var ani = new Vue({
  el: "#animation",
  data:{
    isOpen: true
  },
  methods:{
    toggleAcordian: function() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    acordianClasses: function() {
      return {
        'is-closed': !this.isOpen,
        'is-primary': this.isOpen,
        'is-dark': !this.isOpen
      }
    }
  }
});

const users = [
  {name: "dominic", profession: "programmer", age:"21"},
  {name: "wayne", profession:"designer", age: "21"},
  {name: "will", profession: "Framework Dev", age: "22"}
];

const p = new Vue({
  el:"#application",
  data: {
    users: users,
    myStyle: {
      backgroundColor: "red",
      color: "#FFFFFF",
      fontSize: "20px"
    },
    count: 0
  },

  methods: {
    incrementCounter: function() {
      this.count += 1;
    }
  }
});

var app2 = new Vue({
  el: "#app2",
  data: {
    groceryList: [
      {id: 1, text: "Brocolli"},
      {id: 2, text: "Spinach"},
      {id: 3, text: "Cheese"}
    ]
  }
});

var app1 = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      message2: "This is message2",
      message3: "Poopdiescoopwoop",
      seen: true,
      todos: [
        {text: "Learn Vue"},
        {text: "Learn Compoennt Library"},
        {text: "Build Traak Front End"}
      ]
    }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    //Don't user Arrow functions -> Arrow functions mean "this.__" will not work properly
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});


