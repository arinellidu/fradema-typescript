import { _tours } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { filiaisToursView } from 'src/sections/_filiais/view/filiais-tours-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Tour list | filiais - ${CONFIG.appName}` };

export default function Page() {
  return <filiaisToursView tours={_tours} />;
}
