<template>
  <div class="layout-wrapper">
    <header-app :showSidebar="showSidebar" @toggleSidebar="toggleSidebar" />
    <main :class="{ shifted: showSidebar }" style="min-height: 100vh">
      <div class="card">
        <TabMenu :model="items" />
      </div>
      <sidebar-right />
      <router-view></router-view>
    </main>
    <sidebar-app :showSidebar="showSidebar" />
  </div>
</template>

<script>
import SidebarApp from '@/components/layout/SidebarApp.vue'
import HeaderApp from '@/components/layout/HeaderApp.vue'
import SidebarRight from '@/components/UX/SidebarRight.vue'

export default {
  components: {
    SidebarApp,
    HeaderApp,
    SidebarRight
  },
  data() {
    return {
      showSidebar: true,
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'List',
          icon: 'pi pi-fw pi-calendar',
          to: '/list'
        },
        {
          label: 'Show',
          icon: 'pi pi-fw pi-file',
          to: '/show'
        },
        {
          label: 'Create',
          icon: ' pi pi-fw pi-pencil',
          to: '/create'
        },
        {
          label: 'Form',
          icon: 'pi pi-check-square',
          to: '/form'
        },
        {
          label: 'Update',
          icon: 'pi pi-fw pi-cog',
          to: '/update'
        }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Poppins:300,regular,700);
* {
  padding: 0;
  margin: 0;
  border: 0px;
  box-sizing: border-box;
}
img {
  max-width: 100%;
  vertical-align: top;
}
body {
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  font-family: poppins;
  width: 100%;
  &::-webkit-scrollbar {
    width: 0;
  }
}

.layout-wrapper {
  display: flex;
}

main {
  flex: 1;
  margin-top: 60px;
  padding: 1.5625rem;
  transition: margin-left 0.3s;
}

main.shifted {
  margin-left: 275px;
}
</style>
