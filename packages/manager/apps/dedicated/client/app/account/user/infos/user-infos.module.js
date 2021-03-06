import angular from 'angular';
import 'angular-translate';
import 'oclazyload';
import 'ovh-api-services';
import managerCore from '@ovh-ux/manager-core';
import ngOvhUtils from '@ovh-ux/ng-ovh-utils';
import '@ovh-ux/ui-kit';
import '@uirouter/angularjs';

import routing from './user-infos.routing';
import service from './user-infos.service';

const moduleName = 'ovhManagerDedicatedAccountUserInfos';

angular
  .module(moduleName, [
    managerCore,
    ngOvhUtils,
    'oc.lazyLoad',
    'oui',
    'ovh-api-services',
    'pascalprecht.translate',
    'ui.router',
  ])
  .config(routing)
  .service('userAccountServiceInfos', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
