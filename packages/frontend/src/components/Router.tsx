import { createContext, type FC, type PropsWithChildren } from 'react';

export type RouterContextValue = {
  currentPath: string | null;
  navigateTo: (route: string) => void;
};

export const RouterContext = createContext<RouterContextValue>({ currentPath: null, navigateTo: () => null });

export const useCurrentPath = () => {
  // To be implemented
  return 'current path';
};

export const useNavigateTo = () => {
  // To be implemented
  return (path:string) => console.log(`Navigate to ${path}`);
};

export const Router: FC<PropsWithChildren> = ({ children }) => {
  // To be implemented

  return children;
};

export const Route: FC<PropsWithChildren<{ path: string }>> = ({ path, children }) => {
  // To be implemented

  return <p>Route not implemented ({path})</p>;
};

export const RouterLink: FC<PropsWithChildren<{ path: string }>> = ({ path, children }) => {
  // To be implemented

  return <a href={path}>{children}</a>;
};
