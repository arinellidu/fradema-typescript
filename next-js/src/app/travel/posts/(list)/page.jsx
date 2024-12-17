import { CONFIG } from 'src/config-global';

import { filiaisPostsView } from 'src/sections/_filiais/view/filiais-posts-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post list | filiais - ${CONFIG.appName}` };

export default function Page() {
  return <filiaisPostsView />;
}
