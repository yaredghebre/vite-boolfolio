import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
// import GalleryPage from "./pages/GalleryPage.vue"; // quando si usa lazy loading, togliere l'import relativo alla pagina
import SingleProjectPage from "./pages/SingleProjectPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";


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
            // esempio for LAZY LOADING
            path: "/gallery",      
            name: "gallery",        
            component: () => import("./pages/GalleryPage.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFoundPage,
          },
    ],
});

export { router };