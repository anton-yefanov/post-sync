export const REDIRECT_PRICE_ID_KEY = "checkout_price_id";

export const storeCheckoutRedirect = (priceId: string) => {
  sessionStorage.setItem(REDIRECT_PRICE_ID_KEY, priceId);
};

export const getStoredCheckoutPriceId = (): string | null => {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(REDIRECT_PRICE_ID_KEY);
};

export const clearStoredCheckoutPriceId = (): void => {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(REDIRECT_PRICE_ID_KEY);
};
