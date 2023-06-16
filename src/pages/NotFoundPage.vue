<script>
export default {
    name: "NotFoundPage",
    methods: {
        goBack() {
            console.log(this.$router);
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center my-5">La pagina che stai cercando non esiste!</h2>
        <div>
            <router-link :to="{ name: 'home' }" class="btn btn-success">Go home</router-link>
            <a @click.prevent="goBack" class="btn btn-warning" href="">Go back</a>
        </div>
    </div>
</template>