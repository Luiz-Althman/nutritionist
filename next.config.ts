import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '6qqnle6r40wks5gf.public.blob.vercel-storage.com',
            },
        ],
    },
};

export default nextConfig;
