<template>
  <span
    :class="{'no-active': rotate}"
    class="arrow-state-indicator"
  />
</template>

<script>
export default {
  name: 'ArrowStateIndicator',
  props: {
    rotate: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_colors.scss";

.arrow-state-indicator {
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translateY(0%) rotate(-45deg);
    border-top: 2px solid colors.$textDark;
    border-right: 2px solid colors.$textDark;
    transition: 0.3s ease;
  }

  &.no-active:after {
    transform: translateY(-50%) rotate(135deg);
  }
}
</style>
