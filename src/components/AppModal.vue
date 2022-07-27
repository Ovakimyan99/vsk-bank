<template>
  <div
    v-if="showModal"
    @click="close"
    class="modal"
  >
    <div @click.stop class="modal-content">
      <!--  Modal Header  -->
      <header class="modal-header">
        <!--  Title  -->
        <span class="modal-title">
          <slot name="title"></slot>
        </span>
        <!--  Close Button  -->
        <span @click="close" class="modal-btn-close">
          &#10008;
        </span>
      </header>

      <!--  Form  -->
      <form class="modal-form">
        <slot name="form" />
      </form>
      <!--  Send Form  -->
      <app-button
        @click="send"
        class="modal-btn-send"
      >Отправить</app-button>
    </div>
  </div>
</template>

<script>
import { disableScroll, enablesScroll } from '@/windowScroll'

export default {
  name: 'AppModal',
  data() {
    return {
      showModal: false
    }
  },
  modalController: {
    resolve: null
  },
  methods: {
    assecc() {
      enablesScroll()
      this.showModal = false
    },
    send() {
      this.$options.modalController.resolve(true)
    },
    open() {
      let res = null
      const modalPromise = new Promise(resolve => {
        res = resolve
      })

      this.$options.modalController.resolve = res
      this.showModal = true
      disableScroll()

      return modalPromise
    },
    close() {
      enablesScroll()
      this.showModal = false
      this.$options.modalController.resolve(false)
    }
  },
  beforeUnmount() {
    this.close()
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss";
@use "@/assets/styles/_colors.scss";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow-y: auto;
  z-index: 5;
  width: calc(100% - 20px);
  max-height: 100vh;
  min-height: calc(100vh - 20px);

  &-content {
    background: colors.$bgGentle;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 22px;
    overflow-y: auto;
    width: calc(560px - 40px);
    max-width: calc(560px - 40px);
    max-height: calc(100vh - 60px);
    padding: 20px;

    @media (min-width: 1220px) {
      padding: 50px 98px 58px;
      width: calc(100% - 196px);
      max-width: calc(560px - 196px);
      max-height: calc(100vh - 128px);
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    align-items: center;
  }

  &-title {
    @include mixins.setFontParams(600, 26px);
  }

  &-form {
    display: flex;
    flex-direction: column;
  }

  &-btn {
    &-close {
      display: inherit;
      width: 20px;
      height: 20px;
      color: colors.$textDark;
      font-size: 20px;
      cursor: pointer;
    }

    &-send {
      padding: 15px 60px !important;
      margin: 44px auto 0;
      display: block;
    }
  }
}
</style>
