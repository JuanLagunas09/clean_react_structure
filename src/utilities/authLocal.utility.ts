export const loginLocalStorage = (payload: any) => {
  localStorage.setItem("fake-token-clean", JSON.stringify(payload));
};

export const logoutLocalStorage = () => {
  localStorage.removeItem("fake-token-clean");
};

export const isLoggedLocalStorage = () => {
  return localStorage.getItem("fake-token-clean") !== null; // return true or false
};

export const getTokenLocalStorage = () => {
  return JSON.parse(localStorage.getItem("fake-token-clean") || "{}");
}
