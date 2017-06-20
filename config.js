
module.exports = {
  apiHost: process.env.APIHOST || 'http://localhost:3333/v1',
  port: process.env.PORT || 3000,
  googleMapsApiKey: 'AIzaSyA5HurZ6fCDGg8NLeMSwNJKGz51hPxiki8',
  googleAnalytics: 'UA-76800795-3',
  isProduction: process.env.NODE_ENV === 'production'
};