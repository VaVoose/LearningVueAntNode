//var msg = "Hello World";
//console.log(msg);
Vue.component('grocery-list', {

})

var app = new Vue({
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
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


