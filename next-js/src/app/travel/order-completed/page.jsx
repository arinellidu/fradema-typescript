import { _tours } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { filiaisOrderCompletedView } from 'src/sections/_filiais/view/filiais-order-completed-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Order completed | filiais - ${CONFIG.appName}` };

export default function Page() {
  return <filiaisOrderCompletedView tour={_tours[8]} />;
}
