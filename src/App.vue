<template>
  <div class="container">
    <Header />
    <input
      class="input"
      @input="clear()"
      @change="warn()"
      type="number"
      min="0"
      max="10000"
      placeholder="number"
      v-model="numRnds"
    />
    <label v-show="err" style="color: red">please enter a valid number</label>
    <input
      class="input"
      placeholder="start time"
      v-model="starttime"
      readonly
    />
    <input class="input" placeholder="end time" v-model="endtime" readonly />
    <input
      class="input"
      placeholder="total time"
      v-model="totaltime"
      readonly
    />
    <Button @click="onClick()" text="JS Random" color="green" />
    <Button @click="onClick2()" text="Xorshift" color="green" />
    <!-- <Button @click="onClick3()" text="WELL512a.c" color="green" /> -->
    <table style="width: 100%">
      <tr>
        <th>Algorithm name</th>
        <th>Time Started</th>
        <th>Time ended</th>
        <th>Total time</th>
      </tr>
      <tr>
        <td>JS Random</td>
        <td>{{starttime2}}</td>
        <td>{{endtime2}}</td>
        <td>{{totaltime2}}</td>
      </tr>
      <tr>
        <td>Xorshift</td>
        <td>{{starttime3}}</td>
        <td>{{endtime3}}</td>
        <td>{{totaltime3}}</td>
      </tr>
      <!-- <tr>
        <td>WELL512a</td>
        <td>{{starttime4}}</td>
        <td>{{endtime4}}</td>
        <td>{{totaltime4}}</td>
      </tr> -->
    </table>
  </div>
</template>

<script>
import Header from "./components/Header";
import Button from "./components/Button";
export default {
  name: "App",
  components: {
    Header,
    Button,
  },
  data() {
    return {
      tasks: [],
      numRnds: "",
      starttime: "",
      endtime: "",
      totaltime: "",
      starttime2: "",
      endtime2: "",
      totaltime2: "",
      starttime3: "",
      endtime3: "",
      totaltime3: "",
      starttime4: "",
      endtime4: "",
      totaltime4: "",
      Rt: '',
      Rt2: '',
      err: false,
      warning: false,
    };
  },
  methods: {
    // onClick() {
    //         console.log('click')
    //     },
    onClick() {
      if (this.numRnds && this.numRnds <= 10000) {
        if (!this.starttime) {
          this.starttime = new Date().toISOString().substr(11, 19)
          this.Rt = new Date().getTime()
        }
        this.starttime2 = new Date().toISOString().substr(11, 19)
        const a = performance.now()
        console.time("randomnum");
        for (let i = 0; i < this.numRnds; i++) {
          const clic = Math.random();
          console.log(clic);
        }
        const b = performance.now()
        this.endtime2 = new Date().toISOString().substr(11, 19)
        console.timeEnd("randomnum");
        this.totaltime2 = (b-a)
        if (this.endtime2 && this.endtime3) {
          this.endtime = new Date().toISOString().substr(11, 19)
          this.Rt2 = new Date().getTime()
          // this.totaltime = this.Rt2 - this.Rt
          this.totaltime = this.totaltime2 + this.totaltime3
        }
      } else {
        this.err = true
      }
    },
    onClick2() {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const xorshift = require("xorshift");
      if (this.numRnds && this.numRnds <= 10000) {
        if (!this.starttime) {
          this.starttime = new Date().toISOString().substr(11, 19)
          this.Rt = new Date().getTime()
        }
        const a = performance.now()
        this.starttime3 = new Date().toISOString().substr(11, 19)
        console.time("randomnum2");
        for (let i = 0; i < this.numRnds; i++) {
          const clic = xorshift.random();
          console.log(clic);
        }
        const b = performance.now()
        this.endtime3 = new Date().toISOString().substr(11, 19)
        console.timeEnd("randomnum2");
        this.totaltime3 = (b-a)
        if (this.endtime2 && this.endtime3) {
          this.endtime = new Date().toISOString().substr(11, 19)
          this.Rt2 = new Date().getTime()
          // this.totaltime = this.Rt2 - this.Rt
          this.totaltime = this.totaltime2 + this.totaltime3
        }
      }
      else {
        this.err = true
      }
    },
    clear () {
      this.err = false
    },
    warn() {
      if (this.starttime && !this.endtime){
        if (confirm("Test has not been completed. to continue test with current round value click cancel, to input new value click ok")) {
          this.starttime=''
          this.starttime2=''
          this.starttime3=''
          this.starttime4=''
          this.endtime=''
          this.endtime2=''
          this.endtime3=''
          this.endtime4=''
          this.totaltime=''
          this.totaltime2=''
          this.totaltime3=''
          this.totaltime4=''
        } else {
          this.confirm = false
        }
      }
      if(this.starttime && this.endtime){
         this.starttime=''
          this.starttime2=''
          this.starttime3=''
          this.starttime4=''
          this.endtime=''
          this.endtime2=''
          this.endtime3=''
          this.endtime4=''
          this.totaltime=''
          this.totaltime2=''
          this.totaltime3=''
          this.totaltime4=''
      }
    },
  },
  // created() {}
};
</script>

<style>
table, th, td {
  border: 1px solid black;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 700px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>
