import { Test } from "@monorepo/utils"
export class MyTest extends Test
{
  constructor()
  {
    super()
    this.test();
  }
}

new MyTest();