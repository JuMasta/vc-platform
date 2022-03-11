!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){o(1),o(2),o(3),o(4),e.exports=o(5)},function(e,t){null!=AppDependencies&&AppDependencies.push("virtoCommerce.paymentModule"),angular.module("virtoCommerce.paymentModule",[]).run(["platformWebApp.widgetService",function(e){e.registerWidget({controller:"virtoCommerce.paymentModule.storePaymentsWidgetController",template:"Modules/$(VirtoCommerce.Payment)/Scripts/widgets/storePaymentsWidget.tpl.html"},"storeDetail"),e.registerWidget({controller:"platformWebApp.entitySettingsWidgetController",template:"$(Platform)/Scripts/app/settings/widgets/entitySettingsWidget.tpl.html"},"paymentMethodDetail")}])},function(e,t){angular.module("virtoCommerce.paymentModule").controller("virtoCommerce.paymentModule.paymentMethodDetailController",["$scope","platformWebApp.bladeNavigationService","virtoCommerce.paymentModule.paymentMethods","platformWebApp.settings.helper",function(e,t,o,n){var r=e.blade;function a(e){r.title="payment.labels."+e.typeName+".name",r.currentEntity=angular.copy(e),r.origEntity=e,r.isLoading=!1}function i(){return!angular.equals(r.currentEntity,r.origEntity)&&r.hasUpdatePermission()}function l(){return i()}r.refresh=function(e){r.isLoading=!0,r.paymentMethod.id?o.get({id:r.paymentMethod.id},(function(t){a(t),e&&r.parentBlade.refresh()}),(function(e){t.setError("Error "+e.status,r)})):a(r.paymentMethod)},r.onClose=function(o){t.showConfirmationIfNeeded(i(),l(),r,e.saveChanges,o,"payment.dialogs.payment-method-save.title","payment.dialogs.payment-method-save.message")},e.cancelChanges=function(){e.bladeClose()},e.saveChanges=function(){r.isLoading=!0,n.toApiFormat(r.currentEntity.settings),r.currentEntity.storeId=r.storeId,o.update({},r.currentEntity,(function(e){r.paymentMethod.id=e.id,r.refresh(!0)}),(function(e){t.setError("Error "+e.status,r)}))},e.setForm=function(t){e.formScope=t},e.getDictionaryValues=function(e,t){t(e.allowedValues)},r.headIcon="fa fa-archive",r.toolbarCommands=[{name:"platform.commands.save",icon:"fa fa-save",executeMethod:e.saveChanges,canExecuteMethod:l,permission:r.updatePermission},{name:"platform.commands.reset",icon:"fa fa-undo",executeMethod:function(){angular.copy(r.origEntity,r.currentEntity)},canExecuteMethod:i,permission:r.updatePermission}],r.refresh()}])},function(e,t){angular.module("virtoCommerce.paymentModule").controller("virtoCommerce.paymentModule.paymentMethodListController",["$scope","platformWebApp.bladeNavigationService","virtoCommerce.paymentModule.paymentMethods",function(e,t,o){var n=e.blade;n.refresh=function(){n.isLoading=!0,o.search({storeId:n.storeId},(function(e){n.isLoading=!1,n.currentEntities=e.results,n.selectedPaymentMethods=_.findWhere(n.currentEntities,{isActive:!0})}),(function(e){t.setError("Error "+e.status,n)}))},e.selectNode=function(o){e.selectedNodeId=o.typeName;var r={id:"paymentMethodDetail",paymentMethod:o,storeId:n.storeId,subtitle:"payment.blades.payment-method-detail.subtitle",controller:"virtoCommerce.paymentModule.paymentMethodDetailController",template:"Modules/$(VirtoCommerce.Payment)/Scripts/blades/paymentMethod-detail.tpl.html"};t.showBlade(r,e.blade)},n.isLoading=!1,n.headIcon="fa fa-archive",e.sortableOptions={stop:function(t,o){for(var n=0;n<e.blade.currentEntities.length;n++)e.blade.currentEntities[n].priority=n+1},axis:"y",cursor:"move"},n.toolbarCommands=[{name:"platform.commands.refresh",icon:"fa fa-refresh",executeMethod:n.refresh,canExecuteMethod:function(){return!0}}],n.refresh()}])},function(e,t){angular.module("virtoCommerce.paymentModule").factory("virtoCommerce.paymentModule.paymentMethods",["$resource",function(e){return e("api/payment",{},{getAllRegistered:{method:"GET",isArray:!0},search:{method:"POST",url:"api/payment/search"},get:{url:"api/payment/:id"},update:{method:"PUT"}})}])},function(e,t){angular.module("virtoCommerce.paymentModule").controller("virtoCommerce.paymentModule.storePaymentsWidgetController",["$scope","platformWebApp.bladeNavigationService",function(e,t){var o=e.blade;e.openBlade=function(){var e={id:"storeChildBlade",storeId:o.currentEntity.id,title:o.title,subtitle:"payment.widgets.store-payment-widget.blade-subtitle",controller:"virtoCommerce.paymentModule.paymentMethodListController",template:"Modules/$(VirtoCommerce.Payment)/Scripts/blades/paymentMethod-list.tpl.html"};t.showBlade(e,o)}}])}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9WaXJ0b0NvbW1lcmNlLlBheW1lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVmlydG9Db21tZXJjZS5QYXltZW50Ly4vU2NyaXB0cy9wYXltZW50LmpzIiwid2VicGFjazovL1ZpcnRvQ29tbWVyY2UuUGF5bWVudC8uL1NjcmlwdHMvYmxhZGVzL3BheW1lbnRNZXRob2QtZGV0YWlsLmpzIiwid2VicGFjazovL1ZpcnRvQ29tbWVyY2UuUGF5bWVudC8uL1NjcmlwdHMvYmxhZGVzL3BheW1lbnRNZXRob2QtbGlzdC5qcyIsIndlYnBhY2s6Ly9WaXJ0b0NvbW1lcmNlLlBheW1lbnQvLi9TY3JpcHRzL3Jlc291cmNlcy9wYXltZW50TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9WaXJ0b0NvbW1lcmNlLlBheW1lbnQvLi9TY3JpcHRzL3dpZGdldHMvc3RvcmVQYXltZW50c1dpZGdldC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInVuZGVmaW5lZCIsIkFwcERlcGVuZGVuY2llcyIsInB1c2giLCJhbmd1bGFyIiwicnVuIiwid2lkZ2V0U2VydmljZSIsInJlZ2lzdGVyV2lkZ2V0IiwiY29udHJvbGxlciIsInRlbXBsYXRlIiwiJHNjb3BlIiwiYmxhZGVOYXZpZ2F0aW9uU2VydmljZSIsInBheW1lbnRNZXRob2RzIiwic2V0dGluZ3NoZWxwZXIiLCJibGFkZSIsImluaXRpYWxpemVCbGFkZSIsImRhdGEiLCJ0aXRsZSIsInR5cGVOYW1lIiwiY3VycmVudEVudGl0eSIsImNvcHkiLCJvcmlnRW50aXR5IiwiaXNMb2FkaW5nIiwiaXNEaXJ0eSIsImVxdWFscyIsImhhc1VwZGF0ZVBlcm1pc3Npb24iLCJjYW5TYXZlIiwicmVmcmVzaCIsInBhcmVudFJlZnJlc2giLCJwYXltZW50TWV0aG9kIiwiaWQiLCJwYXJlbnRCbGFkZSIsImVycm9yIiwic2V0RXJyb3IiLCJzdGF0dXMiLCJvbkNsb3NlIiwiY2xvc2VDYWxsYmFjayIsInNob3dDb25maXJtYXRpb25JZk5lZWRlZCIsInNhdmVDaGFuZ2VzIiwiY2FuY2VsQ2hhbmdlcyIsImJsYWRlQ2xvc2UiLCJ0b0FwaUZvcm1hdCIsInNldHRpbmdzIiwic3RvcmVJZCIsInVwZGF0ZSIsInNldEZvcm0iLCJmb3JtIiwiZm9ybVNjb3BlIiwiZ2V0RGljdGlvbmFyeVZhbHVlcyIsInNldHRpbmciLCJjYWxsYmFjayIsImFsbG93ZWRWYWx1ZXMiLCJoZWFkSWNvbiIsInRvb2xiYXJDb21tYW5kcyIsImljb24iLCJleGVjdXRlTWV0aG9kIiwiY2FuRXhlY3V0ZU1ldGhvZCIsInBlcm1pc3Npb24iLCJ1cGRhdGVQZXJtaXNzaW9uIiwic2VhcmNoIiwiY3VycmVudEVudGl0aWVzIiwicmVzdWx0cyIsInNlbGVjdGVkUGF5bWVudE1ldGhvZHMiLCJfIiwiZmluZFdoZXJlIiwiaXNBY3RpdmUiLCJzZWxlY3ROb2RlIiwibm9kZSIsInNlbGVjdGVkTm9kZUlkIiwibmV3QmxhZGUiLCJzdWJ0aXRsZSIsInNob3dCbGFkZSIsInNvcnRhYmxlT3B0aW9ucyIsInN0b3AiLCJlIiwidWkiLCJsZW5ndGgiLCJwcmlvcml0eSIsImF4aXMiLCJjdXJzb3IiLCJmYWN0b3J5IiwiJHJlc291cmNlIiwiZ2V0QWxsUmVnaXN0ZXJlZCIsIm1ldGhvZCIsImlzQXJyYXkiLCJ1cmwi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L0MxQyxFQUFNYSxjLGNDekJkdkIsUUFBUXBDLE9BQU8sK0JBQ2RnSCxRQUFRLDZDQUE4QyxDQUFDLFlBQWEsU0FBVUMsR0FDM0UsT0FBT0EsRUFBVSxjQUFlLEdBQUksQ0FDaENDLGlCQUFrQixDQUFFQyxPQUFRLE1BQU9DLFNBQVMsR0FDNUN6QixPQUFRLENBQUV3QixPQUFRLE9BQVFFLElBQUssc0JBQy9CdkcsSUFBSyxDQUFFdUcsSUFBSyxtQkFDWnpDLE9BQVEsQ0FBRXVDLE9BQVEsYSxjQ04xQi9FLFFBQVFwQyxPQUFPLCtCQUErQndDLFdBQVcsNERBQTZELENBQUMsU0FBVSx3Q0FBeUMsU0FBVUUsRUFBUUMsR0FDeEwsSUFBSUcsRUFBUUosRUFBT0ksTUFFbkJKLEVBQU80RSxVQUFZLFdBQ2YsSUFBSWpCLEVBQVcsQ0FDWHZDLEdBQUksa0JBQ0phLFFBQVM3QixFQUFNSyxjQUFjVyxHQUM3QmIsTUFBT0gsRUFBTUcsTUFDYnFELFNBQVUsc0RBQ1Y5RCxXQUFZLDBEQUNaQyxTQUFVLCtFQUVkRSxFQUF1QjRELFVBQVVGLEVBQVV2RCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvL0NhbGwgdGhpcyB0byByZWdpc3RlciBvdXIgbW9kdWxlIHRvIG1haW4gYXBwbGljYXRpb25cbnZhciBtb2R1bGVOYW1lID0gXCJ2aXJ0b0NvbW1lcmNlLnBheW1lbnRNb2R1bGVcIjtcblxuaWYgKEFwcERlcGVuZGVuY2llcyAhPSB1bmRlZmluZWQpIHtcbiAgICBBcHBEZXBlbmRlbmNpZXMucHVzaChtb2R1bGVOYW1lKTtcbn1cblxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pLnJ1bihbJ3BsYXRmb3JtV2ViQXBwLndpZGdldFNlcnZpY2UnLFxuICAgIGZ1bmN0aW9uICh3aWRnZXRTZXJ2aWNlKSB7XG5cbiAgICAgICAgLy9SZWdpc3RlciBwYXltZW50IHdpZGdldCBmb3Igc3RvcmVcbiAgICAgICAgd2lkZ2V0U2VydmljZS5yZWdpc3RlcldpZGdldCh7XG4gICAgICAgICAgICBjb250cm9sbGVyOiAndmlydG9Db21tZXJjZS5wYXltZW50TW9kdWxlLnN0b3JlUGF5bWVudHNXaWRnZXRDb250cm9sbGVyJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnTW9kdWxlcy8kKFZpcnRvQ29tbWVyY2UuUGF5bWVudCkvU2NyaXB0cy93aWRnZXRzL3N0b3JlUGF5bWVudHNXaWRnZXQudHBsLmh0bWwnXG4gICAgICAgIH0sICdzdG9yZURldGFpbCcpO1xuXG4gICAgICAgIHdpZGdldFNlcnZpY2UucmVnaXN0ZXJXaWRnZXQoe1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ3BsYXRmb3JtV2ViQXBwLmVudGl0eVNldHRpbmdzV2lkZ2V0Q29udHJvbGxlcicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJyQoUGxhdGZvcm0pL1NjcmlwdHMvYXBwL3NldHRpbmdzL3dpZGdldHMvZW50aXR5U2V0dGluZ3NXaWRnZXQudHBsLmh0bWwnXG4gICAgICAgIH0sICdwYXltZW50TWV0aG9kRGV0YWlsJyk7XG5cbiAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgndmlydG9Db21tZXJjZS5wYXltZW50TW9kdWxlJykuY29udHJvbGxlcigndmlydG9Db21tZXJjZS5wYXltZW50TW9kdWxlLnBheW1lbnRNZXRob2REZXRhaWxDb250cm9sbGVyJywgWyckc2NvcGUnLCAncGxhdGZvcm1XZWJBcHAuYmxhZGVOYXZpZ2F0aW9uU2VydmljZScsICd2aXJ0b0NvbW1lcmNlLnBheW1lbnRNb2R1bGUucGF5bWVudE1ldGhvZHMnLCAncGxhdGZvcm1XZWJBcHAuc2V0dGluZ3MuaGVscGVyJywgZnVuY3Rpb24gKCRzY29wZSwgYmxhZGVOYXZpZ2F0aW9uU2VydmljZSwgcGF5bWVudE1ldGhvZHMsIHNldHRpbmdzaGVscGVyKSB7XG4gICAgdmFyIGJsYWRlID0gJHNjb3BlLmJsYWRlO1xuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJsYWRlKGRhdGEpIHtcbiAgICAgICAgYmxhZGUudGl0bGUgPSAncGF5bWVudC5sYWJlbHMuJyArIGRhdGEudHlwZU5hbWUgKyAnLm5hbWUnO1xuICAgICAgICBibGFkZS5jdXJyZW50RW50aXR5ID0gYW5ndWxhci5jb3B5KGRhdGEpO1xuICAgICAgICBibGFkZS5vcmlnRW50aXR5ID0gZGF0YTtcbiAgICAgICAgYmxhZGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYmxhZGUucmVmcmVzaCA9IGZ1bmN0aW9uIChwYXJlbnRSZWZyZXNoKSB7XG4gICAgICAgIGJsYWRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGlmIChibGFkZS5wYXltZW50TWV0aG9kLmlkKSB7XG4gICAgICAgICAgICBwYXltZW50TWV0aG9kcy5nZXQoeyBpZDogYmxhZGUucGF5bWVudE1ldGhvZC5pZCB9LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemVCbGFkZShkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50UmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICBibGFkZS5wYXJlbnRCbGFkZS5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHsgYmxhZGVOYXZpZ2F0aW9uU2VydmljZS5zZXRFcnJvcignRXJyb3IgJyArIGVycm9yLnN0YXR1cywgYmxhZGUpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVCbGFkZShibGFkZS5wYXltZW50TWV0aG9kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGlydHkoKSB7XG4gICAgICAgIHJldHVybiAhYW5ndWxhci5lcXVhbHMoYmxhZGUuY3VycmVudEVudGl0eSwgYmxhZGUub3JpZ0VudGl0eSkgJiYgYmxhZGUuaGFzVXBkYXRlUGVybWlzc2lvbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblNhdmUoKSB7XG4gICAgICAgIHJldHVybiBpc0RpcnR5KCk7XG4gICAgfVxuXG4gICAgYmxhZGUub25DbG9zZSA9IGZ1bmN0aW9uIChjbG9zZUNhbGxiYWNrKSB7XG4gICAgICAgIGJsYWRlTmF2aWdhdGlvblNlcnZpY2Uuc2hvd0NvbmZpcm1hdGlvbklmTmVlZGVkKGlzRGlydHkoKSwgY2FuU2F2ZSgpLCBibGFkZSwgJHNjb3BlLnNhdmVDaGFuZ2VzLCBjbG9zZUNhbGxiYWNrLCBcInBheW1lbnQuZGlhbG9ncy5wYXltZW50LW1ldGhvZC1zYXZlLnRpdGxlXCIsIFwicGF5bWVudC5kaWFsb2dzLnBheW1lbnQtbWV0aG9kLXNhdmUubWVzc2FnZVwiKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbENoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRzY29wZS5ibGFkZUNsb3NlKCk7XG4gICAgfTtcblxuICAgICRzY29wZS5zYXZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmxhZGUuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICBzZXR0aW5nc2hlbHBlci50b0FwaUZvcm1hdChibGFkZS5jdXJyZW50RW50aXR5LnNldHRpbmdzKTtcblxuICAgICAgICBibGFkZS5jdXJyZW50RW50aXR5LnN0b3JlSWQgPSBibGFkZS5zdG9yZUlkO1xuICAgICAgICBwYXltZW50TWV0aG9kcy51cGRhdGUoe30sIGJsYWRlLmN1cnJlbnRFbnRpdHksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBibGFkZS5wYXltZW50TWV0aG9kLmlkID0gZGF0YS5pZDtcbiAgICAgICAgICAgIGJsYWRlLnJlZnJlc2godHJ1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikgeyBibGFkZU5hdmlnYXRpb25TZXJ2aWNlLnNldEVycm9yKCdFcnJvciAnICsgZXJyb3Iuc3RhdHVzLCBibGFkZSk7IH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2V0Rm9ybSA9IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICRzY29wZS5mb3JtU2NvcGUgPSBmb3JtO1xuICAgIH1cblxuICAgICRzY29wZS5nZXREaWN0aW9uYXJ5VmFsdWVzID0gZnVuY3Rpb24gKHNldHRpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHNldHRpbmcuYWxsb3dlZFZhbHVlcyk7XG4gICAgfTtcblxuICAgIGJsYWRlLmhlYWRJY29uID0gJ2ZhIGZhLWFyY2hpdmUnO1xuXG4gICAgYmxhZGUudG9vbGJhckNvbW1hbmRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInBsYXRmb3JtLmNvbW1hbmRzLnNhdmVcIixcbiAgICAgICAgICAgIGljb246ICdmYSBmYS1zYXZlJyxcbiAgICAgICAgICAgIGV4ZWN1dGVNZXRob2Q6ICRzY29wZS5zYXZlQ2hhbmdlcyxcbiAgICAgICAgICAgIGNhbkV4ZWN1dGVNZXRob2Q6IGNhblNhdmUsXG4gICAgICAgICAgICBwZXJtaXNzaW9uOiBibGFkZS51cGRhdGVQZXJtaXNzaW9uXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwicGxhdGZvcm0uY29tbWFuZHMucmVzZXRcIixcbiAgICAgICAgICAgIGljb246ICdmYSBmYS11bmRvJyxcbiAgICAgICAgICAgIGV4ZWN1dGVNZXRob2Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmNvcHkoYmxhZGUub3JpZ0VudGl0eSwgYmxhZGUuY3VycmVudEVudGl0eSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuRXhlY3V0ZU1ldGhvZDogaXNEaXJ0eSxcbiAgICAgICAgICAgIHBlcm1pc3Npb246IGJsYWRlLnVwZGF0ZVBlcm1pc3Npb25cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBibGFkZS5yZWZyZXNoKCk7XG5cbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCd2aXJ0b0NvbW1lcmNlLnBheW1lbnRNb2R1bGUnKS5jb250cm9sbGVyKCd2aXJ0b0NvbW1lcmNlLnBheW1lbnRNb2R1bGUucGF5bWVudE1ldGhvZExpc3RDb250cm9sbGVyJywgWyckc2NvcGUnLCAncGxhdGZvcm1XZWJBcHAuYmxhZGVOYXZpZ2F0aW9uU2VydmljZScsICd2aXJ0b0NvbW1lcmNlLnBheW1lbnRNb2R1bGUucGF5bWVudE1ldGhvZHMnLCBmdW5jdGlvbiAoJHNjb3BlLCBibGFkZU5hdmlnYXRpb25TZXJ2aWNlLCBwYXltZW50TWV0aG9kcykge1xuICAgIHZhciBibGFkZSA9ICRzY29wZS5ibGFkZTtcblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVCbGFkZSgpIHtcbiAgICAgICAgYmxhZGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGJsYWRlLmhlYWRJY29uID0gJ2ZhIGZhLWFyY2hpdmUnO1xuXG4gICAgICAgICRzY29wZS5zb3J0YWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5ibGFkZS5jdXJyZW50RW50aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJsYWRlLmN1cnJlbnRFbnRpdGllc1tpXS5wcmlvcml0eSA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBheGlzOiAneScsXG4gICAgICAgICAgICBjdXJzb3I6IFwibW92ZVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgYmxhZGUudG9vbGJhckNvbW1hbmRzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwicGxhdGZvcm0uY29tbWFuZHMucmVmcmVzaFwiLCBpY29uOiAnZmEgZmEtcmVmcmVzaCcsXG4gICAgICAgICAgICAgICAgZXhlY3V0ZU1ldGhvZDogYmxhZGUucmVmcmVzaCxcbiAgICAgICAgICAgICAgICBjYW5FeGVjdXRlTWV0aG9kOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgYmxhZGUucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICBibGFkZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBibGFkZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBwYXltZW50TWV0aG9kcy5zZWFyY2goe1xuICAgICAgICAgICAgc3RvcmVJZDogYmxhZGUuc3RvcmVJZFxuICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgYmxhZGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBibGFkZS5jdXJyZW50RW50aXRpZXMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgICAgICBibGFkZS5zZWxlY3RlZFBheW1lbnRNZXRob2RzID0gXy5maW5kV2hlcmUoYmxhZGUuY3VycmVudEVudGl0aWVzLCB7IGlzQWN0aXZlOiB0cnVlIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGJsYWRlTmF2aWdhdGlvblNlcnZpY2Uuc2V0RXJyb3IoJ0Vycm9yICcgKyBlcnJvci5zdGF0dXMsIGJsYWRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHNjb3BlLnNlbGVjdE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWROb2RlSWQgPSBub2RlLnR5cGVOYW1lO1xuICAgICAgICB2YXIgbmV3QmxhZGUgPSB7XG4gICAgICAgICAgICBpZDogJ3BheW1lbnRNZXRob2REZXRhaWwnLFxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogbm9kZSxcbiAgICAgICAgICAgIHN0b3JlSWQ6IGJsYWRlLnN0b3JlSWQsXG4gICAgICAgICAgICBzdWJ0aXRsZTogJ3BheW1lbnQuYmxhZGVzLnBheW1lbnQtbWV0aG9kLWRldGFpbC5zdWJ0aXRsZScsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAndmlydG9Db21tZXJjZS5wYXltZW50TW9kdWxlLnBheW1lbnRNZXRob2REZXRhaWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnTW9kdWxlcy8kKFZpcnRvQ29tbWVyY2UuUGF5bWVudCkvU2NyaXB0cy9ibGFkZXMvcGF5bWVudE1ldGhvZC1kZXRhaWwudHBsLmh0bWwnXG4gICAgICAgIH07XG4gICAgICAgIGJsYWRlTmF2aWdhdGlvblNlcnZpY2Uuc2hvd0JsYWRlKG5ld0JsYWRlLCAkc2NvcGUuYmxhZGUpO1xuICAgIH07XG5cbiAgICBpbml0aWFsaXplQmxhZGUoKTtcblxufV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ3ZpcnRvQ29tbWVyY2UucGF5bWVudE1vZHVsZScpXG4uZmFjdG9yeSgndmlydG9Db21tZXJjZS5wYXltZW50TW9kdWxlLnBheW1lbnRNZXRob2RzJywgWyckcmVzb3VyY2UnLCBmdW5jdGlvbiAoJHJlc291cmNlKSB7XG4gICAgcmV0dXJuICRyZXNvdXJjZSgnYXBpL3BheW1lbnQnLCB7fSwge1xuICAgICAgICBnZXRBbGxSZWdpc3RlcmVkOiB7IG1ldGhvZDogJ0dFVCcsIGlzQXJyYXk6IHRydWUgfSxcbiAgICAgICAgc2VhcmNoOiB7IG1ldGhvZDogJ1BPU1QnLCB1cmw6ICdhcGkvcGF5bWVudC9zZWFyY2gnIH0sXG4gICAgICAgIGdldDogeyB1cmw6ICdhcGkvcGF5bWVudC86aWQnIH0sXG4gICAgICAgIHVwZGF0ZTogeyBtZXRob2Q6ICdQVVQnIH0sXG4gICAgfSk7XG59XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgndmlydG9Db21tZXJjZS5wYXltZW50TW9kdWxlJykuY29udHJvbGxlcigndmlydG9Db21tZXJjZS5wYXltZW50TW9kdWxlLnN0b3JlUGF5bWVudHNXaWRnZXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAncGxhdGZvcm1XZWJBcHAuYmxhZGVOYXZpZ2F0aW9uU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsIGJsYWRlTmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICB2YXIgYmxhZGUgPSAkc2NvcGUuYmxhZGU7XG5cbiAgICAkc2NvcGUub3BlbkJsYWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV3QmxhZGUgPSB7XG4gICAgICAgICAgICBpZDogXCJzdG9yZUNoaWxkQmxhZGVcIixcbiAgICAgICAgICAgIHN0b3JlSWQ6IGJsYWRlLmN1cnJlbnRFbnRpdHkuaWQsXG4gICAgICAgICAgICB0aXRsZTogYmxhZGUudGl0bGUsXG4gICAgICAgICAgICBzdWJ0aXRsZTogJ3BheW1lbnQud2lkZ2V0cy5zdG9yZS1wYXltZW50LXdpZGdldC5ibGFkZS1zdWJ0aXRsZScsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAndmlydG9Db21tZXJjZS5wYXltZW50TW9kdWxlLnBheW1lbnRNZXRob2RMaXN0Q29udHJvbGxlcicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ01vZHVsZXMvJChWaXJ0b0NvbW1lcmNlLlBheW1lbnQpL1NjcmlwdHMvYmxhZGVzL3BheW1lbnRNZXRob2QtbGlzdC50cGwuaHRtbCdcbiAgICAgICAgfTtcbiAgICAgICAgYmxhZGVOYXZpZ2F0aW9uU2VydmljZS5zaG93QmxhZGUobmV3QmxhZGUsIGJsYWRlKTtcbiAgICB9O1xufV0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==