const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    // we are going to use it as a data property
    fullName() {
      return this.name === "" ? "" : this.name + " " + "Khan";
    },
  },
  methods: {
    outputFullName() {
      return this.name === "" ? "" : this.name + " " + "Khan";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
