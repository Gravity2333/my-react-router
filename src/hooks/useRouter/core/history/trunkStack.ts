/** 定义新的数据结构 Truncate Stack
 * Truncate.pop 会返回当前的值，但是并不会真的将数据弹出
 * Truncate.push 插入值时，会截断(Truncate)后面的内容
 * Truncate.replace 替换当前项目
 */

interface ITruncateStack<T> {
  pop: (delta?: number) => T | undefined;
  push: (i: T) => void;
  replace: (i: T) => void;
  length: number;
  current: T;
  pointerIndex: number,
  go: (delta: number) => void;
}

export default class TruncateStack<T> implements ITruncateStack<T> {
  // 定义列表
  private list: T[] = [];
  // 定义指针
  private pointer: number = 0;
  constructor(initItem: T){
    this.list.push(initItem)
  }
  // pop函数
  public pop(delta: number = -1) {
    this.pointer += delta;
    if (this.pointer < 0) {
      this.pointer = 0;
    }
    if (this.list?.length === 0) {
      this.pointer = 0;
    } else if (this.pointer > this.list?.length - 1) {
      this.pointer = this.list?.length - 1;
    }
    return this.list[this.pointer];
  }
  // push函数
  public push(i: T) {
    // 去掉 pointer后面的项目
    if (this.pointer === 0 && this.list.length === 0) {
      this.list.push(i);
    } else {
      this.list = this.list.slice(0, ++this.pointer);
      this.list.push(i);
    }
  }

  public replace(i: T) {
    if (this.list?.length === 0) {
      this.list.push(i);
    } else {
      this.list.splice(this.pointer, 1, i);
    }
  }

  public get length() {
    return this.list.length;
  }

  public get current() {
    return this.list[this.pointer];
  }

  public get pointerIndex(){
    return this.pointer
  }

  public go(delta: number) {
    const targetIndex = (this.pointer += delta);
    if (targetIndex <= 0) {
      return (this.pointer = 0);
    }

    if (targetIndex >= this.length) {
      return this.pointer = this.length > 0 ? this.length - 1 : 0;
    }

    return this.pointer = targetIndex
  }
}
