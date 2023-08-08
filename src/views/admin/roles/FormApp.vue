<template>
   <div class="flex justify-content-between align-items-center">
      <Button label="Log In" v-show="!visible" class="pi pi-user ml-2 p-10" @click="modalVisible" />
   </div>
   <div class="card flex justify-content-center">
      <Dialog @hide="hideModal" v-model:visible="visible" header="User Information" class="w-25rem">
         <div class="mb-4">
            <div class="w-full">
               <div class="mb-5">
                  <span class="p-float-label w-full">
                     <InputText class="w-full" id="username" v-model="userName" />
                     <label for="username">Name</label>
                  </span>
                  <div class="error-message">{{ v$.userName.message }}</div>
               </div>
               <div class="mb-5">
                  <span class="p-float-label">
                     <InputText class="w-full" id="useremail" v-model="userEmail" />
                     <label for="useremail">E-mail</label>
                  </span>
                  <div class="error-message">{{ v$.userEmail.$model }}</div>
               </div>
               <div>
                  <span class="p-float-label">
                     <InputText class="w-full" id="userphone" v-model="userPhone" />
                     <label for="userphone">Telephone</label>
                  </span>
                  <div class="error-message">{{ v$.userPhone.$invalid }}</div>
               </div>
            </div>
         </div>
         <div class="flex flex-wrap justify-content-end mt-2 mb-4">
            <div>
               <Button @click="editUser" class="editUserButton mr-3" label="Save" />
               <Button @click="hideModal" label="Cancel" class="cancelButton" />
            </div>
         </div>
      </Dialog>
   </div>
</template>

<script>
import { required, email } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
   name: 'admin.form',

   emits: ['hide-modal'],

   props: ['isModalVisible'],
   setup: () => ({ v$: useVuelidate() }),
   data() {
      return {
         visible: false,
         userName: '',
         userEmail: '',
         userPhone: '',
      };
   },

   validations() {
      return {
         userName: { required },
         userEmail: { required, email },
         userPhone: { required },
      };
   },

   watch: {
      isModalVisible(value) {
         this.visible = value;
      },
   },

   methods: {
      hideModal() {
         this.$emit('hide-modal');
      },
      modalVisible() {
         this.visible = !this.visible;
      },

      editUser() {
         this.v$.$touch();
         if (!this.v$.$invalid) {
            // Действия при успешной валидации
         }
      },
   },
};
</script>

<style lang="scss" scoped>
.editUserButton {
   background-color: #26dbab;

   &:hover {
      background-color: #06603b;
   }
}

.cancelButton {
   background-color: #eb4343;

   &:hover {
      background-color: #6e0820;
   }
}

.error-message {
   color: red;
   margin-top: 5px;
}
</style>