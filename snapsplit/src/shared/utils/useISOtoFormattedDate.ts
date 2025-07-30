import { useMemo } from 'react';
import { parseISO, isValid, format } from 'date-fns';

/**
 * ISO 8601 문자열을 "YYYY. MM. DD" 형태로 포맷팅해줍니다.
 * @param isoDate "2025-06-01" 같은 날짜 문자열
 * @returns "2025. 06. 01"
 */

export function useISOtoFormattedDate(isoDate: string): string {
  return useMemo(() => {
    const date = parseISO(isoDate);
    if (!isValid(date)) return isoDate; // 포맷 불가 시 원본 리턴
    return format(date, 'yyyy. MM. dd');
  }, [isoDate]);
}
