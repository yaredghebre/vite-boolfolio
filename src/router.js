import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import GalleryPage from "./pages/GalleryPage.vue";



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
            path: "/gallery",      
            name: "gallery",        
            component: GalleryPage
        }
    ],
});

export { router };