<template>
  <el-container class="container">
    <el-header class="container_header">
      <el-row type="flex" justify="space-between">
        <el-col :span="0.5">
          <img
            class="container_header_img"
            src="../../assets/img/LogoOSS.png"
          />
        </el-col>
        <el-col :span="8">
          <span class="container_header_title">OpenSlot-Style-Guide</span>
        </el-col>
        <el-col :span="0.5">
          <nav-bar-language />
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import NavBarLanguage from "@/components/NavBar/NavbarLanguage.vue";

@Component({
  name: "NavBar",
  components: {
    NavBarLanguage,
  },
})
export default class NavBar extends Vue {}
</script>

<style scoped lang="scss">
.container {
  &_header {
    background-color: #143b52;
    font-size: 12px;
    box-shadow: 1px 3px 2px #c4c4c4;

    &_title {
      line-height: 60px;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
    }

    &_img {
      height: 45px;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
}
</style>
