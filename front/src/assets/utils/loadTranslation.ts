async function loadTranslation(locale: string, isProduction = true) {
  let data;

  data = await import(`../../../locales/${locale}/messages.js`);
  return data.messages;
}
export default loadTranslation;

export const changeLanguageTo = async (choice, dispatchContext) => {
  const message = await loadTranslation(choice);
  dispatchContext({ payload: { selected: choice, message } });
};
