export const getEntriesForm = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const entries = Object.fromEntries(formData);
  return entries;
};
