//Call this to register our module to main application
var moduleName = "virtoCommerce.assetsModule";

if (AppDependencies !== undefined) {
    AppDependencies.push(moduleName);
}


angular.module(moduleName, [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('workspace.assetsModule', {
                url: '/assets',
                templateUrl: '$(Platform)/Scripts/common/templates/home.tpl.html',
                controller: ['$scope', 'platformWebApp.bladeNavigationService', function ($scope, bladeNavigationService) {
                    var blade = {
                        id: 'assetList',
                        controller: 'virtoCommerce.assetsModule.assetListController',
                        template: 'Modules/$(VirtoCommerce.Assets)/Scripts/blades/asset-list.tpl.html',
                        isClosingDisabled: true
                    };
                    bladeNavigationService.showBlade(blade);
                }]
            });
    }])

    .run(['platformWebApp.mainMenuService', '$state', 'platformWebApp.toolbarService', 'platformWebApp.breadcrumbHistoryService', function (mainMenuService, $state, toolbarService, breadcrumbHistoryService) {
        var menuItem = {
            path: 'browse/assets',
            icon: 'fa fa-folder-o',
            title: 'platform.menu.assets',
            priority: 130,
            action: function () { $state.go('workspace.assetsModule'); },
            permission: 'platform:asset:access'
        };
        mainMenuService.addMenuItem(menuItem);

        // register back-button
        toolbarService.register(breadcrumbHistoryService.getBackButtonInstance(), 'platformWebApp.assets.assetListController');
        toolbarService.register(breadcrumbHistoryService.getBackButtonInstance(), 'platformWebApp.assets.assetSelectController');
    }]);
