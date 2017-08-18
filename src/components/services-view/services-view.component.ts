import {ServicesViewController} from './services-view.controller';

export const servicesView: angular.IComponentOptions = {
  bindings: {
    baseProjectUrl: '@',
    catalogItems: '<',
    onDeployImageSelected: '<',
    onFromFileSelected: '<',
    onCreateFromProject: '<',
  },
  controller: ServicesViewController,
  template: require('./services-view.html')
};
