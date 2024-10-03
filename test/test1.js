import _totle from "./c.eft";
import _subtotle from "./b.eft";
import _item from "./a.eft";
class subTotle extends _totle {
  constructor() {
    super();
    const subtotle = new _subtotle();
    subtotle.list.push(new _item());
    this.list = subtotle;
  }
}
new subTotle().$mount({ target: document.body });
