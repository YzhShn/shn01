<template>
   <div>
    <div v-for="user in users" :key="user.id">
      <CardComponent :user="user" @getUser="getUser"></CardComponent>
    </div>
    
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
    props: ['users'],
    components: { CardComponent },
    mounted() {
      
    },
    methods: {
      getUser(e) {
        this.$emit('getUserList', e);
      }
    }
}
</script>

<style>

</style>