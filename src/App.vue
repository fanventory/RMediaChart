<template>
   <div id="app">
    <el-container>
      <el-header class="el_header">
        <el-button type="primary" @click="goTo('svgChart')">svg</el-button>
        <el-button type="success" @click="goTo('canvasChart')">canvas</el-button>
        <!-- <el-menu background-color="#fff"
        v-model="activeIndex"
        :default-active="activeIndex" 
        class="el-menu" 
        mode="horizontal" 
        @select="handleSelect"
        text-color="#000"
        active-text-color="#277ce4">
          <el-menu-item index="1"><router-link  class="del_decoration">svg</router-link></el-menu-item> -->
          <!-- <el-menu-item index="2"><router-link  class="del_decoration">canvas</router-link></el-menu-item> -->
          <!-- <el-menu-item index="3"><router-link to="/audition" class="del_decoration">审像特征</router-link></el-menu-item> -->
          <!-- <el-menu-item index="4"><router-link to="/inspectionRank" class="del_decoration">查验能力特征</router-link></el-menu-item> -->
          <!-- <el-menu-item index="5"><router-link to="/examinationRank" class="del_decoration">审单能力特征</router-link></el-menu-item> -->
          <!-- <el-menu-item index="6"><router-link to="/auditionRank" class="del_decoration">审像能力特征</router-link></el-menu-item> -->
          <!-- <el-menu-item index="7"><router-link to="/tensor" class="del_decoration">行权风险检测</router-link></el-menu-item> -->
        <!-- </el-menu> -->
      </el-header>
      <el-main class="el_main">
        <router-view />
      </el-main>
    </el-container>
  </div> 
<div>
</div>
</template>

<script setup>
import { ElConfigProvider } from "element-plus"
// import zhCn from "element-plus/lib/locale/lang/zh-cn"
</script>

<script>
export default {
  data() {
    return {
      activeIndex: 1,
    };
  },
  methods: {
    goTo(to) {
      this.$router.push(to);  
    } 
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el_header{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5vh;
}

.el_main{
  border-bottom: 0;
  padding: 0;
}
</style>
