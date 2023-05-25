/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_PRODUCT_URL: 'http://localhost:8000/api/products/',
        API_URL: 'http://localhost:8000',
    }
}

module.exports = nextConfig
