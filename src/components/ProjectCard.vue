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
  },
  computed: {
    descriptionPreview() {
      if (!this.project.description) {
        return "Nessuna descrizione"
      } else if (this.project.description.length > 150) {
        return this.project.description.substring(0, 150) + "...";
      } else {
        return this.project.description
      }
    },
    imgSrc() {
      if (!this.project.image) return "";
      if (this.project.image.startsWith('https://')) {
        return this.project.image;
      } else {
        return `${this.store.baseUrl}/storage/${this.project.image}`;
      }
    }
  }
}
</script>

<template>
  <div class="card h-100">
    <img class="card-img-top" v-if="project.image" :src="imgSrc" :alt="project.title">
    <div v-else>
      <span>Image not available</span>
    </div>
    <div class="card-body">
      <h5>{{ project.title }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
