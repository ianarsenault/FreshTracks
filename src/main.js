// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Auth0Plugin } from "./auth";
import HighlightJs from "./directives/highlight";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import { domain,clientId,audience } from "./auth/auth_config.json";
require('./assets/css/style.css')
Vue.config.productionTip = false;

var domainE = process.env.VUE_APP_Auth0_Domain
var clientIdE = process.env.VUE_APP_Auth0_clientId
var audienceE = process.env.VUE_APP_Auth0_Audience
if(process.env.VUE_APP_Auth0_Domain){ //This block is used when the Config variables are placed inside a .env file instead of a auth_config.json file
  Vue.use(Auth0Plugin, {
    domainE,
    clientIdE,
    audienceE,
    onRedirectCallback: appState => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    }
  });
}else{
  Vue.use(Auth0Plugin, {
    domain,
    clientId,
    audience,
    onRedirectCallback: appState => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    }
  });

}







Vue.directive("highlightjs", HighlightJs);

library.add(faLink, faUser, faPowerOff);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
