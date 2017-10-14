/*! - development.js
 *
 * When developing applications, it is always best practice to separate the database
 * and API instances used between development and production environments. However,
 * while environment variables in production are stored at the hosting service, in
 * development, you'll often be working locally and, as a result, need to store the
 * sensitive information on your computer. That's the purpose of this file.
 *
 * But instead of referencing an object propert like in production.js, we have to hardcode
 * the API keys and other sensitive information here - as strings - making this file
 * extremely dangerous to expose to the public. Therefore, it is very important that you
 *
 * ******************** ADD THIS FILE TO YOUR .GITIGNORE FILE. ******************** *
 *
 * Replace the empty strings below with your own API keys and database information.
 *
 * To learn how to create a Google client ID and Client Secret for user authentication, visit:
 *
 * To learn how to create a MongoDB database and obtain unique URI, visit:
 *
 * The cookieKey below will be used to encrypt a user's session via a browser cookie. It can be
 * any random string - like, some long alphanumeric one. It doesn't have to be super complex.
 *
 */
module.exports = {
  googleClientID: '',
  googleClientSecret: '',
  mongoURI: '',
  cookieKey: ''
}