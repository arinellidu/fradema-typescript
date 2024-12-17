import { _tours } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { filiaisCheckoutView } from 'src/sections/_filiais/view/filiais-checkout-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Checkout | filiais - ${CONFIG.appName}` };

export default function Page() {
  return <filiaisCheckoutView tour={_tours[0]} />;
}
