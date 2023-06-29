<template>
  <header>
    <div class="logo">
      Logo
      <i class="pi pi-bars" @click="toggleSidebar" style="margin-left: 190px"></i>
    </div>
    <div class="search">
      <input type="text" v-model="searchQuery" placeholder="Search" @input="searchItems" />
      <i class="pi pi-search"></i>
    </div>
    <div class="icons">
      <i class="pi pi-user" @click="handleIconClick('login')"></i>
      <i class="pi pi-bell" @click="handleIconClick('notification')"></i>
      <i class="pi pi-globe" @click="handleIconClick('language')"></i>
      <!-- Добавьте другие иконки здесь -->
    </div>
    <modal-dialog v-if="showModal" @close="showModal = false"></modal-dialog>
  </header>
</template>

<script>
import ModalDialog from '@/components/UX/ModalDialog.vue'
export default {
  components: {
    ModalDialog
  },
  props: {
    showSidebar: Boolean
  },
  data() {
    return {
      searchQuery: '',
      showSearch: false,
      showModal: false
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar')
    },
    handleIconClick(iconName) {
      if (iconName === 'login') {
        this.showModal = true // Показываем модальное окно при нажатии на иконку "Логин"
      }
      // Добавьте обработку клика для других иконок
    },
    searchItems() {
      // Функция поиска по буквам
      const query = this.searchQuery.toLowerCase()
      // Фильтруем карточки галереи на основе поискового запроса
      this.cards.forEach((card) => {
        card.visible = card.caption.toLowerCase().includes(query)
      })
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #35906491;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 9999;
}

.logo {
  font-weight: bold;
}

.icons {
  display: flex;
  align-items: center;
}

.icons i {
  margin-left: 15px;
}
i {
  cursor: pointer;
  color: rgb(12, 12, 12);
}
.search {
  display: flex;
  align-items: center;
}

.search input[type='text'] {
  margin-left: 10px;
  width: 350px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background-color: #7876761e;
  color: rgb(7, 7, 7);
  outline: none;
}

.search i.pi-search {
  margin-left: -20px;
  position: relative;
  cursor: pointer;
}

.icons i.pi-user {
  cursor: pointer;
}
</style>
