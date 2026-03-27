<template>
<router-link to='/'>
  <button>Back to List</button>
</router-link>
    <div>
        <h1>{{ job.civil_service_title }}</h1>
        <p>{{ job.job_description }}</p>
        
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
    const data = await response.json()
    job.value = data[0]
  }catch(error){
    console.log(error)
  }
}
onMounted(()=>{
    getItem(route.params.job_id)
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
  font-size: 5vw;
  padding-left: 2vw;
}
p{
  font-size: 2vw;
  padding: 2vw;
}
div {
  width: 100%;
  height: 100%;
  background-color: #BEB7A4;
}
</style>