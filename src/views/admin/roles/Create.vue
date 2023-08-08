<template>
   <div>
      <h1>Create</h1>
   </div>
   <form-app />
</template>

<script>
import FormApp from '@/views/admin/roles/FormApp.vue'

export default {
   name: 'admin.create',
   components: {
      FormApp
   },
   data() {
      return {
         isModalVisible: false,
      }
   },
}

</script>

<style lang="scss" scoped></style>