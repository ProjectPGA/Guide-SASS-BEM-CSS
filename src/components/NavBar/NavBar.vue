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
          <span class="container_header_title">SASS-BEM-CSS</span>
        </el-col>
        <el-col :span="0.5">
          <el-dropdown trigger="click">
            <box-icon
              class="container_header_language"
              name="world"
              color="white"
            ></box-icon>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="container_dropdown_item"
                >Spanish</el-dropdown-item
              >
              <el-dropdown-item class="container_dropdown_item"
                >English</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SideBar from "@/components/SideBar/SideBar.vue";

@Component({
  components: {
    SideBar,
  },
})
export default class NavBar extends Vue {}
</script>

<style scoped lang="scss">
.container {
  &_header {
    background-color: #849199;
    font-size: 12px;
    box-shadow: 1px 2px 1px #c4c4c4;

    &_title {
      line-height: 60px;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }

    &_img {
      height: 50px;
      margin-top: 5px;
      margin-top: 5px;
    }

    &_language {
      height: 60px;
      cursor: pointer;
    }
  }
  &_dropdown {
    &_item {
      font-family: Helvetica, Arial, sans-serif;
    }
  }
}
</style>
