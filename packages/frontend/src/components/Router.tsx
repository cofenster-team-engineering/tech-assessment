import { createContext, type FC, type PropsWithChildren } from 'react';

export type RouterContextValue = {
  currentPage: string | null;
  navigateTo: (route: string) => void;
};

export const RouterContext = createContext<RouterContextValue>({ currentPage: null, navigateTo: () => null });

export const useCurrentRoute = () => {
  // To be implemented
  return 'current route';
};

export const useNavigateTo = () => {
  // To be implemented
  return (route:string) => console.log(`Navigate to ${route}`);
};

export const Router: FC<PropsWithChildren> = ({ children }) => {
  // To be implemented

  return children;
};

export const Route: FC<PropsWithChildren<{ route: string }>> = ({ route, children }) => {
  // To be implemented

  return <p>Route not implemented ({route})</p>;
};

export const RouterLink: FC<PropsWithChildren<{ route: string }>> = ({ route, children }) => {
  // To be implemented

  return <a href={route}>{children}</a>;
};
