angular.module('virtoCommerce.orderModule')
    .controller('virtoCommerce.orderModule.notificationsLogWidgetController', ['$scope', 'platformWebApp.bladeNavigationService', function ($scope, bladeNavigationService) {
        var blade = $scope.widget.blade;

        blade.showNotificationsLog = function () {
            var objectId = blade.currentEntity.id;
            var objectTypeId = 'CustomerOrder';
            var newBlade = {
                id: 'notificationLogWidgetChild',
                objectId: objectId,
                objectType: objectTypeId,
                title: 'orders.widgets.notifications.title',
                subtitle: 'orders.widgets.notifications.subtitle',
                controller: 'virtoCommerce.notificationsModule.notificationsJournalController',
                template: 'Modules/$(VirtoCommerce.Notifications)/Scripts/blades/notifications-journal.tpl.html'
            };
            bladeNavigationService.showBlade(newBlade, blade);
        };
    }]);
