/**
 * A constant key used to store the default color setting in local storage.
 * This key is used by the application to retrieve and set the default color
 * for the user interface.
 */
const defaultColorKey = "tasks-default-color";

/**
 * Retrieves the user's default color from local storage.
 *
 * @returns {string | null} The default color as a string if it exists, otherwise null.
 */
export const getUserDefaultColor = (): string | null => {
  return localStorage.getItem(defaultColorKey);
};

/**
 * Sets the user's default color in local storage.
 *
 * @param color - The color to be set as the user's default.
 * @returns void
 */
export const setUserDefaultColor = (color: string): void => {
  localStorage.setItem(defaultColorKey, color);
};
