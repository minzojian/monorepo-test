// import { Test } from "@monorepo/utils"
import { Test } from "../../utils"
export class MyTest extends Test
{
  constructor()
  {
    super()
    this.test();
  }
}

new MyTest();