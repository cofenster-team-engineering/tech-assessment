import { Global } from '@emotion/react';
import type { FC } from 'react';

export const GlobalStyles: FC = () => (
  <Global
    styles={{
      html: {
        fontSize: 14,
      },
      body: {
        padding: 0,
        margin: 0,
        backgroundColor: 'rgb(245, 238, 234)',
        fontFamily: 'Verdana',
      },
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
    }}
  />
);
