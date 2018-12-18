var test = new Vue({
    el: '#app',
    data : {
      compteur:0
    },
    methods: {
        incrementer: function() {
          this.compteur ++;
      },
        decrementer: function() {
          this.compteur --;
      }
    }
});
 