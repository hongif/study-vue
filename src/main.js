import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Main from './components/Main.vue';
import Stay from './components/Stay.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '',
            name: 'home',
            component: Main
        },
        {
            path: '/stay/:goodsno',
            name: 'stay',
            component: Stay
        },

    ],
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
