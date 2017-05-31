// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAAA85KLGLUaTMn0q3CJZVQDkx_8L9L2NI',
    authDomain: 'things-to-do-two.firebaseapp.com',
    databaseURL: 'https://things-to-do-two.firebaseio.com',
    projectId: 'things-to-do-two',
    storageBucket: 'things-to-do-two.appspot.com',
    messagingSenderId: '260637895144'
  }
};
