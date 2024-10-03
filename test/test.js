class father {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add() {
    return (this.x + this.y);
  }
}
class son extends father {
  constructor(x, y) {
    super(x, y);
  }
  sum() {
    console.log(super.add());
  }
}
const s = new son(1, 2);
s.sum();
//生成实例，传入（1，2），然后super调用父类的构造函数，传入（1，2），父类为super.x和super.y赋值
// （子类函数中super就是父类的实例，但是要使用父类的的含参函数需要在构造函数中传入参数）
// 即const father=new father(x,y);
// super(x,y)=new father(x,y);super=father;