import {useCallback, useState} from 'react';

export const useErrorViewModel = () => {
  const [error, setError] = useState<Error | null>(null);
  const showError = useCallback((e: Error) => {
    setError(e);
  }, []);
  const hideError = useCallback(() => {
    setError(null);
  }, []);
  return {
    error,
    showError,
    hideError,
  };
};
