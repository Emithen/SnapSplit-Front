// String으로 들어온 통화를 실제 단위로 변경해주는 훅

const currencyMap: Record<string, string> = {
    KRW: '₩',
    USD: '$',
    EUR: '€',
    JPY: '¥',
  };
  
export function useCurrencySymbol(currencyCode: string): string {
    return currencyMap[currencyCode] ?? currencyCode;
  }
