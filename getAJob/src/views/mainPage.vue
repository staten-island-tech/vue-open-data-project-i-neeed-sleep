<template>
<div class='container'>
  <div class="header">
      <h1>Job Posts</h1>
  </div>
    <InfoCard v-for="job in jobs" :key="job.civil_service_title" :job="job"></InfoCard>
</div>
</template>

<script setup>
import InfoCard from '@/components/infoCard.vue'
import {ref, onMounted} from 'vue'

const jobs = ref([])

async function getItem() {
  try{
    const response = await fetch('https://data.cityofnewyork.us/resource/kpav-sd4t.json')
    jobs.value = await response.json()
  }catch(error){
    console.log(error)
  }
}
onMounted(()=>{
  getItem()
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
  padding:3%;
  padding-top: 15vw;
  position: absolute;
  top:0%;
  justify-content: center;
}
</style>