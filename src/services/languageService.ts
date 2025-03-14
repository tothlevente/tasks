const languageKey = "vite-ui-language";

/**
 * Retrieves the user's language setting from local storage.
 *
 * @returns {string | null} The stored language setting, or null if not set.
 */
export const getUserLanguage = (): string | null => {
  return localStorage.getItem(languageKey);
};

/**
 * Sets the user's language setting in local storage.
 *
 * @param {string} language - The language setting to be stored.
 */
export const setUserLanguage = (language: string): void => {
  localStorage.setItem(languageKey, language);
};

/**
 * Deletes the user's language setting from local storage.
 */
export const deleteUserLanguage = (): void => {
  localStorage.removeItem(languageKey);
};
