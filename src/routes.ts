import { IRouterConfig } from 'ice';
import Home from '@/pages/Home';
import About from '@/pages/About';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];
export default routerConfig;
