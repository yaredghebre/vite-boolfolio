<script>
import { store } from './store';
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get(`${store.baseUrl}/api/projects`).then(resp => {
        this.projects = resp.data.results;
      });
    }
  },
  components: { ProjectCard }
}

</script>

<template>
  <div class="container my-3">
    <h1>Lista dei progetti</h1>
    <div class="row row-cols-6 g-3">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>