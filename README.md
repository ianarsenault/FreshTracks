# Fresh Tracks 
A custom-built serverless application built in Vue.js to demonstrate multiple SaaS integrations into AWS with EventBridge.

![Fresh Tracks](/public/images/FTfrontPage.png "Fresh Tracks")

## Learn about FreshTracks 3P SaaS integrations:
- Auth0
- Zendesk
- Datadog

## Project setup

```bash
npm install
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

### Compiles and hot-reloads for development

```bash
npm run serve
```

## Deployment

### Compiles and minifies for production

```bash
npm run build
```

### Docker build

To build and run the Docker image, run `exec.sh`, or `exec.ps1` on Windows.

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```
## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.
