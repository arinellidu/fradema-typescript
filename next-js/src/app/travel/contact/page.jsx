import { CONFIG } from 'src/config-global';

import { filiaisContactView } from 'src/sections/_filiais/view/filiais-contact-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Contact us | filiais - ${CONFIG.appName}` };

export default function Page() {
  return <filiaisContactView />;
}
