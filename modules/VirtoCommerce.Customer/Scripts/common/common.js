angular.module('virtoCommerce.customerModule.common', [])
    .run(['platformWebApp.metaFormsService', function (metaFormsService) {
        metaFormsService.registerMetaFields('CustomeraddressDetails', [{
            templateUrl: 'addressTypeSelector.html',
            priority: 0
        }, {
            name: 'firstName',
            title: 'core.blades.address-detail.labels.first-name',
            valueType: 'ShortText',
            isRequired: true,
            priority: 1
        }, {
            name: 'lastName',
            title: 'core.blades.address-detail.labels.last-name',
            valueType: 'ShortText',
            isRequired: true,
            priority: 2
        }, {
            templateUrl: 'countrySelector.html',
            priority: 3
        }, {
            templateUrl: 'countryRegionSelector.html',
            priority: 4
        }, {
            name: 'city',
            title: 'core.blades.address-detail.labels.city',
            valueType: 'ShortText',
            isRequired: true,
            priority: 5
        }, {
            name: 'line1',
            title: 'core.blades.address-detail.labels.address1',
            valueType: 'ShortText',
            isRequired: true,
            priority: 6
        }, {
            name: 'line2',
            title: 'core.blades.address-detail.labels.address2',
            valueType: 'ShortText',
            priority: 7
        }, {
            name: 'postalCode',
            title: 'core.blades.address-detail.labels.zip-code',
            valueType: 'ShortText',
            isRequired: true,
            priority: 8
        }, {
            name: 'email',
            title: 'core.blades.address-detail.labels.email',
            valueType: 'Email',
            priority: 9
        }, {
            name: 'phone',
            title: 'core.blades.address-detail.labels.phone',
            valueType: 'ShortText',
            priority: 10
        }]);
    }]);
