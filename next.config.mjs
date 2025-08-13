/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
        ];
    },

    images: {
        domains: [
            'images.unsplash.com',
            'plus.unsplash.com',
        ],
    },
};

export default nextConfig;
