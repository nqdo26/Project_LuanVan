// Layouts
import { Layout } from 'antd';
import { DefaultLayout, AdminLayout, SearchResultLayout } from '~/components/Layouts';

// Pages
import AddTrip from '~/pages/AddTrip';
import Admin from '~/pages/Admin';
import AdminDestinationManage from '~/pages/AdminDestinationManage';
import AdminPlaceManage from '~/pages/AdminPlaceManage';
import AdminUserManage from '~/pages/AdminUserManage';
import DestinationDetails from '~/pages/DestinationDetails';
import Destinations from '~/pages/Destinations';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Place from '~/pages/Place';
import PlaceDetails from '~/pages/PlaceDetails';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';
import Search from '~/pages/Search';

// Public routes
const privateRoutes = [
    { path: '/', component: Home    },
   
];

const publicRoutes = [
    { path: '/', component: Home},
    { path: 'search', component: Search},

    { path: '/login', component: Login},
    { path: 'register', component: Register},
    { path: '/profile', component: Profile },
    { path: '/addtrip', component: AddTrip},

    { path: '/admin', component: Admin, layout: AdminLayout},
    { path: '/admin/users-manage', component: AdminUserManage, layout: AdminLayout},
    { path: '/admin/destinations-manage', component: AdminDestinationManage, layout: AdminLayout},
    { path: '/admin/places-manage', component: AdminPlaceManage, layout: AdminLayout},
    
    
    { path: '/destinations', component: Destinations},
    { path: '/destination/destinationId', component: DestinationDetails},
    { path: '/places', component: Place},
    { path: '/place/placeId', component: PlaceDetails},

];

export { publicRoutes, privateRoutes };
