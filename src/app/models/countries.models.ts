// Interfaces for type safety
export interface CountryName {
  common: string;
  official: string;
  nativeName?: Record<string, { official: string; common: string }>;
}

export interface CountryFlag {
  png: string;
  svg: string;
  alt?: string;
}

export interface Country {
  name: CountryName;
  flags: CountryFlag;
  cca2?: string;
  cca3?: string;
  [key: string]: any;
}