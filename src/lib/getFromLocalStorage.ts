export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  const value = localStorage.getItem(key);
  return value !== null ? value : "";
};

export const getFromSessionStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return sessionStorage.getItem(key);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveToLocalStorage = (key: any, value: any) => {
  localStorage.setItem(key, value);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const calculateTotals = (cartItems: any) => {
  const subtotal = cartItems.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc: any, item: any) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming a fixed tax rate of 10%
  const total = subtotal + tax;
  return { subtotal, tax, total };
};
