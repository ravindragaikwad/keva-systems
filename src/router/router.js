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
                // {
                //     path: '/Verticals/WebDesignSupport',
                //     name: 'Web Design Support',
                //     component: () => import('../components/Verticals/WebDesignSupport.vue'),
                // },
                // {
                //     path: '/Verticals/ConsultingServices',
                //     name: 'Consulting Services',
                //     component: () => import('../components/Verticals/ConsultingServices.vue'),
                // },
                // {
                //     path: '/Verticals/PayrollHR',
                //     name: 'Payroll HR',
                //     component: () => import('../components/Verticals/PayrollHR.vue'),
                // },
                // {
                //     path: '/Verticals/StaffingServices',
                //     name: 'Staffing Services',
                //     component: () => import('../components/Verticals/StaffingServices.vue'),
                // },
              ]
        },
        {
            path: '/TechnologiesOffered',
            name: 'TechnologiesOffered',
            component: () => import('../components/TechnologiesOffered.vue'),
        },
      
    ]
});

export default router;