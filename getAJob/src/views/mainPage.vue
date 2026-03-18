<template>
    <div class='container'>
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
.container{
  width: 100%;
  height: 100%;
  background-color: #BEB7A4;
  display: flexbox;
  padding:3%;
}
</style>