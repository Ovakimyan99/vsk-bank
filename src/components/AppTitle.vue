<template>
  <span class="section-heading" :class="{ inversion }">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    inversion: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@use '@/assets/styles/colors';

.section-heading {
  @include mixins.setFontParams(800, 30px);
  color: colors.$textAccent;
  margin-bottom: 86px;
  position: relative;
  display: block;

  @media (min-width: 560px) {
    font-size: 35px;
  }

  @media (min-width: 968px) {
    font-size: 43px;
  }

  @media (min-width: 1220px) {
    font-size: 50px;
  }

  &:after {
   content: '';
   position: absolute;
   bottom: -30px;
   left: 0;
   width: 90px;
   height: 3px;
   background: colors.$textAccentDark;
 }

  &.inversion {
    @media (min-width: 986px) {
      text-align: right;

      &:after {
        left: auto;
        right: 0;
      }
    }
  }
}
</style>
