import { CONFIG } from 'src/config-global';

import { filiaisLandingView } from 'src/sections/_filiais/view/filiais-landing-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Home | filiais - ${CONFIG.appName}` };

export default function Page() {
  return <filiaisLandingView />;
}
