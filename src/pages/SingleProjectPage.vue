<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SingleProjectPage',
    data() {
        return {
            store,
            project: null,
        }
    },
    methods: {
        getProjects() {
            const slug = this.$route.params.slug;
            axios.get(`${this.store.baseUrl}/api/projects/${slug}`).then((resp) => {
                console.log(resp);
                this.project = resp.data.results;
            });
        }
    },
    computed: {
        imgSrc() {
            if (!this.project.image) return "";
            if (this.project.image.startsWith('https://')) {
                return this.project.image;
            } else {
                return `${this.store.baseUrl}/storage/${this.project.image}`;
            }
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container my-5">
        <div class="card" v-if="project">
            <img class="card-img-top w-25" v-if="project.image" :src="imgSrc" :alt="project.title">
            <div class="card-body" v-else>
                <h2 class="card-title">{{ project.title }}</h2>
                <p class="d-flex justify-content-center mt-2 text-secondary">Immagine non disponibile</p>
                <div class="tag my-4">
                    <span v-for="(technology, index) in project.technologies">#{{ technology.name }} {{ index ===
                        project.technologies.length - 1 ? '' : '/ ' }}</span>
                </div>
                <p class="card-text">{{ project.description }}</p>
            </div>
        </div>
        <router-link :to="{ name: 'projects' }" class="btn btn-success mt-3">Torna ai Progetti</router-link>

    </div>
</template>

<style scoped lang="scss"></style>