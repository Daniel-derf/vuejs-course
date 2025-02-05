const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // watch property is used to watch the data property
    // and it will be executed whenever the data property changes
    name(value) {
      if (value === "") {
        this.fullname = "";
        return;
      }

      this.fullname = value + " " + "Khan";
    },
    lastName(value) {
      if (value === "") {
        this.fullname = "";
        return;
      }

      this.fullname = this.name + " " + value;
    },
  },
  computed: {
    // we are going to use it as a data property
    // fullName() {
    //   return this.name === "" ? "" : this.name + " " + "Khan";
    // },
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
