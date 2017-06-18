const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  'API_URL': isProd ? 'https://api.example.com' : 'http://localhost:3333/v1'
}