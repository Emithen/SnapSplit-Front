/* eslint-disable @typescript-eslint/no-unused-vars */
type CountryProps = {
    countryName: string;
    isSelected: boolean;
}

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};