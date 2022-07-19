<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  emits: {
    click: null
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@import '@/assets/styles/colors';
.btn {
  @include mixins.bgGradient();
  @include mixins.setFontParams(500, 24px);
  line-height: 1;
  overflow: hidden;
  position: relative;
  border-radius: 31px;
  padding: 15px 45px;
  color: $textWhite;
  border: 2px solid transparent;
  cursor: pointer;

  &:after, &:before {
    content: '';
    position: absolute;
    background: rgba(215, 233, 255, 0.19);
    height: calc(100% - 4px);
    top: 2px;
    transform: skewX(19deg);
  }

  &:after {
    left: 70px;
    width: 22px;
  }

  &:before {
    left: 33px;
    width: 27px;
  }
}
</style>
