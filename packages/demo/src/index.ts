import { Test } from "@monorepo/tslib"
 class MyTest extends Test
{
  constructor()
  {
    super()
    this.test();
  }
}


new MyTest();

