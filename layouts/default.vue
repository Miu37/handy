<template>
  <AppHeader />
  <div class="content d-flex">
    <AppLeft />
    <slot />
  </div>
  <AppFooter />
</template>

<style lang="scss" scoped>
.content{

  background-color: antiquewhite;
}
</style>
