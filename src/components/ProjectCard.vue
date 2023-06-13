<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object
  },
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
    }
  }
}
</script>

<template>
  <div class="card">
    <img class="card-img-top" v-if="project.image" :src="`${baseUrl}/storage/${project.image}`" :alt="project.title">
    <div v-else>
      <span>Image not available</span>
    </div>
    <div class="card-body">
      <h5>{{ project.title }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
