  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    compiler: {
      styledComponents: {
        ssr: true,
        minify: true,
        
      }
    },
  };

  export default nextConfig;
