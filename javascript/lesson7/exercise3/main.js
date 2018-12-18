var app = new Vue({
    el: '#app',
    data: function() {
        return {
            afficher: false,
            message: ""
        }
    },
        methods: {
            alert() {
             alert (this.message)
            }
        }
});