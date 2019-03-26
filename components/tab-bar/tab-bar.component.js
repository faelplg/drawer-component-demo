/*
 * Tab bar component class
 */
import {MDCTabBar} from '@material/tab-bar';

export default class TabBar {
  /*
   *
   * Constructor
   * @param: _key type String [Element key - class or id]
   * @global: component type MDCTabBar [Tab bar from Material Design Components]
   *
   */
  constructor(_key) {
    this.component = new MDCTabBar(document.querySelector(_key));
  }

  log() {
    /* eslint-disable no-console */
    console.log('---TAB BAR COMPONENT---');
    /* eslint-enable no-console */
  }
}