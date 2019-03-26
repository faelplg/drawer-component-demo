// Import application style
import './theme/theme.scss';

// Import components
import './components/components';

import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCDrawer} from "@material/drawer";
import {MDCTabBar} from '@material/tab-bar';
 
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('main__top-app-bar'));
topAppBar.setScrollTarget(document.getElementById('main__container'));

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const test = document.getElementById('showroom__box');
console.log('Testing', test);