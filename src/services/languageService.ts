/**
 * A constant key used to store and retrieve the selected language preference
 * from local storage or similar persistent storage mechanisms.
 *
 * This key is utilized by the application to manage and persist the user's
 * language settings across sessions.
 */
const languageKey = "tasks-language";

/**
 * Retrieves the currently selected language from local storage.
 *
 * @returns {string | null} The language code as a string if it exists in local storage,
 * or `null` if no language is set.
 */
export const getLanguage = (): string | null => {
  return localStorage.getItem(languageKey);
};

/**
 * Sets the preferred language in the local storage.
 *
 * @param language - The language code to be stored (e.g., "en", "fr", "es").
 *
 * @remarks
 * This function uses the `localStorage` API to persist the language preference
 * across sessions. Ensure that `languageKey` is defined and accessible in the
 * current scope.
 */
export const setLanguage = (language: string): void => {
  localStorage.setItem(languageKey, language);
};
