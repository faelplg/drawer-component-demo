/*
 * List component class
 */
import {MDCList} from '@material/list';

export default class List {
  /*
   *
   * Constructor
   * @param: _key type String [Element key - class or id]
   * @global: component type MDCList [List from Material Design Components]
   *
   */
  constructor(_key) {
    this.component = new MDCList(document.querySelector(_key));
  }

  log() {
    /* eslint-disable no-console */
    console.log('---LIST COMPONENT---');
    /* eslint-enable no-console */
  }
}
