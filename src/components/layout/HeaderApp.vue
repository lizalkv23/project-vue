<template>
  <header class="flex align-items-center gap-4 justify-content-between fixed left-0 top-0 w-full">
    <div class="font-semibold">
      Logo <i class="pi pi-bars show-icon icon-hover" @click="toggleSidebar"></i>
    </div>
    <div class="p-d-flex p-ai-center">
      <span class="p-input-icon-left">
        <InputText v-model="value" placeholder="Search" class="search outline-none" />
        <i class="pi pi-search" />
      </span>
    </div>
    <div class="icons">
      <i class="pi pi-user" @click="visible = true"></i>
      <Dialog v-model:visible="visible" modal :style="{ width: '30vw' }">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iure minus ipsa
          aliquam, qui pariatur obcaecati dolor reprehenderit quasi voluptatum numquam earum quos
          nam facilis sapiente veritatis iste neque. In!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iure minus ipsa
          aliquam, qui pariatur obcaecati dolor reprehenderit quasi voluptatum numquam earum quos
          nam facilis sapiente veritatis iste neque. In!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iure minus ipsa
          aliquam, qui pariatur obcaecati dolor reprehenderit quasi voluptatum numquam earum quos
          nam facilis sapiente veritatis iste neque. In!
        </p>
      </Dialog>
      <i class="pi pi-bell p-mr-2" @click="handleIconClick('notification')"></i>
      <i class="pi pi-globe p-mr-2" @click="handleIconClick('language')"></i>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    showSidebar: Boolean
  },
  data() {
    return {
      searchQuery: '',
      showSearch: false,
      visible: false,
      showModal: false,
      value: null
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar')
    },
    searchItems() {
      const query = this.searchQuery.toLowerCase()
      this.cards.forEach((card) => {
        card.visible = card.caption.toLowerCase().includes(query)
      })
    }
  }
}
</script>

<style scoped>
header {
  height: 60px;
  background-color: #5ebc076f;
  padding: 0 20px;
  z-index: 50;
}
.show-icon {
  margin-left: 190px;
}
.icons i {
  margin-left: 15px;
}

i {
  cursor: pointer;
  color: rgb(9, 9, 9);
}

.search {
  width: 400px;
  border: none !important;
  outline: none !important;
  border-radius: 4px;
  background-color: #7876761e !important;
  color: rgb(7, 7, 7);
}
.search:focus {
  background-color: #5dcaab1e !important;
}

.search i.pi-search {
  margin-left: -20px;
  position: relative;
  cursor: pointer;
}

.icons i.pi-user {
  cursor: pointer;
}
i{
  transition: color 0.3s;
}
i:hover{
  color: #949894;
}
</style>
