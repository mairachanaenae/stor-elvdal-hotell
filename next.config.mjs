/** @type {import('next').NextConfig} */

// When building for GitHub Pages we produce a fully static site under a
// repo sub-path. Locally (and for Docker) we keep the standalone server output.
const isPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = isPages
  ? {
      reactStrictMode: true,
      // Static HTML export for GitHub Pages.
      output: "export",
      // Pages has no image optimiser; serve images as-is.
      images: { unoptimized: true },
      // Serve every route as a folder/index.html so refreshes work on Pages.
      trailingSlash: true,
      // Site lives at https://<user>.github.io/<repo>/.
      basePath: repoBasePath,
      assetPrefix: repoBasePath || undefined,
    }
  : {
      reactStrictMode: true,
      // Emit a self-contained server bundle (.next/standalone) for slim Docker images.
      output: "standalone",
    };

export default nextConfig;
