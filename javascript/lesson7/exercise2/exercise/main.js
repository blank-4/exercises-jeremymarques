var test = new Vue({
    el: '#app',
    data : {
      compteur:0
    },
    methods: {
        incrementer: function() {
          this.compteur = this.compteur +1;
      },
        decrementer: function() {
          this.compteur = this.compteur -1;
      }
    }
});
 