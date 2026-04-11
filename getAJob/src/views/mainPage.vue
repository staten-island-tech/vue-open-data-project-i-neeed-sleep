<template>
<div class='container'>
  <div class="header">
    <h1>Job Posts</h1>
  </div>
  <div class="chart-container" v-if="loaded">
    <JobChart :chartInfo="classInfo" :chartLabels="classLabels"/>
  </div>
  <div class="chart-container" v-if="loaded">
    <JobChart2 :chartInfo="postData" :chartLabels="postLabels"/>
  </div>
    <InfoCard v-for="job in jobList" :key="job.civil_service_title" :job="job"></InfoCard>
</div>
</template>

<script setup>
import InfoCard from '@/components/infoCard.vue'
import JobChart from '@/components/jobChart.vue'
import JobChart2 from '@/components/jobChart2.vue'
import {ref, onMounted} from 'vue'

const jobList = ref([])

const classLabels = ref([])
const classInfo = ref([])

const postLabels = ref([])
const postData = ref([])

const loaded = ref(false)

async function getItem() {
  try{
    const response = await fetch('https://data.cityofnewyork.us/resource/kpav-sd4t.json')
    const fullList = await response.json()
    jobList.value = fullList.slice(0,100)
  }catch(error){
    console.log(error)
  }
}

function chartA(){
  const placeholder = ref([])
  jobList.value.forEach(job => {
    placeholder.value.push(job.title_classification)
  });
  const counts = placeholder.value.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  classLabels.value = Object.keys(counts)
  classInfo.value = Object.values(counts)
}

function chartB(){
  const placeholder = ref([])
  jobList.value.forEach(job => {
    placeholder.value.push(job.posting_type)
  });
  const counts = placeholder.value.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  postLabels.value = Object.keys(counts)
  postData.value = Object.values(counts)
}

onMounted(async ()=>{
  await getItem()
  await chartA()
  await chartB()
  loaded.value = true
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&family=Grenze+Gotisch:wght@100..900&display=swap');
h1{
  font-size: 6vw;
  font-family: "Grenze Gotisch", serif;
  color: #E6AF2E;
  text-align: center;
}
.header{
  width: 100vw;
  background-color: #362023;
  position: absolute;
  top: 0vw;
  left:0vw
}
.container{
  width: 100%;
  height:max-content;
  background-color: #BEB7A4;
  display: flex;
  flex-wrap: wrap;
  padding-top: 16vw;
  position: absolute;
  top:0%;
  justify-content: center;
}
.chart-container{
  width:30vw;
  height: 30vw;
  margin: 5%;
}
</style>