import { CONFIG } from 'src/config-global';

import { filiaisAboutView } from 'src/sections/_filiais/view/filiais-about-view';

// ----------------------------------------------------------------------

export const metadata = { title: `About us | filiais - ${CONFIG.appName}` };

export default function Page() {
  return <filiaisAboutView />;
}
