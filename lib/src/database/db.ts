import * as mongoose from 'mongoose';
import { configuration } from '../configuration';

export class DB {
  public static async init() {
    const connectionUri = configuration.dbConnectionString;
    try {
      await mongoose.connect(connectionUri, {
        useNewUrlParser: true
      });
      // tslint:disable-next-line:no-console
      console.log('Database Connected =>', connectionUri);
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log('Connection Error=>', err);
      process.exit(1);
    }
  }
}
