<template>
  <div id="app">
    <nav-bar />
    <el-row>
      <el-col :span="4">
        <side-bar />
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import NavBar from "@/components/NavBar/NavBar.vue";
import SideBar from "@/components/SideBar/SideBar.vue";

@Component({
  components: {
    NavBar,
    SideBar,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
