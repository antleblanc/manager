import angular from 'angular';
import '@ovh-ux/ng-translate-async-loader';
import '@ovh-ux/ui-kit';
import 'angular-translate';

import component from './component';

const moduleName = 'ovhManagerWebPaasDeleteUser';

angular
  .module(moduleName, [
    'ngTranslateAsyncLoader',
    'oui',
    'pascalprecht.translate',
  ])
  .component('webPaasDeleteUser', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
