const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    addFive() {
      this.number = this.number + 5;
    },
    addOne() {
      this.number = this.number + 1;
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result(value) {
      if (value !== "") {
        setTimeout(() => {
          this.number = 0;
        }, 5000);
      }
    },
  },
});

app.mount("#assignment");
