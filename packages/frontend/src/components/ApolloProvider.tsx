import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider as Provider } from '@apollo/client/react';
import type { FC, PropsWithChildren } from 'react';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'http://localhost:4000' }),
});

export const ApolloProvider: FC<PropsWithChildren> = ({ children }) => <Provider client={client}>{children}</Provider>;
