/** Import application theme */
import './theme/theme.scss';

/** Import components */
import './components/components.scss';
import Drawer from './components/drawer/drawer.component';
import TopAppBar from './components/top-app-bar/top-app-bar.component';

import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCTabBar} from '@material/tab-bar';
 
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

const topAppBar = new TopAppBar('main__top-app-bar');
topAppBar.component.setScrollTarget(document.getElementById('main__container'));

const drawer = new Drawer('.mdc-drawer');

topAppBar.component.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const test = document.getElementById('showroom__box');
console.log('Testing', test);