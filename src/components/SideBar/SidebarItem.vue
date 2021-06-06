<template>
  <el-menu-item class="item" :index="index">
    <i :class="icon" class="item_icon" />
    <span class="item_title">{{ $t(text) }}</span>
  </el-menu-item>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "NavbarItem",
  components: {},
})
export default class SidebarItem extends Vue {
  @Prop(String) private index: string;
  @Prop(String) private text: string;
  @Prop(String) private icon: string;
}
</script>
<style scoped lang="scss">
.item {
  text-align: left;
  &:hover {
    background-color: $secondary-color !important;
  }

  &_icon {
    font-size: 1.438rem;
    color: #c4c4c4;
    &:active {
      color: $main-color;
    }
  }

  &_title {
    display: inline-block;
    height: 3.188rem;
    margin-left: 0.188rem;
  }
}
</style>
