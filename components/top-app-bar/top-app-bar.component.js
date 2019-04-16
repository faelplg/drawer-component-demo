/*
 * Top app bar component class
 */
import {MDCTopAppBar} from '@material/top-app-bar';

export default class TopAppBar {
  /*
   *
   * Constructor
   * @param: _key type String [Element key - class or id]
   * @global: component type MDCTopAppBar [Top app bar from Material Design Components]
   *
   */
  constructor(_key) {
    this.component = MDCTopAppBar.attachTo(document.querySelector(_key));
  }

  log() {
    /* eslint-disable no-console */
    console.log('---TOP APP BAR COMPONENT---');
    /* eslint-enable no-console */
  }
}