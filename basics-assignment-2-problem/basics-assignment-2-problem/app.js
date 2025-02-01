Vue.createApp({
  data() {
    return {
      keydownOutput: "",
      keydownEnterOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Alert!");
    },
    registerInput(event) {
      this.keydownOutput = event.target.value;
    },
    registerEnterInput(event) {
      this.keydownEnterOutput = event.target.value;
    },
  },
}).mount("#assignment");
