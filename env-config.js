const isProd = process.env.NODE_ENV === 'production';
console.log('Setting "env" variables');

module.exports = {
  'API_URL': isProd ? 'http://api.fixtrack.be/v1' : 'http://localhost:3333/v1'
};
