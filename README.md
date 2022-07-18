# heladeria-nuevo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


prueba

https://manage.auth0.com/dashboard/us/dev-dmk9ege0/applications/XFKP2QLJzebWJ0aM9qbknI1pm99oJWcx/settings

https://manage.auth0.com/dashboard/us/dev-dmk9ege0/

import GAuth from "vue-google-oauth2";

Vue.use(GAuth, {
  clientId:
    "397868679080-qanvqc32fiftuirc4prlnn03c5l1o7en.apps.googleusercontent.com",
  scope: "email",
  prompt: "select_account",
  fetch_basic_profile: false
});