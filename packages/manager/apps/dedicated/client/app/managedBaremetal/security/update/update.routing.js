export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.managedBaremetal.details.security.update', {
    url: '/update',
    params: {
      policy: null,
    },
    views: {
      modal: {
        component: 'ovhManagerPccSecurityUpdate',
      },
    },
    layout: 'modal',
    resolve: {
      policy: /* @ngInject */ ($transition$) => $transition$.params().policy,
      breadcrumb: () => null,
    },
  });
};
