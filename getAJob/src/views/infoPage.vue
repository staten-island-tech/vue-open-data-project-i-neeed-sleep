<template>
<router-link to='/'>
  <button>Back to List</button>
</router-link>
    <div>
      <h1>{{ job.civil_service_title }}</h1>
      <h2>Disclaimer: any typos are not my fault, it's the API's</h2>
      <h2>Work Details</h2>
      <p>Salary Range: ${{ job.salary_range_from }}-${{ job.salary_range_to }}</p>
      <p>Salary Frequency: {{ job.salary_frequency }}</p>
      <p>Location: {{ job.work_location }}</p>
      <p>Agency: {{ job.agency }}</p>
      <p>Number of Positions: {{ job.number_of_positions }}</p>
      <p>Job Open Until: {{ job.post_until }}</p>
      <h2>Hire</h2>
      <p>Minimum Requirement: {{ job.minimum_qual_requirements }}</p>
      <p>Residency Requirement: {{ job.residency_requirement }}</p>
      <p>Preferred Skills: {{ job.preferred_skills }}</p>
      <h2>Description</h2>
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
h2{
  font-size: 3vw;
  padding-left: 2vw;
}
p{
  font-size: 2vw;
  padding-left: 2vw;
}
div {
  width: 100%;
  height: 100%;
  background-color: #BEB7A4;
}
</style>