import quotes from './data-samples/quotes.json';

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getQuotes = async () => {
    await delay(1000);
    return quotes;
}
