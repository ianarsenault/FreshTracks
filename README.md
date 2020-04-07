# Fresh Tracks 
A custom-built serverless application built in Vue.js to demonstrate multiple SaaS integrations into AWS with EventBridge.

![Fresh Tracks](/public/images/FTfrontPage.png "Fresh Tracks")

## Learn about FreshTracks 3P SaaS integrations:
- Auth0
- Zendesk
- Datadog

## Deploying the front-end application

- Clone the repo onto your local development machine:
```bash
git clone
 ```
- cd into the root directoy and run:

```bash
npm install
```

- Run the application locally:
```bash
npm run serve
```

### Configuration
#### Authentication

The project needs to be connected to an Auth0 application in order for the authentication flow to work.

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
1. Register a [single page applicaiton](https://auth0.com/docs/dashboard/guides/applications/register-app-spa)
1. Add `http://localhost:3000` to the `Allowed Callback URLs`, `Allowed Logout URLs`, and `Allowed Web Origins` in your applicaiton settings.
1. You must configure the front end applicaiton with your Auth0 domain and client ID.

To do this, first copy `auth_config.json.example` into a new file in the same folder called `auth_config.json`, and replace the values within with your own Auth0 application credentials:

```json
{
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>"
}
```


## Deploying the backend application
[See this guide](/backend/FreshTracks/) to deploy the back end resources and services

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.
