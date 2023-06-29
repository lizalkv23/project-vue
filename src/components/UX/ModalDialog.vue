<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Заголовок модального окна -->
      <div class="modal-header">
        <h3>{{ title }}</h3>
        <button class="close" @click="closeModal">&times;</button>
      </div>

      <!-- Содержимое модального окна -->
      <div class="modal-body">
        <!-- Здесь разместите содержимое модального окна для регистрации -->
        <!-- Например, форму для входа или регистрации -->
        <!-- Можете использовать слоты для динамического содержимого -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Modal Dialog'
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header h3 {
  margin: 0;
}

.close {
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: 24px;
  color: #999;
}

.modal-body {
  margin-top: 20px;
}
</style>
