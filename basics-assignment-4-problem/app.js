const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragraphClass: "visible",
    };
  },

  methods: {
    toggleParagraph() {
      this.paragraphClass =
        this.paragraphClass === "visible" ? "hidden" : "visible";
    },
  },
});

app.mount("#assignment");
