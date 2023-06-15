<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SingleProjectPage',
    data() {
        return {
            store
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
    mounted() {
        this.getProjects();
    }

    // mounted() {
    //     const slug = this.$route.params.slug;
    //     axios.get(`${this.store.baseUrl}/api/projects/${slug}`).then((resp) => {
    //         console.log(resp);
    //         this.post = resp.data.results
    //     })
    // }
}
</script>

<template>
    <div class="container my-3">
        <h1>Progetto singolo</h1>
    </div>
</template>

<style scoped lang="scss"></style>