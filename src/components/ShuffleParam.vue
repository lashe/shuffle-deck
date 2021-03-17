<template>
  <form class="add-form">
    <div class="form-control">
      <input
        :type="type"
        min="0"
        max="10000"
        :placeholder="hint"
      />
    </div>
    
  </form>
</template>

<script>
export default {
  name: "TextBox",
  props: {
        hint: String,
        type: String
    },
  data() {
    return {
      text: '',
    };
  },
  components: {
  },
  methods: {
    onClick() {
      if (this.text) {
        console.time("randomnum");
        for (let i = 0; i < this.text; i++) {
          const clic = Math.random();
          console.log(clic);
        }
        console.timeEnd("randomnum");
      }
    },
    onClick2() {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const xorshift = require("xorshift");
      if (this.text) {
        console.time("randomnum");
        for (let i = 0; i < this.text; i++) {
          const clic = xorshift.random();
          console.log(clic);
        }
        console.timeEnd("randomnum");
      }
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>