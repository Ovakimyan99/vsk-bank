<template>
  <div class="insurance" :class="{ inversion }">
    <div class="insurance-image">
      <slot name="image" />
    </div>
    <article :class="{ inversion }" class="insurance-content">
      <slot />
    </article>
  </div>
</template>

<script>
export default {
  name: 'InsuranceInfo',
  props: {
    inversion: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins';
@use '@/assets/styles/colors';

.inversion.insurance {
  flex-direction: row-reverse;
}

.insurance {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (min-width: 968px) {
    flex-wrap: nowrap;
  }
  //
  //@media (min-width: 1220px) {
  //  font-size: 50px;
  //}

  &-image {
    flex: 1 0 100%;

    @media (min-width: 560px) {
      flex: 1 0 50%;
      max-width: 60%;
    }

    @media (min-width: 968px) {
      flex: 1 0 50%;
      max-width: none;
    }

    @media (min-width: 1220px) {
      flex: 1 0 auto;
    }
  }

  &-content {
    padding: 26px 32px 33px 20px;
    background-color: colors.$bgGentle;
    flex: 1 0 auto;

    @media (min-width: 560px) {
      padding: 38px 50px 47px 55px;
    }

    @media (min-width: 968px) {
      padding: 55px 70px 60px 58px;
      flex-basis: calc(50% - 128px);
    }

    @media (min-width: 1220px) {
      padding: 66px 82px 76px 60px;
      flex-basis: calc(50% - 142px);
    }
  }
}
</style>
