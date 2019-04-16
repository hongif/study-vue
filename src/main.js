import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld'
import User from './components/User'
import UserProfile from './components/UserProfile'
import UserPosts from './components/UserPosts'

Vue.use(VueRouter);

Vue.config.productionTip = false;
const routes = [
  { path: '',
    component: App,
    children: [
      {
        path: '',
        component: HelloWorld
      }
    ]
  },
  { path: '/user/:id',
    component: User,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        component: UserProfile
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'posts',
        component: UserPosts
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
