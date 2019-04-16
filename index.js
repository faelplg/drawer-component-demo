/** Import application theme. */
import './theme/theme.scss';

/** Import components. */
import Drawer from './components/drawer/drawer.component';
import List from './components/list/list.component';
import TopAppBar from './components/top-app-bar/top-app-bar.component';
import TabBar from './components/tab-bar/tab-bar.component';

/** Instance Tab Bar. */
const example_tab_bar = new TabBar('.mdc-tab-bar');
example_tab_bar.component.focusOnActivate = false;
/** Listen when a tab panel has to change. */
example_tab_bar.component.listen('MDCTabBar:activated', e => {
  console.log(`Tab Bar event on ${example_tab_bar}: ${e.type}`);
  this.updatePanel(e.detail.index);
});

/** Instance Top App Bar. */
const example_top_app_bar = new TopAppBar('#example-top-app-bar__component');
example_top_app_bar.component.setScrollTarget(document.getElementById('example-page__content'));

/** Instance Drawer. */
const drawer = new Drawer('#example-drawer__component');

/** Toggle Drawer from Top App Bar navigation button. */
example_top_app_bar.component.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

/** Instance list. */
const list = new List('#example-list__component');

/** Store element with tab panels. */
const panels = document.querySelector('.panels');

/**
 * Update visible panel after changing tab.
 * @param {number} index - Index of clicked tab.
 */
this.updatePanel = index => {
  const activePanel = panels.querySelector('.panel.active');
  if (activePanel) {
    activePanel.classList.remove('active');
  }
  const newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
  if (newActivePanel) {
    newActivePanel.classList.add('active');
  }
};