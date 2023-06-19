<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "ContactForm",
    data() {
        return {
            store,
            email: "",
            name: "",
            message: "",
            loading: false,
            success: false,
            errors: null,
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            this.success = false;
            this.errors = null;

            const data = {
                email: this.email,
                name: this.name,
                message: this.message
            };
            axios.post( `${this.store.baseUrl}/api/leads`, data).then(resp => {
                console.log(resp);
                if (resp.data.success) {
                    this.success = true;
                    this.email = "";
                    this.name = "";
                    this.message = "";
                } else {
                    this.errors = resp.data.errors;
                }
            }).catch(error => {

            }).finally(() => {
                this.loading = false;
            })
        }
    }
}
</script>

<template>
    <div class="my-5">

        <div v-if="success" class="alert alert-success">
            <p>Il tuo messaggio è stato inviato con successo!</p>
        </div>

        <div v-if="errors" class="alert alert-danger">
            <ul>
                <li v-for="(error, index) in errors" :key="index"> {{ error[0] }}</li>
            </ul>
        </div>

        <form @submit.prevent="sendForm()">
            <div class="row">

                <div class="col-6 my-3">
                    <label for="email">Email</label>
                    <input v-model="email" type="email" id="email" class="form-control" :class="{ 'is-invalid' : errors && errors.email }">
                    <div v-if="errors" class="invalid-feedback">{{ errors.email[0] }}</div>
                </div>

                <div class="col-6 my-3">
                    <label for="name">Nome</label>
                    <input v-model="name" type="text" id="name" class="form-control" :class="{ 'is-invalid' : errors && errors.name }">
                    <di v-if="errors" class="invalid-feedback">{{ errors.name[0] }}</di>
                </div>

                <div class="col-12 my-3">
                    <label for="message">Messagio</label>
                    <textarea v-model="message" id="message" rows="10" class="form-control"></textarea>
                </div>

            </div>
            <div v-if="loading">Invio in corso...</div>
            <button type="submit" class="btn btn-primary">Invia</button>
        </form>
    </div>
</template>

<style lang="scss"></style>