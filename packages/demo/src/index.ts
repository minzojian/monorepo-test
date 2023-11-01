import { Test } from "@monorepo/tslib"
export class MyTest extends Test
{
  constructor()
  {
    super()
    this.test();
  }
}

new MyTest();