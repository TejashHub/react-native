interface Currency {
  name: string;
  value: number;
  flag: string;
  symbol: string;
}

const currencyByRupees: Currency[] = [
  {
    name: "DOLLAR",
    value: 0.01227,
    flag: "🇺🇸",
    symbol: "$",
  },
  {
    name: "EURO",
    value: 0.01135,
    flag: "🇪🇺",
    symbol: "€",
  },
  {
    name: "POUND",
    value: 0.00885,
    flag: "🇬🇧",
    symbol: "£",
  },
  {
    name: "RUPEE",
    value: 1,
    flag: "🇮🇳",
    symbol: "₹",
  },
];

export default currencyByRupees;
