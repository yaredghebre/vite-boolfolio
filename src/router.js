import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import GalleryPage from "./pages/GalleryPage.vue";
import SingleProjectPage from "./pages/SingleProjectPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",      // percorso URL
            name: "home",        
            component: HomePage
        },
        {
            path: "/projects",      
            name: "projects",        
            component: ProjectsPage
        },
        {
            path: "/projects/:slug",        // per ordine, dopo l'oggetto "padre"  
            name: "single-project",        
            component: SingleProjectPage
        },
        {
            path: "/gallery",      
            name: "gallery",        
            component: GalleryPage
        }
    ],
});

export { router };