import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useAPI } from '../api/useAPI';

const CONTENT_RESOURCE = '/content';

export function useContent() {
  const router = useRouter();
  const api = useAPI();

}