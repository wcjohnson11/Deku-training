import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';
import App from '../lib';

let app = deku(<div style="display:block;text-align:center;">
  <App>
  </App>
</div>);

render(app, document.querySelector('main'));
