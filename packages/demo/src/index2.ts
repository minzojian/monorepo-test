import { Test2 } from "@monorepo/jslib"
export class MyTest2 extends Test2
{
  constructor()
  {
    super()
    this.test2();
  }
}

new MyTest2();