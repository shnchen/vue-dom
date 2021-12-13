import Home from '../pages/home.vue';
import Table from '../pages/table.vue';
import Waterfall from '../pages/waterfall.vue';
import FengMap from '../pages/fengMap.vue';
const routes = [
    {
        path:'/home',
        name:'home',
        component:Home
    },
    {
        path:'/table',
        name:'table',
        component:Table
    },
    {
        path:'/waterfall',
        component:Waterfall
    },
    {
        path:'/feng-map',
        component:FengMap
    }
]
export default routes;