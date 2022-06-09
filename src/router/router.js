import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../components/HomePage.vue'),
        },
        {
            path: '/BusinessVerticals',
            name: 'Business Verticals',
            component: () => import('../components/BusinessVerticals.vue'),
            children: [
                {
                    path: '/Verticals/ApplicationDevelopment',
                    name: 'Application Development',
                    component: () => import('../components/Verticals/ApplicationDevelopment.vue'),
                },
                {
                    path: '/Verticals/ITInfrastructure',
                    name: 'IT Infrastructure',
                    component: () => import('../components/Verticals/ITInfrastructure.vue'),
                },
              ]
        },
        {
            path: '/TechnologiesOffered',
            name: 'TechnologiesOffered',
            component: () => import('../components/TechnologiesOffered.vue'),
        },
        {
            path: '/CareerOpportunities',
            name: 'Careers',
            component: () => import('../components/CareerOpportunities.vue'),
        },
        {
            path: '/ContactUs',
            name: 'ContactUs',
            component: () => import('../components/ContactUs.vue'),
        },
    ]
});

export default router;