import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { replace, tail } from 'ramda';
import { createContext, useContext } from 'react';
import { useAPI } from '../api/useAPI';
import { commonContentQueryFn, pageContentQueryFn } from './content-queris';


type ContentContext = {
  common: Record<string, unknown>;
  page: Record<string, unknown>;
  pageContentStatus: 'pending' | 'ready' | 'error';
};

const ContentContext = createContext<ContentContext>(
  null as unknown as ContentContext
);

export function ContentProvider({
  children,
  client,
}: {
  children: React.ReactNode;
  client: string;
}) {
  const router = useRouter();
  const { api } = useAPI();

  const commonContentQuery = useQuery({
    queryKey: ['crit:global-content', { clientId: client }],
    queryFn: commonContentQueryFn(api),
    staleTime: Infinity,
  });

  const pageContentQuery = useQuery({
    queryKey: [
      'crit:page-content',
      { clientId: client, pageKey: getPageKey(router.pathname) },
    ],
    queryFn: pageContentQueryFn(api),
    staleTime: Infinity,
  });

  if (!commonContentQuery.isSuccess || !pageContentQuery.isSuccess) {
    return <p>Loading...</p>;
  }

  return (
    <ContentContext.Provider
      value={{
        common: commonContentQuery.data,
        page: pageContentQuery.data,
        pageContentStatus: pageContentQuery.isFetching
          ? 'pending'
          : pageContentQuery.isError
          ? 'error'
          : 'ready',
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => useContext(ContentContext);

/**
 * Given the current pathname, returns the key used to create the content-json page level json
 * For / return dashboard, for everything else, returns - separated url bits
 * Additional dynamic pages can be customised here
 * @param pathname the URL path
 * @returns
 */
function getPageKey(pathname: string): string {
  if (pathname === '/') {
    return 'dashboard';
  }
  return replace(/\//, '-', tail(pathname));
}