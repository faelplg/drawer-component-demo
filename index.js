/** Import application theme */
import './theme/theme.scss';

/** Import components */
import Drawer from './components/drawer/drawer.component';
import List from './components/list/list.component';
import TopAppBar from './components/top-app-bar/top-app-bar.component';
import TabBar from './components/tab-bar/tab-bar.component';

const tabBar = new TabBar('.mdc-tab-bar');
tabBar.component.focusOnActivate = false;
tabBar.component.listen('MDCTabBar:activated', sig => {
  console.log('Tab Bar event', sig);
  updatePanel(sig.detail.index);
});

const topAppBar = new TopAppBar('main__top-app-bar');
topAppBar.component.setScrollTarget(document.getElementById('main__container'));

const drawer = new Drawer('#main__drawer');
// const exampleDrawer = new Drawer('#example__drawer');

topAppBar.component.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const list = new List('.mdc-list');
const exampleList = new List('#example__list');

const panels = document.querySelector('.panels');

function updatePanel(index) {
  const activePanel = panels.querySelector('.panel.active');
  if (activePanel) {
    activePanel.classList.remove('active');
  }
  const newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
  if (newActivePanel) {
    newActivePanel.classList.add('active');
  }
}

const test = document.getElementById('showroom__box');
console.log('Testing', test);