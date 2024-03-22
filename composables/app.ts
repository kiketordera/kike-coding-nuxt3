import type { Irepository } from './Irepository'
import { JSONRepository } from './jsonRepository'

enum Enviroments {
    PROD = 'production',
    STAG = 'staging',
    DEV = 'development',
    TEST = 'testing',

}

export class APP {
  // eslint-disable-next-line no-use-before-define
  private static instance: APP

  static enviroment = Enviroments.DEV

  static repository: Irepository = new JSONRepository()

  /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */

  /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
  public static getSingleton (): APP {
    if (!this.instance) {
      this.instance = new APP()
    }
    return this.instance
  }
}
