import type { FC } from 'react';

import { Page } from '../components/Page';
import { RouterLink } from '../components/Router';

export const Home: FC = () => {
  return (
    <Page>
      <h1>Well done!</h1>

      <RouterLink route="/projects">Go to Projects page</RouterLink>
    </Page>
  );
};
