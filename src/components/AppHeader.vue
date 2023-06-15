<script>
export default {
    name: "AppHeader",
    data() {
        return {
            navLinks: [
                {
                    label: "Home",
                    route: "home",
                },
                {
                    label: "Projects",
                    route: "projects",
                },
                {
                    label: "Gallery",
                    route: "gallery",
                },
            ]
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">BoolFolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="link in navLinks">
                        <router-link :to="{ name: link.route }" class="nav-link active" aria-current="page">{{ link.label }}</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>