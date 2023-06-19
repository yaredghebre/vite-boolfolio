<script>
import ContactForm from '../components/ContactForm.vue';
export default {
    name: 'GalleryPage',
    components: {
        ContactForm
    }
}
</script>

<template>
    <div class="container my-3">
        <h1>Contattaci</h1>
        <div class="row">
            <ContactForm/>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>