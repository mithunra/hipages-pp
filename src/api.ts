import Quotes from './data-samples/Quotes.json';
import QuoteStatus from './data-samples/QuoteStatus.json';

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getQuotes = async () => {
    await delay(1000);
    return Quotes;
}

export const getQuoteStatuses = async () => {
    await delay(3000);
    return QuoteStatus;
}
