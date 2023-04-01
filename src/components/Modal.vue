<template>
  <div class="dialog">
    <header class="dialog__header">
    </header>
    <div class="dialog__content">
      <slot name="content"></slot>
    </div>
    <footer class="dialog__footer">
      <div class="footer-dialog">
        <slot name="footer"></slot>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    onClose: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.dialog {
  background: #fff;
  color: rgba(30, 32, 35, 1);
  position: relative;
  min-width: 600px;
  border-radius: 20px;
  transition: all 0.25s ease;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.3);
  margin: auto;
  z-index: 99;
  overflow: visible;


  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
  }
  &__content {
    padding: 10px 16px;
    width: 100%;
    position: relative;
    border-radius: inherit;
    overflow: hidden;
  }
  &__footer {
    padding: 0 16px 10px;

    .footer-dialog {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
  }
}
</style>
