import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'


import App from './App.vue'
import pagone from '../src/components/pagone.vue'
import pagtwo from '../src/components/pagtwo.vue'
import pagthree from '../src/components/pagthree.vue'

import './assets/main.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/pagone', component: pagone},
        { path: '/pagtwo', component: pagtwo},
        { path: '/pagthree', component: pagthree}
    ]

})

const app = createApp(App)
app.use(router)
app.mount('#app')
