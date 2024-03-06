<template>
  <ChildComponent :users="users" @getUserList="getUserList"></ChildComponent>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
    components: { ChildComponent },
    data(){
        return{
                    users:[]

        }
    },
    mounted() {
        this.getList();
    },

    methods: { 
        getList() {
            let res = require('./data.json')
            console.log(res.data);
            this.users = res.data;
            
        },getUserList(e) {
           this.getList();
            console.log('我是父组件，这是子组件传来的数据' + e);
        }
    }   
        
    }

</script>

<style>

</style>