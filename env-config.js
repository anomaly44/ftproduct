const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  'API_URL': isProd ? 'https://api.example.com' : 'https://localhost:3333'
}