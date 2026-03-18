<template>
    <div>
        <h1>{{ job.name }}</h1>
        
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const job = ref({})


async function getItem(id) {
  try{
    const response = await fetch(`https://data.cityofnewyork.us/resource/kpav-sd4t.json`)
    const data = await response.json()
    job.value = data.filter(job => job.job_id == id)
  }catch(error){
    console.log(error)
  }
}
onMounted(function(){
    getItem(id)
})
watch(
    function (){
        getItem(id)
    },
)
</script>

<style scoped>
h1{
  background-color: #362023;
  color: #E6AF2E;
}
</style>