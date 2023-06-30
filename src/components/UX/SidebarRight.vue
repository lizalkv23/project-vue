<template>
  <div>
    <div class="fixed top-50 right-0">
      <Button icon="pi pi-comments text-cyan-200" class="info" @click="visibleRight = true" />
    </div>
    <Sidebar v-model:visible="visibleRight" position="right" class="sidebar">
      <h2>Right Sidebar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </Sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibleRight: false
    }
  }
}
</script>
