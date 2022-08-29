import {useMemo} from 'react';

export const useSearch = (array: any[], field: string, value: string) => {
    return useMemo(() => {
    if (value) {
      return array.filter(element =>
        element[field].toLowerCase().includes(value.toLowerCase())
      );
    }
    return array;
  }, [value, array, field]);
};
