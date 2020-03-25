// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_AUTH_URL: 'https://footballfun-74762.firebaseio.com/users.json',
  API_NEWS_URL: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-25&sortBy=publishedAt&apiKey=afaa592a36b84c3baf567701c20ce13d'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
