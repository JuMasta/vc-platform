var storefrontApp = angular.module('storefrontApp');

storefrontApp.service('dialogService', ['$uibModal', function ($uibModal) {
    return {
        showDialog: function (dialogData, controller, templateUrl) {
            var modalInstance = $uibModal.open({
                controller: controller,
                templateUrl: templateUrl,
                resolve: {
                    dialogData: function () {
                        return dialogData;
                    }
                }
            });
            return modalInstance;
        }
    }
}]);

storefrontApp.service('mailingService', ['$http', 'apiBaseUrl', function ($http, apiBaseUrl) {
    return {
        sendProduct: function(id, data) {
            return $http.post(apiBaseUrl + 'api/b2b/send/product/' + id, data);
        }
    }
}]);

storefrontApp.service('feedbackService', ['$http', function ($http) {
    return {
        postFeedback: function (data) {
            return $http.post('storefrontapi/feedback', { model: data });
        }
    }
}]);

storefrontApp.service('marketingService', ['$http', function ($http) {
    return {
        getDynamicContent: function (placeName) {
            return $http.get('storefrontapi/marketing/dynamiccontent/' + placeName + '?t=' + new Date().getTime());
        },
    }
}]);

storefrontApp.service('pricingService', ['$http', function ($http) {
	return {
		getActualProductPrices: function (products) {
		    return $http.post('storefrontapi/pricing/actualprices', products);
		}
	}
}]);

storefrontApp.service('catalogService', ['$http', function ($http) {
    return {
        getProduct: function (productIds) {
            return $http.get('storefrontapi/products?productIds=' + productIds + '&t=' + new Date().getTime());
        },
        getProducts: function(productIds) {
            return $http.get('storefrontapi/products?' + productIds + '&t=' + new Date().getTime());
        },
        search: function (criteria) {
            return $http.post('storefrontapi/catalog/search', criteria);
        },
        searchCategories: function (criteria) {
            return $http.post('storefrontapi/categories/search', criteria);
        }
    }
}]);

storefrontApp.service('cartService', ['$http', function ($http) {
    return {
        getCart: function () {
            return $http.get('storefrontapi/cart?t=' + new Date().getTime());
        },
        getCartItemsCount: function () {
            return $http.get('storefrontapi/cart/itemscount?t=' + new Date().getTime());
        },
        addLineItem: function (productId, quantity) {
            return $http.post('storefrontapi/cart/items', { id: productId, quantity: quantity });
        },
        changeLineItemQuantity: function (lineItemId, quantity) {
            return $http.put('storefrontapi/cart/items', { lineItemId: lineItemId, quantity: quantity });
        },
        changeLineItemsQuantity: function(items) {
            return $http.put('storefrontapi/cart/items', items);
        },
        removeLineItem: function (lineItemId) {
            return $http.delete('storefrontapi/cart/items?lineItemId=' + lineItemId);
        },
        changeLineItemPrice: function (lineItemId, newPrice) {
        	return $http.put('storefrontapi/cart/items/price', { lineItemId: lineItemId, newPrice: newPrice});
        },
        clearCart: function () {
            return $http.post('storefrontapi/cart/clear');
        },     
        addCoupon: function (couponCode) {
            return $http.post('storefrontapi/cart/coupons/' + couponCode);
        },
        removeCoupon: function () {
            return $http.delete('storefrontapi/cart/coupons');
        },
        addOrUpdateShipment: function (shipment) {
            return $http.post('storefrontapi/cart/shipments', shipment);
        },
        addOrUpdatePayment: function (payment) {
            return $http.post('storefrontapi/cart/payments', payment );
        },
        getAvailableShippingMethods: function (shipmentId) {
            return $http.get('storefrontapi/cart/shipments/' + shipmentId + '/shippingmethods?t=' + new Date().getTime());
        },
        getAvailablePaymentMethods: function () {
            return $http.get('storefrontapi/cart/paymentmethods?t=' + new Date().getTime());
        },
        addOrUpdatePaymentPlan: function (plan) {
            return $http.post('storefrontapi/cart/paymentPlan', plan);
        },
        removePaymentPlan: function () {
            return $http.delete('storefrontapi/cart/paymentPlan');
        },
        createOrder: function (bankCardInfo) {
            return $http.post('storefrontapi/cart/createorder', { bankCardInfo: bankCardInfo });
        }
    }
}]);



storefrontApp.service('quoteRequestService', ['$http', function ($http) {
    return {
        getCurrentQuoteRequest: function () {
            return $http.get('storefrontapi/quoterequest/current?t=' + new Date().getTime());
        },
        getQuoteRequest: function (number) {
            return $http.get('storefrontapi/quoterequests/' + number + '?t=' + new Date().getTime());
        },
        getQuoteRequestItemsCount: function (number) {
            return $http.get('storefrontapi/quoterequests/' + number + '/itemscount?t=' + new Date().getTime());
        },
        addProductToQuoteRequest: function (productId, quantity) {
            return $http.post('storefrontapi/quoterequests/current/items', { productId: productId, quantity: quantity });
        },
        removeProductFromQuoteRequest: function (quoteRequestNumber, quoteItemId) {
            return $http.delete('storefrontapi/quoterequests/' + quoteRequestNumber + '/items/' + quoteItemId);
        },
        submitQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/submit', { quoteForm: quoteRequest });
        },
        rejectQuoteRequest: function (quoteRequestNumber) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/reject');
        },
        updateQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.put('storefrontapi/quoterequests/' + quoteRequestNumber + '/update', { quoteRequest: quoteRequest });
        },
        getTotals: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/totals', { quoteRequest: quoteRequest });
        },
        confirmQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/confirm', { quoteRequest: quoteRequest });
        }
    }
}]);

storefrontApp.service('recommendationService', ['$http', function ($http) {
    return {
        getRecommendedProducts: function (requestData) {
            return $http.post('storefrontapi/recommendations', requestData );
        }
    }
}]);

