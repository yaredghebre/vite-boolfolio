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
      <span class="d-flex justify-content-center mt-2 text-secondary">Image not available</span>
    </div>
    <div class="card-body">
      <h3>{{ project.title }}</h3>
      <div>
        <h4 class="text-danger" v-if="project.type">{{ project.type.name }}</h4>
        <h4 class="text-danger" v-else>Nessuna tipologia</h4>
      </div>
      <div>
        <h5 class="text-success" v-if="project.technologies.length > 0">
          {{ project.technologies.map(technology => technology.name).join(', ') }}
        </h5>
        <h5 class="text-success" v-else>Nessuna tecnologia</h5>
      </div>
      <p>{{ descriptionPreview }}</p>

      <!-- Link per SingleProjectPage -->
      <router-link :to='{ name:"single-project", params: { slug:project.slug } }' class="btn btn-primary">Dettagli</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
