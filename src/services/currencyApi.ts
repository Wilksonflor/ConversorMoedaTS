import axios from "axios";

export const fetchCurrencyRates = async (baseCurrency: string) => {
  const response = await axios.get(
    `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
  );
  console.log("resposta", response.data);
  return response.data;
};