storefrontApp.service('orderService', ['$http', function ($http) {
    return {
        getOrder: function (orderNumber) {
            return $http.get('storefrontapi/orders/' + orderNumber + '?t=' + new Date().getTime());
        }
    }
}]);

storefrontApp.service('compareProductService', ['$http', '$localStorage', function($http, $localStorage) {
    return {
        isInProductCompareList: function(productId) {
            var containProduct;
            if (!_.some($localStorage['productCompareListIds'], function(id) { return id === productId })) {
                containProduct = false;
            }
            else
                containProduct = true
            return containProduct;
        },
        addProduct: function(productId) {
            if (!$localStorage['productCompareListIds']) {
                $localStorage['productCompareListIds'] = [];
            }
            $localStorage['productCompareListIds'].push(productId);
            _.uniq($localStorage['productCompareListIds']);
        },
        getProductsIds: function() {
            if (!$localStorage['productCompareListIds']) {
                $localStorage['productCompareListIds'] = [];
                return;
            }
            var ids = [];
            for (i = 0; i < $localStorage['productCompareListIds'].length; i++) {
                ids.push('productIds=' + $localStorage['productCompareListIds'][i]);
            }
            return ids.join("&");
        },
        getProductsCount: function() {
            var count = $localStorage['productCompareListIds'] ? $localStorage['productCompareListIds'].length : 0;
            return count;
        },
        clearCompareList: function() {
            $localStorage['productCompareListIds'] = [];
        },
        removeProduct: function(productId) {
            $localStorage['productCompareListIds'] = _.without($localStorage['productCompareListIds'], productId);
        }
    }
}]);


storefrontApp.service('commonService', ['$http', function ($http) {
    return {
        getCountries: function () {
            return $http.get('storefrontapi/countries?t=' + new Date().getTime());
        },
        getCountryRegions: function (countryCode) {
            return $http.get('storefrontapi/countries/' + countryCode + '/regions?t=' + new Date().getTime());
        }
    }
}]);

storefrontApp.service('customerService', ['$http', function ($http) {
    return {
        getCurrentCustomer: function () {
            return $http.get('storefrontapi/account?t=' + new Date().getTime());
        }
    }
}]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('mainController', ['$rootScope', '$scope', '$location', '$window', 'accountApi', 'storefrontApp.mainContext', 'loadingIndicatorService',
    function ($rootScope, $scope, $location, $window, accountApi, mainContext, loader) {
        var $ctrl = this;
        $ctrl.loader = loader;

        //Base store url populated in layout and can be used for construction url inside controller
        $scope.baseUrl = {};

        $rootScope.$on('$locationChangeSuccess', function () {
            var path = $location.path();
            if (path) {
                $scope.currentPath = path.replace('/', '');
            }
        });

        $rootScope.$on('storefrontError', function (event, data) {
            $rootScope.storefrontNotification = data;
            $rootScope.storefrontNotification.detailsVisible = false;
        });

        $rootScope.toggleNotificationDetails = function () {
            $rootScope.storefrontNotification.detailsVisible = !$rootScope.storefrontNotification.detailsVisible;
        }

        $rootScope.closeNotification = function () {
            $rootScope.storefrontNotification = null;
        }

        //For outside app redirect (To reload the page after changing the URL, use the lower-level API)
        $scope.outerRedirect = function (absUrl) {
            $window.location.href = absUrl;
        };

        //change in the current URL or change the current URL in the browser (for app route)
        $scope.innerRedirect = function (path) {
            $location.path(path);
            $scope.currentPath = $location.$$path.replace('/', '');
        };

        $scope.stringifyAddress = function (address) {
            var stringifiedAddress = address.firstName + ' ' + address.lastName + ', ';
            stringifiedAddress += address.organization ? address.organization + ', ' : '';
            stringifiedAddress += address.countryName + ', ';
            stringifiedAddress += address.regionName ? address.regionName + ', ' : '';
            stringifiedAddress += address.city + ' ';
            stringifiedAddress += address.line1 + ', ';
            stringifiedAddress += address.line2 ? address.line2 : '';
            stringifiedAddress += address.postalCode;
            return stringifiedAddress;
        }

        $scope.getObjectSize = function (obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    size++;
                }
            }
            return size;
        }

        mainContext.loadCustomer = $scope.loadCustomer = function () {
            return loader.wrapLoading(function() {
                return accountApi.getCurrentUser().then(function (response) {
                    var addressId = 1;
                    _.each(response.data.addresses, function (address) {
                        address.id = addressId;
                        addressId++;
                    });
                    response.data.isContact = response.data.memberType === 'Contact';
                    mainContext.customer = $scope.customer = response.data;
                    return response.data;
                });
                
            });
        };

       $scope.loadCustomer();
    }])

    .factory('storefrontApp.mainContext', function () {
        return {};
    });

