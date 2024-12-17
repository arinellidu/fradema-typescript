import { CONFIG } from 'src/config-global';

import { filiaisPostView } from 'src/sections/_filiais/view/filiais-post-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post details | filiais - ${CONFIG.appName}` };

export default function Page() {
  return <filiaisPostView />;
}
