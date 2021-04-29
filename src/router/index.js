import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/index.vue";
import NavBar from "../components/NavBar.vue";

const routes = [{
    path: "/",
    redirect: "/navbar",
    component: Layout,
    children: [{
        path: "navbar",
        name: "navbar",
        component: NavBar
    }, ],
}, ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;