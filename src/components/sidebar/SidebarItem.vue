<template>
  <el-menu-item class="item" :index="index">
    <i :class="icon" class="item__icon" />
    <span class="item__title">{{ $t(text) }}</span>
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
  line-height: 3.313rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: $secondary-color !important;
    i {
      color: $main-color;
    }
  }
  &:focus {
    background-color: $secondary-color;
  }

  &__icon {
    font-size: 1.438rem;
    color: $silver;

    @include touch {
      font-size: 1.2rem;
    }
    &:active {
      color: $main-color;
    }
  }

  &__title {
    display: inline-block;
    height: 3.188rem;
    margin-left: 0.188rem;
    color: $main-color;

    @include touch {
      font-size: 0.75rem;
    }
  }
}
</style>
