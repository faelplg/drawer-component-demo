/*
 * Drawer component class
 */
import {MDCDrawer} from '@material/drawer';

export default class Drawer {
  /*
   *
   * Constructor
   * @param: _key type String [Element key - class or id]
   * @global: component type MDCDrawer [Drawer from Material Design Components]
   *
   */
  constructor(_key) {
    this.component = MDCDrawer.attachTo(document.querySelector(_key));
  }

  get open() {
    return this.component.open;
  }
  set open(_open) {
    this.component.open = _open;
  }

  log() {
    /* eslint-disable no-console */
    console.log('---DRAWER COMPONENT---');
    /* eslint-enable no-console */
  }
}
