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
    const response = await fetch(`https://data.cityofnewyork.us/resource/kpav-sd4t.json?job_id=${id}`)
    job.value = await response.json()
  }catch(error){
    console.log(error)
  }
}
onMounted(()=>{
    getItem(route.params.id)
})
watch(
  ()=> route.params.job_id,
  function (id){
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