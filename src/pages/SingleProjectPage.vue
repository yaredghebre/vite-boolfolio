<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SingleProjectPage',
    data() {
        return {
            store,
            project: null,
            errorMsg: false
        }
    },
    methods: {
        getProjects() {
            const slug = this.$route.params.slug;
            axios.get(`${this.store.baseUrl}/api/projects/${slug}`).then((resp) => {
                console.log(resp);
                this.project = resp.data.results;
            },
                error => {
                    // console.log(error);
                    if (error.response.status === 404) {
                        this.$router.push({ name: "not-found" })
                    } else {
                        this.errorMsg = "Ops, qualcosa è andato storto :(";
                    }
                });
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
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
            <div class="card-body">
                <h2 class="card-title">{{ project.title }}</h2>
                <p class="d-flex justify-content-center mt-2 text-secondary"></p>
                <h6 v-if="!project.image">img not</h6>
                <div class="tag my-4">
                    <span v-for="(technology, index) in project.technologies">#{{ technology.name }} {{ index ===
                        project.technologies.length - 1 ? '' : '/ ' }}</span>
                </div>
                <p class="card-text">{{ project.description }}</p>
            </div>
        </div>

        <div v-else-if="errorMsg">
            <h2 class="text-danger">PAGINA INESISTENTE :(</h2>
            <a @click.prevent="goBack()" class="btn btn-warning" href="">Back</a>

        </div>
        <router-link :to="{ name: 'projects' }" class="btn btn-success mt-3">Torna ai Progetti</router-link>

    </div>
</template>

<style scoped lang="scss"></style>