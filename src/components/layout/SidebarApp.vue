<template>
  <aside :class="{ show: showSidebar }">
    <ul>
      <li @click="navigateTo('/')">
        <i class="pi pi-home"></i>
        <span>home</span>
      </li>
      <li @click="navigateTo('/gallery')">
        <i class="pi pi-image"></i>
        <span>gallery</span>
      </li>
      <li @click="navigateTo('/about')">
        <i class="pi pi-info-circle"></i>
        <span>about</span>
      </li>
      <li @click="navigateTo('/contacts')">
        <i class="pi pi-envelope"></i>
        <span>contacts</span>
      </li>
      <li @click="navigateTo('/data')">
        <i class="pi pi-question-circle"></i>
        <span>Data Table</span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    showSidebar: Boolean
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
aside {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 60px;
  width: 275px;
  min-height: 100vh;
  background-color: #9ea39cd4;
  transition: transform 0.3s;
  transform: translateX(-100%);
}

aside.show {
  transform: translateX(0);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: 100vh;
  overflow: auto;
  padding-bottom: 30px;
  /* margin-top: 60px; */
}

ul {
  list-style-type: none;
  padding: 20px;
}

li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

i {
  margin-right: 10px;
}
</style>