var storefrontApp = angular.module('storefrontApp');
storefrontApp.component('vcAddress', {
    templateUrl: "themes/assets/address.tpl.html",
    bindings: {
        address: '=',
        addresses: '<',
        countries: '=',
        validationContainer: '=',
        getCountryRegions: '&',
        editMode: '<',
        onUpdate: '&'
    },
    require: {
        checkoutStep: '?^vcCheckoutWizardStep'
    },
    transclude: {
        header: '?addressHeader', footer: '?addressFooter'
    },
    controller: ['$scope', function ($scope) {
        var ctrl = this;
        ctrl.types = [{ id: 'Billing', name: 'Billing' }, { id: 'Shipping', name: 'Shipping' }, { id: 'BillingAndShipping', name: 'Billing and Shipping' }];
        
        this.$onInit = function () {
            if (ctrl.validationContainer)
                ctrl.validationContainer.addComponent(this);
            if (ctrl.checkoutStep)
                ctrl.checkoutStep.addComponent(this);
        };

        this.$onDestroy = function () {
            if (ctrl.validationContainer)
                ctrl.validationContainer.removeComponent(this);
            if (ctrl.checkoutStep)
                ctrl.checkoutStep.removeComponent(this);
        };

        function populateRegionalDataForAddress(address) {
            if (address) {
                //Set country object for address
                address.country = _.findWhere(ctrl.countries, { code3: address.countryCode });
                if (address.country != null) {
                    ctrl.address.countryName = ctrl.address.country.name;
                    ctrl.address.countryCode = ctrl.address.country.code3;
                }

                if (address.country) {
                    if (address.country.regions) {
                        setAddressRegion(address, address.country.regions);
                    }
                    else {
                        ctrl.getCountryRegions({ country: address.country }).then(function (regions) {
                            address.country.regions = regions;
                            setAddressRegion(address, regions);
                        });
                    }
                }
            }
        }

        function setAddressRegion(address, regions) {
            address.region = _.findWhere(regions, { code: address.regionId });
            if (address.region) {
                ctrl.address.regionId = ctrl.address.region.code;
                ctrl.address.regionName = ctrl.address.region.name;
            }
            else {
                ctrl.address.regionId = undefined;
                ctrl.address.regionName = undefined;
            }
        }

        ctrl.setForm = function (frm) { ctrl.form = frm; };

        ctrl.validate = function () {
            if (ctrl.form) {
                ctrl.form.$setSubmitted();
                return ctrl.form.$valid;
            }
            return true;
        };

        function stringifyAddress(address) {
            var addressType = '';

            var type = _.find(ctrl.types, function (i) { return i.id == ctrl.address.addressType });
            if (type)
                addressType = '[' + type.name + '] ';

            var stringifiedAddress = addressType;
            stringifiedAddress += address.firstName + ' ' + address.lastName + ', ';
            stringifiedAddress += address.organization ? address.organization + ', ' : '';
            stringifiedAddress += address.countryName + ', ';
            stringifiedAddress += address.regionName ? address.regionName + ', ' : '';
            stringifiedAddress += address.city + ' ';
            stringifiedAddress += address.line1 + ', ';
            stringifiedAddress += address.line2 ? address.line2 : '';
            stringifiedAddress += address.postalCode;
            return stringifiedAddress;
        }

        $scope.$watch('$ctrl.address', function () {
            if (ctrl.address) {
                populateRegionalDataForAddress(ctrl.address);
                ctrl.address.name = stringifyAddress(ctrl.address);
            }
            ctrl.onUpdate({ address: ctrl.address });
        }, true);

    }]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcCreditCard', {
    templateUrl: "themes/assets/js/common-components/creditCard.tpl.html",
    require: {
        checkoutStep: '?^vcCheckoutWizardStep'
    },
    bindings: {
        card: '=',
        validationContainer: '='
    },
    controller: ['$scope', '$filter', function ($scope, $filter) {
        var ctrl = this;

        this.$onInit = function () {
            if(ctrl.validationContainer)
                ctrl.validationContainer.addComponent(this);
            if (ctrl.checkoutStep)
                ctrl.checkoutStep.addComponent(this);
        };

        this.$onDestroy = function () {
            if (ctrl.validationContainer)
                ctrl.validationContainer.removeComponent(this);
            if (ctrl.checkoutStep)
                ctrl.checkoutStep.removeComponent(this);
        };

        $scope.$watch('$ctrl.card.bankCardHolderName', function (val) {
            if (ctrl.card) {
                ctrl.card.bankCardHolderName = $filter('uppercase')(val);
            }
        }, true);

        ctrl.validate = function () {
            ctrl.form.$setSubmitted();
            return !ctrl.form.$invalid;
        }

    }]
});

var storefrontApp = angular.module('storefrontApp');
storefrontApp.component('vcErrors', {
    templateUrl: "themes/assets/errors.tpl.html",
    bindings: {
        level: '<',
        message: '<',
        errors: '<'
    },
    controller: [function () {
        var $ctrl = this;
        $ctrl.level = $ctrl.level || 'danger';
    }]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcItemAvailability', {
    templateUrl: "themes/assets/js/common-components/item-availability.tpl.html",
    bindings: {
        availability: "<"
    },
    controller: [function() {
        var $ctrl = this;       
    }]
});

angular.module('storefrontApp')

.component('vcLabeledInput', {
    templateUrl: "themes/assets/labeled-input.tpl.html",
    bindings: {
        value: '=',
        form: '=',
        name: '@',
        inputClass: '<',
        placeholder: '@',
        type: '@?',
        required: '<',
        requiredError: '@?',
        autofocus: '<',
        pattern: '@',
        disabled: '<'
    },
    controller: [function () {
        var $ctrl = this;
        
        $ctrl.validate = function () {
            $ctrl.form.$setSubmitted();
            return $ctrl.form.$valid;
        };

    }]
});

angular.module('storefrontApp')

    .component('vcLabeledSelect', {
        templateUrl: "themes/assets/labeled-select.tpl.html",
        require: {
            ngModel: "?ngModel"
        },
        bindings: {
            options: '<',
            select: '&',
            form: '<',
            name: '@',
            placeholder: '<',
            required: '<',
            requiredError: '@?',
            autofocus: '<',
            isOpen: '=?',
            disabled: '<'
        },
        controller: ['$scope', function ($scope) {
            var $ctrl = this;

            $ctrl.$onInit = function () {
                if ($ctrl.required)
                    $ctrl.ngModel.$setValidity('required', false);
                $ctrl.ngModel.$render = function () {
                    $ctrl.value = $ctrl.ngModel.$viewValue;
                };
            };

            $ctrl.validate = function () {
                $ctrl.form.$setSubmitted();
                return $ctrl.form.$valid;
            };

            var select = $ctrl.select;
            $ctrl.select = function (option) {
                $ctrl.value = option;
                if ($ctrl.required)
                    $ctrl.ngModel.$setValidity('required', false);
                $ctrl.ngModel.$setViewValue($ctrl.value);
                select(option);
            };
        }]
    });

angular.module('storefrontApp')

