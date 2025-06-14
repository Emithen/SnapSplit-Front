export type CountryProps = {
    countryName: string;
    isSelected: boolean;
}


export type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: SearchBarType;
};


export enum SearchBarType {
  WithIcon = 'WITH_ICON',
  WithoutIcon = 'WITHOUT_ICON',
}