<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
import Pagination from '../components/Pagination.vue';

export default {
    name: 'ProjectsPage',
    data() {
        return {
            projects: [],
            store,
            currentPage: 1,
            lastPage: null,
            totalProjects: 0,
            loading: false,
            types: [],
            selectedType: []
        };
    },
    components: {
        ProjectCard,
        Pagination
    },
    mounted() {
        this.getProjects();
        this.getTypes();
    },
    methods: {
        getTypes() {
            axios.get(`${store.baseUrl}/api/projects`).then((resp) => {
                console.log(resp);
                this.categories = resp.data.results;
            })
        },

        getProjects(pageNumber = 1) {
            this.loading = true;

            const params = {
                page: pageNumber,
            }

            if (this.selectedType !=="All") {
                params.type_id = this.selectedType;
            }

            axios.get(`${store.baseUrl}/api/projects`, { params }).then(resp => {
                this.projects = resp.data.results.data;
                console.log(this.projects);
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
            }).finally(() => {
                this.loading = false;
            });
        },
    },
}
</script>

<template>
    <div class="container my-3">

        <section v-if="loading === false">
            <h1>Lista dei progetti</h1>

            <!-- Filters -->
            <div class="">
                <h6>Filtri</h6>
                <label for="type"></label>
                <select v-model="selectedType" class="form-select" name="" id="type" @change="getProjects()">
                    <option value="All">-</option>
                    <option :value="types.id" v-for="type in types" :key="type.id"> {{ type.name }} </option>
                </select>
            </div>

            <!-- Cards -->
            <div class="text-end text-primary">
                <p class="my-3">Progetti totali: {{ totalProjects }}</p>
            </div>
            <div class="row row-cols-5 g-3">
                <div class="col" v-for="project in projects" :key="project.id">
                    <ProjectCard :project="project" />
                </div>
            </div>
            <Pagination :currentPage="currentPage" :lastPage="lastPage" @changePage="getProjects" />
        </section>

        <section v-else>
            <h1 class="text-center my-5">Caricamento...</h1>
        </section>

    </div>
</template>

<style scoped lang="scss"></style>