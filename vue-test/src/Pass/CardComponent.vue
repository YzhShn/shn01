<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
     
      </div>
      <div v-for="o in user.users" :key="o.id" class="text item">
        {{ 'name ' + o.name }}
        {{ 'role ' + o.role }}
        {{ 'id ' + o.id }}
      </div>
    </el-card>
    <el-button @click="sendMsg">更新</el-button>


  </div>
</template>
  
<script>
export default {
  props: ['user'],
  data() {
    return {





    }
  },
  mounted() {
    console.log(this.user)
  },methods:{
    sendMsg(){
      this.$emit('getUser','更新');
    }
  }

}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>