.component('vcLabeledTextArea', {
    templateUrl: "themes/assets/labeled-textarea.tpl.html",
    bindings: {
        value: '=',
        form: '=',
        name: '@',
        label: '@',
        required: '<',
        requiredError: '@?',
        pattern: '<?',
        autofocus: '<'
    },
    controller: [function () {
        var $ctrl = this;

        $ctrl.validate = function () {
            $ctrl.form.$setSubmitted();
            return $ctrl.form.$valid;
        };

    }]
});
var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcLineItems', {
    templateUrl: "themes/assets/js/common-components/lineItems.tpl.liquid",
    bindings: {
        items: '='
    }
});

var storefrontApp = angular.module('storefrontApp');
storefrontApp.component('vcMember', {
    templateUrl: "themes/assets/member.tpl.html",
    bindings: {
        member: '=',
        memberComponent: '='
    },
    controller: ['$scope', function ($scope) {
        var $ctrl = this;

        this.$onInit = function () {
            $ctrl.memberComponent = this;
        };

        this.$onDestroy = function () {
            $ctrl.memberComponent = null;
        };

        $ctrl.setForm = function (frm) { $ctrl.form = frm; };


        $ctrl.validate = function () {
            if ($ctrl.form) {
                $ctrl.form.$setSubmitted();
                return $ctrl.form.$valid;
            }
            return true;
        };
    }]
});

var storefrontApp = angular.module('storefrontApp');
storefrontApp.component('vcMemberDetail', {
    templateUrl: "themes/assets/memberDetail.tpl.html",
    bindings: {
        member: '=',
        memberComponent: '=',
        fieldsConfig: '<'
    },
    controller: ['$scope', 'availableRoles', function ($scope, availableRoles) {
        var $ctrl = this;
        
        $ctrl.config = [
            {
                field: 'CompanyName',
                disabled: false,
                visible: true,
                required: true
            },
            {
                field: 'Email',
                disabled: false,
                visible: true,
                required: true
            },
            {
                field: 'UserName',
                disabled: false,
                visible: true
            },
            {
                field: 'Password',
                disabled: false,
                visible: true
            },
            {
                field: 'Roles',
                disabled: false,
                visible:  false
            }
        ];

        if ($ctrl.fieldsConfig)
            angular.extend($ctrl.config, $ctrl.fieldsConfig);


        $ctrl.availableRoles = availableRoles;

        $scope.$watch('$ctrl.member', function (member) {
            //Need to replace member.role to the same object from roles list for correct ui-select works
            if (member && member.roles) {
                member.role = _.find($ctrl.availableRoles, function (x) { return x.id == member.roles[0].id });
            }
        });     

        $ctrl.rolesComponent = null;

        this.$onInit = function () {
            $ctrl.memberComponent = this;
        };

        this.$onDestroy = function () {
            $ctrl.memberComponent = null;
        };

        $ctrl.setForm = function (frm) {
            $ctrl.form = frm;
        };

        $ctrl.validate = function () {
            if ($ctrl.form) {
                $ctrl.form.$setSubmitted();
                return $ctrl.form.$valid;
            }
            return true;
        };

        $ctrl.showField = function (field) {
            return getFieldConfig(field).visible == true;
        }

        $ctrl.disableField = function (field) {
            return getFieldConfig(field).disabled == true;
        }

        $ctrl.requiredField = function (field) {
            return getFieldConfig(field).required == true;
        }

        function getFieldConfig(field) {
            var configItem = _.first(_.filter($ctrl.config, function (configItem) { return configItem.field === field; }));
            return configItem;
        }
    }]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcPaymentMethods', {
    templateUrl: "themes/assets/js/common-components/paymentMethods.tpl.html",
    require: {
        checkoutStep: '?^vcCheckoutWizardStep'
    },
    bindings: {
        getAvailPaymentMethods: '&',
        onSelectMethod: '&',
        paymentMethod: '=',
        validationContainer: '='
    },
    controller: ['$scope', function ($scope) {
        var ctrl = this;

        this.$onInit = function () {
            ctrl.getAvailPaymentMethods().then(function (methods) {
                ctrl.availPaymentMethods = _.sortBy(methods, function (x) { return x.priority; });
                if (ctrl.paymentMethod) {
                    ctrl.paymentMethod = _.findWhere(ctrl.availPaymentMethods, { code: ctrl.paymentMethod.code });
                }
                if (!ctrl.paymentMethod && ctrl.availPaymentMethods.length > 0) {
                    ctrl.selectMethod(ctrl.availPaymentMethods[0]);
                }
            })
            if (ctrl.validationContainer)
                ctrl.validationContainer.addComponent(this);
            if (ctrl.checkoutStep)
                ctrl.checkoutStep.addComponent(this);
        };

        this.$onDestroy = function () {
            if (ctrl.validationContainer)
                ctrl.validationContainer.removeComponent(this);
            if (ctrl.checkoutStep)
                ctrl.checkoutStep.removeComponent(this);
        };

        ctrl.validate = function () {
            return ctrl.paymentMethod;
        }

        ctrl.selectMethod = function (method) {
            ctrl.paymentMethod = method;
            ctrl.onSelectMethod({ paymentMethod: method });
        };
    }]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcPaymentPlan', {
    templateUrl: "themes/assets/js/common-components/paymentPlan.tpl.html",
    bindings: {
        availablePaymentPlans: '<',
    },
    controller: [function() {
        var $ctrl = this;
        $ctrl.type = 'once';
        $ctrl.paymentPlan = $ctrl.availablePaymentPlans[0];
 
    }]
});

