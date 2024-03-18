<template>
  <div class="content d-flex">
    <AppLeft />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  background-color: antiquewhite;
}
</style>
