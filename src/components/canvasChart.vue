<template>
  <div class="container">
    <div class="left" id="org-chart-container"></div>
    <div class="right">
      <button @click="zoomOut" class="el_button">+</button>
      <button @click="zoomIn" class="el_button">-</button>
      <button @click="restoreScale" class="el_button">重置</button>
    </div>
      <!-- <div>
        <el-button @click="bigger()">+</el-button>
        <el-button @click="smaller()">-</el-button>
      </div> -->

      <!-- <v-card>
        <v-card-title>
          <div slot="header" class="action-title">
            <span>Support actions</span>
          </div>
          <div
            v-for="action in supportActions"
            :key="action"
            class="action-item"
          >
            {{ '* ' + action }}
          </div>
        </v-card-title>
      </v-card> -->
  </div>
</template>

<script>
import OrgChart from './org-chart'
// import { generateOrgChartData, Data } from './data-generator'
import axios from 'axios';  

export default{
  data() {
    return {
      richMediaData: null,
      orgChart: null,
    }
  },
  async created() {
    try {  
      const response = await axios.get('./data.json');  
      this.richMediaData = response.data;
      // console.log(response.data)
      this.orgChart = new OrgChart();
      this.orgChart.draw(this.richMediaData);
    } catch (error) {  
      console.error('Error fetching data:', error);  
    } 
  },
  mounted() {
    
  },
  methods: {
    zoomOut() {
      this.orgChart.bigger()
    },
    zoomIn() {
      this.orgChart.smaller()
    },
    restoreScale() {
      this.orgChart.smaller()
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
}


.left{
  display: flex;
  width: 95vw;
}

.right{
  display: flex;
  flex-direction: column;
  align-items: center;
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

</style>
