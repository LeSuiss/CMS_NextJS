async function loadTranslation(locale: string, isProduction = true) {
  let data;

  if (isProduction) {
    data = await import(`../../locales/${locale}/messages`);
  } else {
    data = await import(
      `@lingui/loader!../../locales/${locale}/messages.po`
    );
  }

  return data.messages;
}
export default loadTranslation;

export const changeLanguageTo = async (choice, dispatchContext) => {
  const message = await loadTranslation(choice);
  dispatchContext({ payload: { selected: choice, message } });
};
