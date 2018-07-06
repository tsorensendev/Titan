// Import pages here
import LandingPage from '../views/LandingPage';
import Test from '../Components/Test';

// Add routes to array
const indexRoutes = [
  { path: '/landing', name: 'LandingPage', component: LandingPage },
  { path: '/test', name: 'Test', component: Test },
];

export default indexRoutes;
