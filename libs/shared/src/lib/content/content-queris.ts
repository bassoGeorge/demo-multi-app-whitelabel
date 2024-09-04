import { QueryFunctionContext } from '@tanstack/react-query';
import { AxiosError, AxiosInstance } from 'axios';

const CONTENT_RESOURCE = '/content';

export function commonContentQueryFn(api: AxiosInstance) {
  return async function ({
    queryKey,
  }: QueryFunctionContext<[string, { clientId: string }]>) {
    const [, { clientId }] = queryKey;

    const { data } = await api.get(
      `${CONTENT_RESOURCE}/${clientId}/common.json`
    );

    return data;
  };
}

export function pageContentQueryFn(api: AxiosInstance) {
  return async function ({
    queryKey,
  }: QueryFunctionContext<[string, { clientId: string; pageKey: string }]>) {
    const [, { clientId, pageKey }] = queryKey;

    try {
      const { data } = await api.get(
        `${CONTENT_RESOURCE}/${clientId}/pages/${pageKey}.json`
      );

      return data ?? {};
    } catch (e: unknown) {
      if ((e as AxiosError)?.response?.status === 404) {
        return {}; // Some pages *might* not have content
      } else {
        throw e;
      }
    }
  };
}
