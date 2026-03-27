<template>
<div class='container'>
  <div class="header">
    <h1>Job Posts</h1>
  </div>
    <JobChart :chartInfo="classInfo" :chartLabels="classLabels"/>
    <InfoCard v-for="job in jobList" :key="job.civil_service_title" :job="job"></InfoCard>
</div>
</template>

<script setup>
import InfoCard from '@/components/infoCard.vue'
import JobChart from '@/components/jobChart.vue'
import {ref, onMounted} from 'vue'

const jobList = ref([])

const classLabels = ref([])
const classInfo = ref([])

const jobComp = ref([])
const compLabels = ref([])
const compData = ref([])


async function getItem() {
  try{
    const response = await fetch('https://data.cityofnewyork.us/resource/kpav-sd4t.json')
    jobList.value = await response.json()
  }catch(error){
    console.log(error)
  }
}

async function chartA(){
  jobList.value.forEach(job => {
    if(job.title_classification){
      classLabels.value.push(job.title_classification);
    }
  // if(jobClass.include(job.title_classification)===true){
  //   classInfo.value[]
  // }
  });
}


// function chartB(){
//   jobsList.forEach(job => {
//     if(job.title_classification && jobClass.include(job.title_classification)===false){
//         jobClass.value.push({ [job.title_classification] : 1});
//     }
//     if(job.title_classification && jobClass.include(job.title_classification)===true){
//         jobClass.value[job.title_classification]++
//     }
//   });
// }

onMounted(()=>{
  getItem()
  chartA()
  console.log(classLabels.value)
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
</style>