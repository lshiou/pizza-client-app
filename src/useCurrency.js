const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceConverter = (price) => intl.format(price);

export default function useCurrency(price) {
  return priceConverter(price);
}
// This custom hook takes a price as an argument and formats it using the Intl.NumberFormat API.
