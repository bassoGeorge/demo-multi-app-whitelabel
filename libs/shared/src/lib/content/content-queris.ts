import { QueryFunctionContext } from '@tanstack/react-query';
import { AxiosError, AxiosInstance } from 'axios';
import { DashboardContent, CommonContentJson } from '@multi-app-whitelabel/utils';

const CONTENT_RESOURCE = '/content';

export function commonContentQueryFn(api: AxiosInstance) {
  return async function ({
    queryKey,
  }: QueryFunctionContext<[string, { clientId: string }]>) {
    const [, { clientId }] = queryKey;

    const { data } = await api.get<CommonContentJson>(
      `${CONTENT_RESOURCE}/${clientId}/common.json`
    );

    return data.components;
  };
}

export type AnyPageContent = DashboardContent;

export function pageContentQueryFn(api: AxiosInstance) {
  return async function ({
    queryKey,
  }: QueryFunctionContext<[string, { clientId: string; pageKey: string }]>) {
    const [, { clientId, pageKey }] = queryKey;

    try {
      const { data } = await api.get<{ components: AnyPageContent }>(
        `${CONTENT_RESOURCE}/${clientId}/pages/${pageKey}.json`
      );

      return data.components ?? {};
    } catch (e: unknown) {
      if ((e as AxiosError)?.response?.status === 404) {
        return {} as AnyPageContent; // Some pages *might* not have content
      } else {
        throw e;
      }
    }
  };
}
