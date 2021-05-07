<template>
  <div class="home" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Home",
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.test {
  font-size: 50px !important;
}
</style>
