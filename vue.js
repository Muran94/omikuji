var vm = new Vue({
  el: "#app",
  data: {
    result: 'あなの運勢は・・・'
  },
  methods: {
    divine: function() {
      var results = ['大吉', '中吉', '吉', '凶', '末吉'];
      var rand_num = Math.floor(Math.random() * results.length);
      this.result = results[rand_num];
    }
  }
})
