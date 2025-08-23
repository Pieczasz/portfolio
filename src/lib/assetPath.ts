/**
 * Utility function to handle asset paths for GitHub Pages deployment
 * This ensures images and other assets work both in development and production
 */
export function assetPath(path: string): string {
	// In development, use the path as-is (no base path needed)
	if (process.env.NODE_ENV === "development") {
		return path;
	}

	// In production (GitHub Pages), prepend the base path
	// The Next.js config already handles this, but we need it for manual asset references
	const basePath = "/portfolio";

	// Remove leading slash if present to avoid double slashes
	const cleanPath = path.startsWith("/") ? path.slice(1) : path;

	return `${basePath}/${cleanPath}`;
}
