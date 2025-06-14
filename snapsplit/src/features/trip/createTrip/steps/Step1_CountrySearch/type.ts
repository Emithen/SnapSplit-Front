// Country Search Section Props
export type CountrySearchSectionProps = {
    countries: { countryId: number; countryName: string }[];
    selected: string[];
    onToggle: (countryName: string) => void;
    onNext: () => void;
};

// Country List Props
export type CountryListProps = {
    countries: { countryId: number; countryName: string }[];
    selected: string[];
    onToggle: (countryName: string) => void;
};

// Country Component Props
export type CountryComponentProps = {
    countryName: string;
    isSelected: boolean;
    onClick: () => void;
};

// Selected Country Props
export type SelectedCountryProps = {
    selected: string[];
    onRemove: (countryName: string) => void;
  };