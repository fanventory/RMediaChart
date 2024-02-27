<template>
  <div class="container">
    <div class="left">
      <vue-tree
      style="width: 95vw; height: 95vh;"
      :dataset="richMediaData"
      :config="treeConfig"
      ref="svg"
    >
      <template v-slot:node="{ node, collapsed }">
        <div
          class="rich-media-node"
          :style="{ border: collapsed ? '2px solid grey' : '' }"
        >
          <img
            :src="node.avatar"
            style="width: 48px; height: 48px; border-raduis: 4px;"
          />
          <span style="padding: 2px 0; font-weight: bold;">姓名: {{ node.name }}</span>
          <span style="padding: 2px 0; font-weight: bold;">出生日期: {{ node.birth }}</span>
          <span style="padding: 2px 0; font-weight: bold;">学历: {{ node.education }}</span>
          <span style="padding: 2px 0; font-weight: bold;">工作单位:<br> {{ node.work }}</span>
        </div>
      </template>
    </vue-tree>
    </div>
    <div class="right">
      <button  @click="zoomOut" class="el_button">+</button>
      <button  @click="zoomIn" class="el_button">-</button>
      <button  @click="restoreScale" class="el_button">重置</button>
    </div>
  </div>
  
</template>

<script>
import VueTree from "@ssthouse/vue3-tree-chart";
import "@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css";
import axios from 'axios';  

export default {
  components: { VueTree },
  data(){
    return {
      richMediaData: null,
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 200 }
    }
  },
  methods:{
    zoomIn(){
      this.$refs.svg.zoomIn();
    },
    zoomOut(){
      this.$refs.svg.zoomOut();
    },
    restoreScale(){
      this.$refs.svg.restoreScale();
    },
  },
  async created() {  
    try {  
      const response = await axios.get('./data.json');  
      this.richMediaData = response.data;
      console.log(response.data)
    } catch (error) {  
      console.error('Error fetching data:', error);  
    }  
  },  
};
</script>


<style scoped lang="less">
.container{
  display: flex;
  flex-direction: row;
}


.left{
  display: flex;
}

.right{
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: #f7c616;
}

.el_button{
  display: flex;
  width: 50px;
  height: 24px;
  margin:5px auto;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #7097f3;
  border-radius: 6px;
  border: 1px #d4d7d8b9 solid;
}

.rich-media-node {
  width: 100px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  background-color: #7bacda;
  border-radius: 4px;
  font-size: 16px;
}
</style>
