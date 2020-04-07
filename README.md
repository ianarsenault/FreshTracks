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
#### Auth

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work.

To do this, first copy `auth_config.json.example` into a new file in the same folder called `auth_config.json`, and replace the values within with your own Auth0 application credentials:

```json
{
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>"
}
```

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.
