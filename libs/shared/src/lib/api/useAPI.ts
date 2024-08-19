import axios from 'axios';
import { useMemo } from 'react';

export function useAPI() {
  const api = useMemo(() => axios.create(), []);
  return { api }
}