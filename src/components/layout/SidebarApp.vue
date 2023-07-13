<template>
  <aside :class="{ show: showSidebar }">
    <ul>
      <li v-for="item in menuItems" :key="item.route" @click="navigateTo(item.route)">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    showSidebar: Boolean
  },
  data() {
    return {
      menuItems: [
        { route: '/', label: 'Home', icon: 'pi pi-user' },
        { route: '/gallery', label: 'Gallery', icon: 'pi pi-id-card' },
        { route: '/about', label: 'About', icon: 'pi pi-prime' },
        { route: '/chat', label: 'Chat', icon: 'pi pi-database' },
        { route: '/data', label: 'Data Table', icon: 'pi pi-list' }
      ],
      activeRoute: null
    };
  },
  methods: {
    navigateTo(route) {
      this.activeRoute = route;
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
aside {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 60px;
  width: 275px;
  min-height: 100vh;
  background-color: #acb8a7d4;
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
  padding-bottom: 1.875rem;
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
  transition: all 0.5s;
}

li:hover {
  background-color: #b4e7a2a6;
  border-radius: 0.5rem;
}

span {
  transition: all 0.4s;
  display: block;
  color: rgb(73, 72, 72);
}

li span:hover {
  color: rgb(3, 3, 3);

}

i {
  margin-right: 0.625rem;
}
</style>
