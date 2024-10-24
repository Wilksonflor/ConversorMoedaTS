// src/hooks/useCurrencyConverter.ts
import { useState } from 'react';
import axios from 'axios';

const useCurrencyConverter = () => {
  const [conversionResult, setConversionResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const convertCurrency = async (fromCurrency: string, toCurrency: string, amount: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rate = response.data.rates[toCurrency];
      const result = amount * rate;
      setConversionResult(result);
    } catch (err) {
      setError('Error converting currency');
    } finally {
      setLoading(false);
    }
  }

  return { convertCurrency, conversionResult, loading, error };
}

export default useCurrencyConverter;
