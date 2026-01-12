import { BASE_URL } from "./apiPaths";

/**
 * Constructs a full image URL.
 * @param {string} path - The image path (relative or absolute).
 * @returns {string} - The full URL.
 */
export const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) {
        return path;
    }
    return `${BASE_URL}${path}`;
};
