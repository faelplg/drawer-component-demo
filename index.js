/** Import application theme */
import './theme/theme.scss';

/** Import components */
import Drawer from './components/drawer/drawer.component';
import List from './components/list/list.component';
import TopAppBar from './components/top-app-bar/top-app-bar.component';
import TabBar from './components/tab-bar/tab-bar.component';

const tabBar = new TabBar('.mdc-tab-bar');
tabBar.component.focusOnActivate = false;

const topAppBar = new TopAppBar('main__top-app-bar');
topAppBar.component.setScrollTarget(document.getElementById('main__container'));

const drawer = new Drawer('.mdc-drawer');

topAppBar.component.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const list = new List('.mdc-list');

const test = document.getElementById('showroom__box');
console.log('Testing', test);