var storefrontApp = angular.module('storefrontApp');
storefrontApp.component('vcSearchBar', {
    templateUrl: "themes/assets/js/common-components/searchBar.tpl.html",
    bindings: {
        formClass: '<',
        placeholder: '<',
        searching: '<',
        noResults: '<',
        query: '@',
        categoriesLabel: '<',
        productsLabel: '<',
        submitLabel: '<',
        categoryLimit: '@',
        productLimit: '@'
    },
    controller: ['$scope', '$q', 'catalogService', function ($scope, $q, catalogService) {
        var $ctrl = this;
        $ctrl.hasHint = false;

        $scope.$watch('$ctrl.isOpen', function (isOpen) {
            $ctrl.hasHint = !!$ctrl.query && !isOpen;
        });

        $scope.$watch('$ctrl.query', function (query) {
            $ctrl.hasHint = !!query && !$ctrl.isOpen;
        });

        $ctrl.getSuggestions = function () {
            var searchCriteria = { keyword: $ctrl.query, start: 0, isFuzzySearch: true };
            return $q.all([
                catalogService.searchCategories(angular.extend({}, searchCriteria, { pageSize: $ctrl.categoryLimit })),
                catalogService.search(angular.extend({}, searchCriteria, { pageSize: $ctrl.productLimit }))
            ]).then(function (results) {
                var process = function (within) {
                    return (results[0].data[within] || results[1].data[within]).map(function (suggestion) {
                        suggestion['within'] = within;
                        return suggestion;
                    });
                }
                return process('categories').concat(process('products')).map(function (suggestion, index) {
                    suggestion['index'] = index;
                    return suggestion;
                });
            });
        };
    }]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.constant('vcTotalsDefaults', {
    show: {
        subtotal: true,
        taxes: true,
        shipping: true,
        payment: true,
        discount: true
    },
    complete: false
});

storefrontApp.component('vcTotals', {
    templateUrl: "themes/assets/js/common-components/totals.tpl.liquid",
	bindings: {
        order: '<',
        options: '<'
    },
    controller: ['vcTotalsDefaults', function(defaults) {
        var $ctrl = this;

        $ctrl.options = angular.merge({ }, defaults, $ctrl.options);

        var fieldSuffix = $ctrl.showWithTaxes ? 'WithTax' : '';
        $ctrl.fieldNames = {
            subTotal: 'subTotal' + fieldSuffix,
            shippingPrice: 'shippingPrice' + fieldSuffix,
            shippingTotal: 'shippingTotal' + fieldSuffix,
            payment: 'paymentPrice' + fieldSuffix,
            discount: 'discountTotal' + fieldSuffix
        };
    }]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcCheckoutCoupon', {
    templateUrl: "themes/assets/js/checkout/checkout-coupon.tpl.html",
	bindings: {
        coupon: '=',
        loader: '=',
		onApplyCoupon: '&',
		onRemoveCoupon: '&'
	},
	controller: [function (loader) {
        var $ctrl = this;
	}]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcCheckoutDeliveryMethod', {
    templateUrl: "themes/assets/js/checkout/checkout-delivery-method.tpl.html",
    require: {
        checkoutStep: '^vcCheckoutWizardStep'
    },
    bindings: {
        deliveryMethod: '=',
        onEvalAvailability: '&',
        defaultMethodType: '<'
    },
    controller: ['$scope', 'dialogService', function ($scope, dialogService) {
        var ctrl = this;

        if (!ctrl.defaultMethodType) {
            ctrl.defaultMethodType = 'shipping';
        };

        this.$onInit = function () {
            ctrl.checkoutStep.addComponent(this);
        };

        this.$onDestroy = function () {
            ctrl.checkoutStep.removeComponent(this);
        };
        this.evalAvailability = function () {
            ctrl.onEvalAvailability({ deliveryMethod: ctrl.deliveryMethod });
        }

        ctrl.validate = function () {
            return true;
        }

        ctrl.selectFulfillmentCenter = function () {
            var dialogInstance = dialogService.showDialog({ isFilter: true }, 'universalDialogController', 'storefront.select-fulfillment-center-dialog.tpl');
            dialogInstance.result.then(function (result) {
                ctrl.deliveryMethod.fulfillmentCenter = result;
                ctrl.evalAvailability();
            });
        };

        $scope.$watch('$ctrl.deliveryMethod', function () {
            if (ctrl.deliveryMethod) {
                ctrl.deliveryMethod.type = ctrl.deliveryMethod.type ? ctrl.deliveryMethod.type : ctrl.defaultMethodType;
            }
        }, true);
    }]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcCheckoutEmail', {
	templateUrl: "themes/assets/js/checkout/checkout-email.tpl.html",
	require: {
		checkoutStep: '^vcCheckoutWizardStep'
	},
	bindings: {
		email: '='
	},
	controller: [function () {
		var ctrl = this;

		this.$onInit = function () {
			ctrl.checkoutStep.addComponent(this);
		};

		this.$onDestroy = function () {
			ctrl.checkoutStep.removeComponent(this);
		};
	
		ctrl.validate = function () {
			ctrl.form.$setSubmitted();
			return !ctrl.form.$invalid;
		}

	}]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcCheckoutLineItem', {
    templateUrl: "themes/assets/js/checkout/checkout-line-item.tpl.html",
    require: {
        checkoutStep: '^vcCheckoutWizardStep'
    },
    bindings: {
        lineItem: '=',
        onChangeQty: '&',
        onRemove: '&',
        readOnly: '<'
    },
    controller: ['$scope', 'availablePaymentPlans', function ($scope, availablePaymentPlans) {
        var ctrl = this;
        ctrl.availablePaymentPlans = availablePaymentPlans;
        this.$onInit = function () {
            ctrl.checkoutStep.addComponent(this);
        };

        this.$onDestroy = function () {
            ctrl.checkoutStep.removeComponent(this);
        };

        this.changeQty = function () {
            if (ctrl.onChangeQty) {
                ctrl.onChangeQty({ lineItem: ctrl.lineItem });
            }
        };
        this.remove = function () {
            ctrl.onRemove({ lineItem: ctrl.lineItem });
        }

        this.validate = function () {
            return true;
        };

        $scope.$watch('$ctrl.lineItem', function (value) {           
        }, true);
   
    }]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.component('vcCheckoutShippingMethods', {
	templateUrl: "themes/assets/js/checkout/checkout-shippingMethods.tpl.liquid",
	require: {
		checkoutStep: '^vcCheckoutWizardStep'
	},
	bindings: {
		shipment: '=',
		getAvailShippingMethods: '&',
		onSelectShippingMethod: '&'
	},
	controller: [function () {

		var ctrl = this;
		
		ctrl.availShippingMethods = [];
		ctrl.selectedMethod = {};
		this.$onInit = function () {
			ctrl.checkoutStep.addComponent(this);
			ctrl.loading = true;
			ctrl.getAvailShippingMethods(ctrl.shipment).then(function (availMethods) {
				ctrl.availShippingMethods = availMethods;
				_.each(ctrl.availShippingMethods, function (x) {
					x.id = getMethodId(x);
				});
				ctrl.selectedMethod = _.find(ctrl.availShippingMethods, function (x) { return ctrl.shipment.shipmentMethodCode == x.shipmentMethodCode && ctrl.shipment.shipmentMethodOption == x.optionName });
				ctrl.loading = false;
			});
		};		
		
		this.$onDestroy = function () {
			ctrl.checkoutStep.removeComponent(this);
		};
			
		function getMethodId(method) {
			var retVal = method.shipmentMethodCode;
			if (method.optionName) {
				retVal += ':' + method.optionName;
			}
			return retVal;
		}

		ctrl.selectMethod = function (method) {
			ctrl.selectedMethod = method;
			ctrl.onSelectShippingMethod({ shippingMethod: method });
		};
	
		ctrl.validate = function () {
			ctrl.form.$setSubmitted();
			return !ctrl.form.$invalid;
		}
	}]
});

var storefrontApp = angular.module('storefrontApp');
storefrontApp.component('vcCheckoutWizardStep', {
    templateUrl: "themes/assets/js/checkout/checkout-wizard-step.tpl.html",
    transclude: true,
    require: {
        wizard: '^vcCheckoutWizard'
    },
    bindings: {
        name: '@',
        title: '@',
        stepDisabled: '=?',
        onNextStep: '&?',
        canEnter: '=?',
        final: '<?'
    },
    controller: [function () {
        var ctrl = this;
        ctrl.components = [];
        ctrl.canEnter = true;

        this.$onInit = function () {
            ctrl.wizard.addStep(this);
        };

        ctrl.addComponent = function (component) {
            ctrl.components.push(component);
        };
        ctrl.removeComponent = function (component) {
            ctrl.components = _.without(ctrl.components, component);
        };
        ctrl.validate = function () {
            return _.every(ctrl.components, function (x) { return typeof x.validate !== "function" || x.validate(); });
        }
    }]
});

var storefrontApp = angular.module('storefrontApp');
storefrontApp.component('vcCheckoutWizard', {
	transclude: true,
	templateUrl: 'themes/assets/js/checkout/checkout-wizard.tpl.html',
	bindings: {
		wizardModel: '=',
		loading: '=',
		onFinish: '&?',
		onInitialized: '&?'
	},
	controller: ['$scope', function ($scope) {
		var ctrl = this;
        ctrl.wizardModel = ctrl;
		ctrl.steps = [];	
		ctrl.goToStep = function (step) {
			if (angular.isString(step))
			{
				step = _.find(ctrl.steps, function (x) { return x.name == step; });
			}
            if (step && ctrl.currentStep != step && step.canEnter) {
                step.isActive = true;
                if (ctrl.currentStep) {
                    ctrl.currentStep.isActive = false;
                }
                ctrl.currentStep = step;
                if (step.final && ctrl.onFinish) {
                    ctrl.onFinish();
                }
            }
        };

		ctrl.nextStep = function () {
			if (!ctrl.currentStep.validate || ctrl.currentStep.validate()) {
				if (ctrl.currentStep.nextStep) {
					if (ctrl.currentStep.onNextStep) {
						//evaluate onNextStep function
						var promise = ctrl.currentStep.onNextStep();
						//For promise function need to delay going to next step
						if (promise && angular.isFunction(promise.then)) {
							promise.then(function () {
								ctrl.goToStep(ctrl.currentStep.nextStep);
							});
						}
						else
						{
							ctrl.goToStep(ctrl.currentStep.nextStep);
						}
					}
					else {
						ctrl.goToStep(ctrl.currentStep.nextStep);
					}
				}			
			}
		};

		ctrl.prevStep = function () {
			ctrl.goToStep(ctrl.currentStep.prevStep);
		};

		function rebuildStepsLinkedList(steps) {
			var nextStep = undefined;
			for (var i = steps.length; i-- > 0;) {
				steps[i].prevStep = undefined;
				steps[i].nextStep = undefined;
				if (nextStep && !steps[i].disabled) {
					nextStep.prevStep = steps[i]
				};				
				if (!steps[i].disabled) {
					steps[i].nextStep = nextStep;
					nextStep = steps[i];
				}
			}		
		};
		
		ctrl.addStep = function (step) {
			ctrl.steps.push(step);
			$scope.$watch(function () { return step.disabled; }, function () {
				rebuildStepsLinkedList(ctrl.steps);			
			});
			rebuildStepsLinkedList(ctrl.steps);
			if(!ctrl.currentStep)
			{
				ctrl.goToStep(step);
			}
			if (step.final && ctrl.onInitialized)
			{
				ctrl.onInitialized();
			}
		};

	}]
});

//Call this to register our module to main application
var moduleName = "storefront.checkout";

if (storefrontAppDependencies != undefined) {
    storefrontAppDependencies.push(moduleName);
}
angular.module(moduleName, ['credit-cards', 'angular.filter'])
    .controller('checkoutController', ['$rootScope', '$scope', '$window', 'cartService', 'commonService', 'dialogService', 'orderService',
        function ($rootScope, $scope, $window, cartService, commonService, dialogService, orderService) {
            $scope.checkout = {
                wizard: {},
                order: {},
                deliveryAddress: {},
                paymentMethod: {},
                shipmentMethod: {},
                deliveryMethod: {},
                shipment: {},
                payment: {},
                coupon: {},
                availCountries: [],               
                loading: false,
                isValid: false,
                newAddress: {}
            };

            $scope.getInvoicePdf = function () {
                var url = $window.BASE_URL + 'storefrontapi/orders/' + $scope.checkout.order.number + '/invoice';
                $window.open(url, '_blank');
            }

            $scope.changeShippingMethod = function () {
                $scope.getAvailShippingMethods($scope.checkout.shipment).then(function (response) {
                    var dialogInstance = dialogService.showDialog({ availShippingMethods: response, checkout: $scope.checkout }, 'universalDialogController', 'storefront.select-shipment-method-dialog.tpl');
                    dialogInstance.result.then(function (shipmentMethod) {
                        $scope.selectShippingMethod(shipmentMethod);
                    });
                });
            };

            $scope.changePaymentMethod = function () {
                $scope.getAvailPaymentMethods().then(function (response) {
                    var dialogInstance = dialogService.showDialog({ availPaymentMethods: response, checkout: $scope.checkout }, 'universalDialogController', 'storefront.select-payment-method-dialog.tpl');
                    dialogInstance.result.then(function (paymentMethod) {
                        $scope.selectPaymentMethod(paymentMethod);
                    });
                });
            };

            $scope.changePickupAddress = function () {
                var dialogInstance = dialogService.showDialog({}, 'universalDialogController', 'storefront.select-fulfillment-center-dialog.tpl');
                dialogInstance.result.then(function(fulfillmentCenter) {
                    $scope.checkout.deliveryMethod.fulfillmentCenter = fulfillmentCenter;
                    $scope.checkout.shipment.deliveryAddress = fulfillmentCenter.address;
                    $scope.updateShipment($scope.checkout.shipment);
                });
            };

            $scope.changeShippingAddress = function () {
                var dialogData =
                    {                     
                        checkout: $scope.checkout,
                        addresses: $scope.checkout.cart.customer.addresses
                    };

                var dialogInstance = dialogService.showDialog(dialogData, 'universalDialogController', 'storefront.select-address-dialog.tpl');
                dialogInstance.result.then(function (address) {
                    if (address == $scope.checkout.newAddress) {
                        dialogInstance = dialogService.showDialog(dialogData, 'universalDialogController', 'storefront.new-address-dialog.tpl');
                        dialogInstance.result.then(function (address) {
                            if (!$scope.checkout.cart.customer.addresses) {
                                $scope.checkout.cart.customer.addresses = [];
                            }
                            $scope.checkout.cart.customer.addresses.push(address);
                            $scope.checkout.shipment.deliveryAddress = address;
                        });
                    }
                    else {
                        $scope.checkout.shipment.deliveryAddress = address;
                    }
                    $scope.updateShipment($scope.checkout.shipment);
                });
            };

            $scope.evalAvailability = function (deliveryMethod) {
                _.each($scope.checkout.cart.items, function (x) {
                    x.availability = {
                        deliveryMethod: deliveryMethod,
                        availDate: Date.now()
                    };
                });
            };

            $scope.changeItemQty = function (lineItem) {
                return wrapLoading(function () {
                    return cartService.changeLineItemsQuantity({ lineItemId: lineItem.id, Quantity: lineItem.quantity }).then($scope.reloadCart);
                });
            };

            $scope.removeItem = function (lineItem) {
                return wrapLoading(function () {
                    return cartService.removeLineItem(lineItem.id).then($scope.reloadCart);
                });
            };
            $scope.validateCheckout = function (checkout) {
                checkout.isValid = checkout.payment && checkout.payment.paymentGatewayCode;
                if (checkout.isValid && !checkout.billingAddressEqualsShipping) {
                    checkout.isValid = angular.isObject(checkout.payment.billingAddress);
                }
                if (checkout.isValid && checkout.cart && checkout.deliveryMethod.type == 'shipping') {
                    checkout.isValid = angular.isObject(checkout.shipment)
                        && checkout.shipment.shipmentMethodCode
                        && angular.isObject(checkout.shipment.deliveryAddress);
                }
            };

            $scope.reloadCart = function () {
                return cartService.getCart().then(function (response) {
                    var cart = response.data;

                    $scope.checkout.cart = cart;
                    if (cart.payments.length) {
                        $scope.checkout.payment = cart.payments[0];
                        $scope.checkout.paymentMethod.code = $scope.checkout.payment.paymentGatewayCode;
                        $scope.getAvailPaymentMethods().then(function (response) {
                            _.each(cart.payments, function (x) {
                                var paymentMethod = _.find(response, function (pm) { return pm.code == x.paymentGatewayCode; });
                                if (paymentMethod) {
                                    angular.extend(x, paymentMethod);
                                    $scope.checkout.paymentMethod = paymentMethod;
                                }
                            });
                        });
                    }
                    if (cart.shipments.length) {
                        $scope.checkout.shipment = cart.shipments[0];
                        //Load shipment method for cart shipment
                        $scope.getAvailShippingMethods($scope.checkout.shipment).then(function (response) {
                            var shipmentMethod = _.find(response, function (sm) { return sm.shipmentMethodCode == $scope.checkout.shipment.shipmentMethodCode && sm.optionName == $scope.checkout.shipment.shipmentMethodOption; });
                            if (shipmentMethod) {
                                $scope.checkout.shipment.shipmentMethod = shipmentMethod;
                            }
                        });
                    }
                    else {
                        //Set default shipping address
                        if ($scope.checkout.cart.customer.addresses) {
                            $scope.checkout.shipment.deliveryAddress = $scope.checkout.cart.customer.addresses[0];
                        }
                    }
                    $scope.checkout.billingAddressEqualsShipping = cart.hasPhysicalProducts && !angular.isObject($scope.checkout.payment.billingAddress);

                    $scope.checkout.canCartBeRecurring = $scope.customer.isRegisteredUser && _.all(cart.items, function (x) { return !x.isReccuring });
                    $scope.checkout.paymentPlan = cart.paymentPlan && _.findWhere($scope.checkout.availablePaymentPlans, { intervalCount: cart.paymentPlan.intervalCount, interval: cart.paymentPlan.interval }) ||
                        _.findWhere($scope.checkout.availablePaymentPlans, { intervalCount: 1, interval: 'months' });

                    $scope.validateCheckout($scope.checkout);
                    return cart;
                });
            };

            $scope.selectPaymentMethod = function (paymentMethod) {
                angular.extend($scope.checkout.payment, paymentMethod);
                $scope.checkout.payment.paymentGatewayCode = paymentMethod.code;
                $scope.checkout.payment.amount = angular.copy($scope.checkout.cart.total);
                $scope.checkout.payment.amount.amount += paymentMethod.totalWithTax.amount;

                updatePayment($scope.checkout.payment);
            };

            function getAvailCountries() {
                //Load avail countries
                return commonService.getCountries().then(function (response) {
                    return response.data;
                });
            };

            $scope.checkout.getCountryRegions = $scope.getCountryRegions = function (country) {
                return commonService.getCountryRegions(country.code3).then(function (response) {
                    return response.data;
                });
            };

            $scope.getAvailShippingMethods = function (shipment) {
                return wrapLoading(function () {
                    return cartService.getAvailableShippingMethods(shipment.id).then(function (response) {
                        return response.data;
                    });
                });
            }

            $scope.getAvailPaymentMethods = function () {
                return wrapLoading(function () {
                    return cartService.getAvailablePaymentMethods().then(function (response) {
                        return response.data;
                    });
                });
            };

            $scope.selectShippingMethod = function (shippingMethod) {
                if (shippingMethod) {
                    $scope.checkout.shipment.shipmentMethodCode = shippingMethod.shipmentMethodCode;
                    $scope.checkout.shipment.shipmentMethodOption = shippingMethod.optionName;
                }
                else {
                    $scope.checkout.shipment.shipmentMethodCode = undefined;
                    $scope.checkout.shipment.shipmentMethodOption = undefined;
                }
                $scope.updateShipment($scope.checkout.shipment);
            };

            $scope.updateShipment = function (shipment) {
                if (shipment.deliveryAddress) {
                    var deliveryAddress = $scope.checkout.shipment.deliveryAddress;
                    deliveryAddress.type = 'Shipping';
                    //WORKAROUND: For pickup address FirstName and LastName can't set and need use some to avoid required violation
                    deliveryAddress.firstName = deliveryAddress.firstName ? deliveryAddress.firstName : 'Fulfillment';
                    deliveryAddress.lastName = deliveryAddress.lastName ? deliveryAddress.lastName : 'center';
                };
                //Does not pass validation errors to API
                shipment.validationErrors = undefined;
                return wrapLoading(function () {
                    return cartService.addOrUpdateShipment(shipment).then($scope.reloadCart);
                });
            };

            $scope.createOrder = function () {
                wrapLoading(function() {
                    return cartService.createOrder($scope.checkout.paymentMethod.card).then(function(response) {

                        var orderProcessingResult = response.data.orderProcessingResult;
                        var paymentMethod = response.data.paymentMethod;

                        return orderService.getOrder(response.data.order.number).then(function(response) {
                            var order = response.data;
                            $scope.checkout.order = order;
                            handlePostPaymentResult(order, orderProcessingResult, paymentMethod);
                        });
                    });

                });
            };

            $scope.savePaymentPlan = function () {
                wrapLoading(function () {
                    return cartService.addOrUpdatePaymentPlan($scope.checkout.paymentPlan).then(function () {
                        $scope.checkout.cart.paymentPlan = $scope.checkout.paymentPlan;
                    });
                });
            };

            $scope.isRecurringChanged = function (isRecurring) {
                if ($scope.checkout.paymentPlan) {
                    if (isRecurring) {
                        $scope.savePaymentPlan();
                    } else {
                        wrapLoading(function () {
                            return cartService.removePaymentPlan().then(function () {
                                $scope.checkout.cart.paymentPlan = undefined;
                            });
                        });
                    }
                }
            };

            function updatePayment(payment) {
                if ($scope.checkout.billingAddressEqualsShipping) {
                    payment.billingAddress = undefined;
                }

                if (payment.billingAddress) {
                    payment.billingAddress.type = 'Billing';
                }
                return wrapLoading(function () {
                    return cartService.addOrUpdatePayment(payment).then($scope.reloadCart);
                });
            }

            function handlePostPaymentResult(order, orderProcessingResult, paymentMethod) {
                if (!orderProcessingResult.isSuccess) {
                    $scope.checkout.loading = false;
                    $rootScope.$broadcast('storefrontError', {
                        type: 'error',
                        title: ['Error in new order processing: ', orderProcessingResult.error, 'New Payment status: ' + orderProcessingResult.newPaymentStatus].join(' '),
                        message: orderProcessingResult.error,
                    });
                    return;
                }

                if (paymentMethod.paymentMethodType && paymentMethod.paymentMethodType.toLowerCase() == 'preparedform' && orderProcessingResult.htmlForm) {
                    $scope.outerRedirect($scope.baseUrl + 'cart/checkout/paymentform?orderNumber=' + order.number);
                } else if (paymentMethod.paymentMethodType && paymentMethod.paymentMethodType.toLowerCase() == 'redirection' && orderProcessingResult.redirectUrl) {
                    $window.location.href = orderProcessingResult.redirectUrl;
                } else {
                    if (!$scope.customer.isRegisteredUser) {
                        $scope.checkout.wizard.nextStep();
                        // $scope.outerRedirect($scope.baseUrl + 'cart/thanks/' + order.number);
                    } else {
                        $scope.checkout.wizard.nextStep();
                        // $scope.outerRedirect($scope.baseUrl + 'account#/orders/' + order.number);
                    }
                }
            }

            function wrapLoading(func) {
                $scope.checkout.loading = true;
                return func().then(function (result) {
                    $scope.checkout.loading = false;
                    return result;
                },
                    function () {
                        $scope.checkout.loading = false;
                    });
            }

            $scope.initialize = function () {

                $scope.reloadCart().then(function (cart) {
                    $scope.checkout.wizard.goToStep(cart.hasPhysicalProducts ? 'shipping-address' : 'payment-method');
                });
            };

            getAvailCountries().then(function (countries) {
                $scope.checkout.availCountries = countries;
            });

        }]);

//# sourceMappingURL=checkout-scripts.js.map
