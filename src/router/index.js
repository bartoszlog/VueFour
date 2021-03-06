import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import RobotBuilder from '../components/RobotBuilder.vue';
import PartInfo from '../components/PartInfo.vue';
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    }, {
        path: '/build',
        name: 'Build',
        component: RobotBuilder
    }, {
        path: '/parts',
        name: 'Parts',
        component: PartInfo
    }]
});
