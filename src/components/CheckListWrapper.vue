<template>
  <ul class="abstract-list">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'CheckListWrapper'
}
</script>

<style scoped lang="scss">
.abstract-list {
  display: flex;
  width: 100%;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}
</style>
