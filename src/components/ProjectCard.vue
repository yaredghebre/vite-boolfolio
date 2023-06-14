<script>
import { store } from '../store';

export default {
  name: 'ProjectCard',
  props: {
    project: Object
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="card">
    <img class="card-img-top" v-if="project.image" :src="`${store.baseUrl}/storage/${project.image}`" :alt="project.title">
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
