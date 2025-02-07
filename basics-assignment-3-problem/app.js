const app = Vue.createApp({
  data() {
    return {
      result: "",
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
  computed: {},
  watch: {
    result(value) {
      if (value !== "") {
        setTimeout(() => {
          this.number = 0;
        }, 5000);
      }
    },
    number(value) {
      if (value < 37) {
        this.result = "Not there yet";
      } else if (value === 37) {
        this.result = value;
      } else {
        this.result = "Too much!";
      }
    },
  },
});

app.mount("#assignment");
