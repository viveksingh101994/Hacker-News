import App from './app';
import { routes } from './app.routing';
import { configuration } from './configuration';

const app = new App([routes], configuration.port);
app.listen();
