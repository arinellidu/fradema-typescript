import { _tours } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { filiaisTourView } from 'src/sections/_filiais/view/filiais-tour-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Tour details | filiais - ${CONFIG.appName}` };

export default function Page() {
  return <filiaisTourView tour={_tours[0]} relatedTours={_tours.slice(-4)} />;
}
