angular.module('virtoCommerce.customerModule')
.controller('virtoCommerce.customerModule.memberAddressesWidgetController', ['$scope', 'platformWebApp.bladeNavigationService', function ($scope, bladeNavigationService) {
    var blade = $scope.widget.blade;

    $scope.openBlade = function () {
        var newBlade = {
        	id: "orderOperationAddresses",
            currentEntities: blade.currentEntity.addresses,
            title: blade.title,
            subtitle: 'customer.widgets.address-list.blade-subtitle',
            controller: 'virtoCommerce.customerModule.common.coreAddressListController',
            template: 'Modules/$(VirtoCommerce.Customer)/Scripts/common/blades/address-list.tpl.html'
        };
        bladeNavigationService.showBlade(newBlade, blade);
    };
}]);
