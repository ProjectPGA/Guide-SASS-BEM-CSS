<template>
  <el-container class="container">
    <el-header class="container__header">
      <el-row
        class="container__header__row"
        type="flex"
        justify="space-between"
      >
        <el-col class="container__header__button-logo" :span="0.5">
          <el-button
            @click="hiddeSidebar"
            class="container__header__button-logo_button"
            ><i
              class="bx bx-menu container__header__button-logo__button__icon"
            ></i
          ></el-button>
          <img
            class="container__header__img"
            src="../../assets/img/LogoOSS.svg"
          />
        </el-col>
        <el-col :span="8">
          <span class="container__header__title">{{
            $t("components.navbar.title")
          }}</span>
        </el-col>
        <el-col :span="0.5">
          <navbar-language />
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import mainStore from "@/store/main-store/MainStore";

import NavbarLanguage from "@/components/navbar/NavbarLanguage.vue";

@Component({
  name: "NavBar",
  components: {
    NavbarLanguage,
  },
})
export default class NavBar extends Vue {
  private mainStore = mainStore.context(this.$store);
  private hiddeSidebar(): void {
    this.mainStore.state.isHidden == true
      ? this.mainStore.actions.showSidebar()
      : this.mainStore.actions.hiddeSidebar();
  }
}
</script>

<style scoped lang="scss">
.container {
  &__header {
    background-color: $main-color;
    padding-left: 0.625rem;
    padding-right: 0.625rem;

    @include touch {
      height: 3.125rem !important;
      padding-left: 0;
    }

    &__row {
      @include touch {
        height: 3.125rem;
      }
    }

    &__button-logo {
      display: flex;
      align-items: center;
      justify-content: center;

      @include touch {
        height: 3.125rem;
      }

      &__button {
        display: none;
        background-color: $main-color;
        border: none;
        border-radius: 0;
        padding: 0;
        height: 3.75rem;
        width: 3.125rem;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        @include touch {
          height: 3.125rem;
          display: block;

          &:hover {
            background-color: $main-color;

            .container__header__button-logo__button__icon {
              color: $secondary-color;
            }
          }
          &:active {
            background-color: $main-color;
            border-color: $secondary-color-light;
          }

          &:focus {
            background-color: $main-color;
          }
        }

        &__icon {
          font-size: 1.563rem;
          color: $secondary-color-light;

          @include touch {
            font-size: 1.25rem;
          }
        }
      }
    }

    &__title {
      line-height: 3.5rem;
      color: $secondary-color-light;
      font-weight: 500;
      font-size: 1.25rem;

      @include touch {
        font-size: 0.75rem;
        line-height: 3.125rem;
      }
    }

    &__img {
      height: 2.6rem;

      @include touch {
        height: 1.8rem;
      }
    }
  }
}
</style>
