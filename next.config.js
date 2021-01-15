const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: 'SEOBLOG',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    API_PRODUCTION: 'https://blog-next-app.herokuapp.com/api',
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    DOMAIN_PRODUCTION: 'https://tanechysolutions.com/seoblog',
    FB_APP_ID: '1379762749026303',
    DISQUS_SHORTNAME: 'miniblog-app',
    GOOGLE_CLIENT_ID: '820003617956-o9kuece1n3f06fgtmomat30a4qbhqcut.apps.googleusercontent.com',
  },
});
