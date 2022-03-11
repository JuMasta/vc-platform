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

storefrontApp.controller('cartController', ['$rootScope', '$scope', '$timeout', 'cartService', 'catalogService', 'availabilityService', 'loadingIndicatorService', function ($rootScope, $scope, $timeout, cartService, catalogService, availabilityService, loader) {
    var timer;

    $scope.loader = loader;
    $scope.coupon = {};

    var reloadCart = $scope.reloadCart = function() {
        loader.wrapLoading(function() {
            return cartService.getCart().then(function(response) {
                var cart = response.data;
                cart.hasValidationErrors = _.some(cart.validationErrors) || _.some(cart.items, function(item) { return _.some(item.validationErrors) });
                $scope.cart = cart;

                var coupon = cart.coupon || $scope.coupon;
                coupon.loader = $scope.coupon.loader;
                $scope.coupon = coupon;
                if ($scope.coupon.code && !$scope.coupon.appliedSuccessfully) {
                    $scope.coupon.errorCode = 'InvalidCouponCode';
                }

                return availabilityService.getProductsAvailability(_.pluck(cart.items, 'productId')).then(function(response) {
                    $scope.availability = _.object(_.pluck(response.data, 'productId'), response.data);
                });
            });
        });
    };

    initialize();

    $scope.setCartForm = function (form) {
        $scope.formCart = form;
    }

    $scope.changeLineItemQuantity = function (lineItemId, quantity) {
        var lineItem = _.find($scope.cart.items, function (i) { return i.id == lineItemId });
        if (!lineItem || quantity < 1 || $scope.cartIsUpdating || $scope.loader.isLoading || $scope.formCart.$invalid) {
            return;
        }
        var initialQuantity = lineItem.quantity;
        lineItem.quantity = quantity;
        $timeout.cancel(timer);
        timer = $timeout(function () {
            $scope.cartIsUpdating = true;
            cartService.changeLineItemQuantity(lineItemId, quantity).then(function (response) {
                reloadCart();
                $rootScope.$broadcast('cartItemsChanged');
            }, function (response) {
                lineItem.quantity = initialQuantity;
                $scope.cartIsUpdating = false;
            });
        }, 300);
    }

    $scope.changeLineItemPrice = function (lineItemId, newPrice) {
    	var lineItem = _.find($scope.cart.items, function (i) { return i.id == lineItemId });
        if (!lineItem || $scope.cartIsUpdating || $scope.loader.isLoading) {
    		return;
    	}
    	$scope.cartIsUpdating = true;
    	cartService.changeLineItemPrice(lineItemId, newPrice).then(function (response) {
    		reloadCart();
    		$rootScope.$broadcast('cartItemsChanged');
    	}, function (response) {
    		$scope.cart.items = initialItems;
    		$scope.cartIsUpdating = false;
    	});
    };
    $scope.removeLineItem = function (lineItemId) {
        var lineItem = _.find($scope.cart.items, function (i) { return i.id == lineItemId });
        if (!lineItem || $scope.cartIsUpdating || $scope.loader.isLoading) {
            return;
        }
        $scope.cartIsUpdating = true;
        var initialItems = angular.copy($scope.cart.items);
        $scope.recentCartItemModalVisible = false;
        $scope.cart.items = _.without($scope.cart.items, lineItem);
        cartService.removeLineItem(lineItemId).then(function (response) {
            reloadCart();
            $rootScope.$broadcast('cartItemsChanged');
        }, function (response) {
            $scope.cart.items = initialItems;
            $scope.cartIsUpdating = false;
        });
    }

    $scope.clearCart = function() {
        loader.wrapLoading(function() {
            return cartService.clearCart().then(function() {
                reloadCart();
                $rootScope.$broadcast('cartItemsChanged');
            });
        });
    };

    $scope.submitCart = function () {
        $scope.formCart.$setSubmitted();
        if ($scope.formCart.$invalid) {
            return;
        }
        if ($scope.cart.hasPhysicalProducts) {
            $scope.outerRedirect($scope.baseUrl + 'cart/checkout');
        } else {
            $scope.outerRedirect($scope.baseUrl + 'cart/checkout');
        }
    }

    $scope.searchProduct = function () {
        $scope.productSearchResult = null;
        if ($scope.productSkuOrName) {
            $timeout.cancel(timer);
            timer = $timeout(function () {
                $scope.productSearchProcessing = true;
                var criteria = {
                    keyword: $scope.productSkuOrName,
                    start: 0,
                    pageSize: 5
                }
                catalogService.search(criteria).then(function (response) {
                    $scope.productSearchProcessing = false;
                    $scope.productSearchResult = response.data.products;
                }, function (response) {
                    $scope.productSearchProcessing = false;
                });
            }, 300);
        }
    }

    $scope.selectSearchedProduct = function (product) {
        $scope.productSearchResult = null;
        $scope.selectedSearchedProduct = product;
        $scope.productSkuOrName = product.name;
    }

    $scope.addProductToCart = function (product, quantity) {
        $scope.cartIsUpdating = true;
        cartService.addLineItem(product.id, quantity).then(function (response) {
            reloadCart();
            $scope.productSkuOrName = null;
            $scope.selectedSearchedProduct = null;
            $rootScope.$broadcast('cartItemsChanged');
        });
    }
    
    $scope.applyCoupon = function (coupon) {
        coupon.loader.wrapLoading(function() {
            return cartService.addCoupon(coupon.code).then(function() {
                reloadCart();
            });
        });
    }

    $scope.removeCoupon = function (coupon) {
        coupon.loader.wrapLoading(function() {
            return cartService.removeCoupon().then(function() {
                $scope.coupon = { loader: $scope.coupon.loader };
                reloadCart();
            });
        });
    }

    function initialize() {
        reloadCart();
    }
}]);

storefrontApp.controller('cartBarController', ['$scope', 'cartService', function ($scope, cartService) {
    getCartItemsCount();

    $scope.$on('cartItemsChanged', function (event, data) {
        getCartItemsCount();
    });

    function getCartItemsCount() {
        cartService.getCartItemsCount().then(function (response) {
            $scope.cartItemsCount = response.data;
        });
    }
}]);


var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('quoteRequestController', ['$rootScope', '$scope', '$window', '$location', 'quoteRequestService', 'commonService',
    function ($rootScope, $scope, $window, $location, quoteRequestService, commonService) {
    initialize();

    $scope.setQuoteRequestForm = function (form) {
        $scope.formQuoteRequest = form;
    }

    $scope.displayForStatuses = function (statuses) {
        return _.contains(statuses, $scope.quoteRequest.status);
    }

    $scope.addTierPrice = function (quoteItem) {
        quoteItem.proposalPrices.push({
            id: quoteItem.proposalPrices.length + 1,
            price: quoteItem.salePrice,
            quantity: 1
        });
    }

    $scope.changeTierPriceQuantity = function (tierPrice, quantity) {
        if (quantity < 1 || quantity.isNaN) {
            return;
        }
        tierPrice.quantity = quantity;
    }

    $scope.removeTierPrice = function (quoteItem, tierPrice) {
        quoteItem.proposalPrices = _.without(quoteItem.proposalPrices, tierPrice);
    }

    $scope.removeProductFromQuoteRequest = function (quoteItem) {
        var initialQuoteItems = angular.copy($scope.quoteRequest.items);
        $scope.quoteRequest.items = _.without($scope.quoteRequest.items, quoteItem);
        quoteRequestService.removeProductFromQuoteRequest($scope.quoteRequest.id, quoteItem.id).then(function (response) {
            getQuoteRequest($scope.quoteRequest.id);
            $rootScope.$broadcast('actualQuoteRequestItemsChanged');
        }, function (response) {
            $scope.quoteRequest.items = initialQuoteItems;
        });
    }

    $scope.setCountry = function (addressType, countryName) {
        var country = _.find($scope.countries, function (c) { return c.name == countryName });
        if (!country) {
            return;
        }
        if (addressType == 'Billing') {
            $scope.billingCountry = country;
            $scope.billingCountryRegions = [];
            $scope.quoteRequest.billingAddress.countryCode = country.code3 || country.code2;
            $scope.quoteRequest.billingAddress.regionId = null;
            $scope.quoteRequest.billingAddress.regionName = null;
        }
        if (addressType == 'Shipping') {
            $scope.shippingCountry = country;
            $scope.shippingCountryRegions = [];
            $scope.quoteRequest.shippingAddress.countryCode = country.code3 || country.code2;
            $scope.quoteRequest.shippingAddress.regionId = null;
            $scope.quoteRequest.shippingAddress.regionName = null;
        }
        if (country.code3) {
            getCountryRegions(addressType, country.code3);
        }
    }

    $scope.setCountryRegion = function (addressType) {
        if (addressType == 'Billing') {
            var countryRegion = _.find($scope.billingCountryRegions, function (r) { return r.name == $scope.quoteRequest.billingAddress.regionName });
            if (!countryRegion) {
                return;
            }
            $scope.quoteRequest.billingAddress.regionId = countryRegion.code;
        }
        if (addressType == 'Shipping') {
            var countryRegion = _.find($scope.shippingCountryRegions, function (r) { return r.name == $scope.quoteRequest.shippingAddress.regionName });
            if (!countryRegion) {
                return;
            }
            $scope.quoteRequest.shippingAddress.regionId = countryRegion.code;
        }
    }

    $scope.selectCustomerAddress = function (addressType) {
        if (addressType === 'Billing') {
            var billingAddress = _.find($scope.customer.addresses, function (a) { return a.id === $scope.quoteRequest.billingAddress.id });
            if (billingAddress) {
                billingAddress.type = 'Billing';
                if (billingAddress.countryCode) {
                    getCountryRegions('Billing', billingAddress.countryCode);
                }
                $scope.quoteRequest.billingAddress = angular.copy(billingAddress);
            }
        }
        if (addressType === 'Shipping') {
            var shippingAddress = _.find($scope.customer.addresses, function (a) { return a.id === $scope.quoteRequest.shippingAddress.id });
            if (shippingAddress) {
                shippingAddress.type = 'Shipping';
                if (shippingAddress.countryCode) {
                    getCountryRegions('Shipping', shippingAddress.countryCode);
                }
                $scope.quoteRequest.shippingAddress = angular.copy(shippingAddress);
            }
        }
    }

    $scope.stringifyAddress = function (address) {
        if (!address) {
            return;
        }
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

    $scope.submitQuoteRequest = function () {
        $scope.formQuoteRequest.$setSubmitted();
        if ($scope.formQuoteRequest.$invalid) {
            return;
        }
        $scope.quoteRequest.billingAddress.email = $scope.quoteRequest.email;
        if ($scope.quoteRequest.shippingAddress) {
            $scope.quoteRequest.shippingAddress.email = $scope.quoteRequest.email;
        }
        quoteRequestService.submitQuoteRequest($scope.quoteRequest.id, toFormModel($scope.quoteRequest)).then(function (response) {
            if ($scope.customer.isRegisteredUser) {
                $scope.outerRedirect($scope.baseUrl + 'account/quoterequests');
            } else {
                $scope.outerRedirect($scope.baseUrl + 'account/login');
            }
        });
    }

    $scope.rejectQuoteRequest = function () {
        quoteRequestService.rejectQuoteRequest($scope.quoteRequest.id).then(function (response) {
            quoteRequestService.getQuoteRequest($scope.quoteRequest.id).then(function (response) {
                $scope.quoteRequest = response.data;
            });
        });
    }

    $scope.selectTierPrice = function () {
        quoteRequestService.getTotals($scope.quoteRequest.id, toFormModel($scope.quoteRequest)).then(function (response) {
            $scope.quoteRequest.totals = response.data;
        });
    }

    $scope.confirmQuoteRequest = function () {
        quoteRequestService.confirmQuoteRequest($scope.quoteRequest.id, toFormModel($scope.quoteRequest)).then(function (response) {
            $scope.outerRedirect($scope.baseUrl + 'cart/checkout/#/shipping-address');
        });
    }

    $scope.setRequestShippingQuote = function () {
        if (!$scope.quoteRequest.requestShippingQuote) {
            $scope.quoteRequest.shippingAddress = null;
        }
    }

    $scope.setShippingAddressEqualsBilling = function () {
        if ($scope.quoteRequest.shippingAddressEqualsBilling) {
            $scope.quoteRequest.shippingAddress = angular.copy($scope.quoteRequest.billingAddress);
            $scope.quoteRequest.shippingAddress.type = 'Shipping';
            if ($scope.quoteRequest.shippingAddress.countryCode) {
                $scope.shippingCountry = $scope.billingCountry;
                getCountryRegions('Shipping', $scope.quoteRequest.shippingAddress.countryCode);
            }
        }
    }

    $scope.tierPricesUnique = function (quoteItem) {
        var quantities = _.map(quoteItem.proposalPrices, function (p) { return p.quantity });
        return _.uniq(quantities).length == quoteItem.proposalPrices.length;
    }

    function initialize() {
        var quoteRequestNumber = $location.url().replace('/', '') || $window.currentQuoteRequestNumber;
        $scope.billingCountry = null;
        $scope.shippingCountry = null;
        getCountries();
        if (quoteRequestNumber) {
            getQuoteRequest(quoteRequestNumber);
        } else {
            $scope.quoteRequest = { itemsCount: 0 };
        }
    }

    function getQuoteRequest(number) {
        quoteRequestService.getQuoteRequest(number).then(function (response) {
            var quoteRequest = response.data;
            if (!quoteRequest.billingAddress) {
                if ($scope.customer.addresses.length) {
                    quoteRequest.billingAddress = angular.copy($scope.customer.addresses[0]);
                    quoteRequest.billingAddress.type = 'Billing';
                    if (quoteRequest.billingAddress.countryCode) {
                        getCountryRegions('Billing', quoteRequest.billingAddress.countryCode);
                    }
                } else {
                    quoteRequest.billingAddress = {
                        firstName: $scope.customer.firstName,
                        lastName: $scope.customer.lastName
                    };
                }
            }
            _.each(quoteRequest.items, function (quoteItem) {
                var i = 1;
                _.each(quoteItem.proposalPrices, function (tierPrice) {
                    tierPrice.id = i;
                    if (quoteItem.selectedTierPrice.quantity == tierPrice.quantity) {
                        quoteItem.selectedTierPrice = tierPrice;
                    }
                    i++;
                });
            });
            quoteRequest.requestShippingQuote = true;
            $scope.quoteRequest = quoteRequest;
        });
    }

    function getCountries() {
        commonService.getCountries().then(function (response) {
            $scope.countries = response.data;
        });
    }

    function getCountryRegions(addressType, countryCode) {
        commonService.getCountryRegions(countryCode).then(function (response) {
            var countryRegions = response.data;
            if (addressType == 'Billing') {
                $scope.billingCountryRegions = countryRegions || [];
            }
            if (addressType == 'Shipping') {
                $scope.shippingCountryRegions = countryRegions || [];
            }
        });
    }

    function toFormModel(quoteRequest) {
        var quoteRequestFormModel = {
            id: quoteRequest.id,
            tag: quoteRequest.tag,
            status: quoteRequest.status,
            comment: quoteRequest.comment,
            billingAddress: quoteRequest.billingAddress,
            shippingAddress: quoteRequest.shippingAddress,
            items: []
        };
        _.each(quoteRequest.items, function (quoteItem) {
            var quoteItemFormModel = {
                id: quoteItem.id,
                comment: quoteItem.comment,
                selectedTierPrice: {
                    price: quoteItem.selectedTierPrice.price.amount,
                    quantity: quoteItem.selectedTierPrice.quantity
                },
                proposalPrices: []
            };
            _.each(quoteItem.proposalPrices, function (tierPrice) {
                quoteItemFormModel.proposalPrices.push({
                    price: tierPrice.price.amount,
                    quantity: tierPrice.quantity
                });
            });
            quoteRequestFormModel.items.push(quoteItemFormModel);
        });

        return quoteRequestFormModel;
    }
}]);

storefrontApp.controller('actualQuoteRequestBarController', ['$scope', 'quoteRequestService', function ($scope, quoteRequestService) {
    getCurrentQuoteRequest();

    $scope.$on('actualQuoteRequestItemsChanged', function (event, data) {
        getCurrentQuoteRequest();
    });

    function getCurrentQuoteRequest() {
        quoteRequestService.getCurrentQuoteRequest().then(function (response) {
            $scope.actualQuoteRequest = response.data;
        });
    }
}]);

storefrontApp.controller('recentlyAddedActualQuoteRequestItemDialogController', ['$scope', '$window', '$uibModalInstance', 'dialogData',
    function ($scope, $window, $uibModalInstance, dialogData) {

    $scope.$on('actualQuoteRequestItemsChanged', function (event, data) {
        dialogData.updated = true;
    });

    $scope.dialogData = dialogData;

    $scope.close = function () {
        $uibModalInstance.close();
    }

    $scope.redirect = function (url) {
        $window.location = url;
    }
}]);

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

angular.module('storefront.account')
.component('vcAccountAddresses', {
    templateUrl: "themes/assets/account-addresses.tpl.liquid",
    require: {
        accountManager: '^vcAccountManager'
    },
    controller: ['storefrontApp.mainContext', 'confirmService', '$translate', '$scope', 'accountApi', 'loadingIndicatorService', function (mainContext, confirmService, $translate, $scope, accountApi, loader) {
        var $ctrl = this;
        $ctrl.loader = loader;

        $ctrl.currentMember = mainContext.customer;
        $scope.$watch(
            function () { return mainContext.customer; },
            function (customer) {
                $ctrl.currentMember = customer;
            });
      
        $ctrl.addNewAddress = function () {
            if (_.last(components).validate()) {
                $ctrl.currentMember.addresses.push($ctrl.newAddress);
                $ctrl.newAddress = null;
                $ctrl.updateCompanyMember($ctrl.currentMember);              
            }
        };

        $ctrl.submit = function () {
            if (components[$ctrl.editIdx].validate()) {
                angular.copy($ctrl.editItem, $ctrl.currentMember.addresses[$ctrl.editIdx]);
                $ctrl.updateCompanyMember($ctrl.currentMember, $ctrl.cancel);
            }
        };

        $ctrl.cancel = function () {
            $ctrl.editIdx = -1;
            $ctrl.editItem = null;
        };

        $ctrl.edit = function ($index) {
            $ctrl.editIdx = $index;
            $ctrl.editItem = angular.copy($ctrl.currentMember.addresses[$ctrl.editIdx]);
        };

        $ctrl.delete = function ($index) {
            var showDialog = function (text) {
                confirmService.confirm(text).then(function (confirmed) {
                    if (confirmed) {
                        $ctrl.currentMember.addresses.splice($index, 1);
                        $ctrl.updateCompanyMember($ctrl.currentMember);
                    }
                });
            };

            $translate('customer.addresses.delete_confirm').then(showDialog, showDialog);
        };

        $ctrl.updateCompanyMember = function (companyMember, handler) {
            return loader.wrapLoading(function () {
                return accountApi.updateUserAddresses(companyMember.addresses).then(function (response) {
                    return mainContext.loadCustomer().then(function (customer) {
                        $ctrl.currentMember = customer;
                        if (handler) {
                            handler();
                        }
                    });
                });
            });
        };

        var components = [];
        $ctrl.addComponent = function (component) {
            components.push(component);
        };
        $ctrl.removeComponent = function (component) {
            components = _.without(components, component);
        };
    }]
});

angular.module('storefront.account')
    .component('vcAccountCheckoutDefaults', {
        templateUrl: "themes/assets/account-checkout-defaults.tpl.liquid",
        require: {
            accountManager: '^vcAccountManager'
        },
        controller: ['storefrontApp.mainContext', '$scope', 'cartService', 'loadingIndicatorService', 'checkoutDefaultService', 'customerService', function (mainContext, $scope, cartService, loader, checkoutDefaultService, customerService) {
            var $ctrl = this;
            $ctrl.loader = loader;
            $ctrl.defaults = checkoutDefaultService;
            $ctrl.deliveryMethods = [{ type: 'shipping' }, { type: 'pickup' }];
            $ctrl.customer = {};

            $ctrl.getAvailPaymentMethods = function () {
                return cartService.getAvailablePaymentMethods().then(function (response) {
                    return response.data;
                });
            };

            $ctrl.getAvailShippingMethods = function () {
                return cartService.getAvailableShippingMethods().then(function (response) {
                    return response.data;
                });
            }

            $ctrl.getAvailPaymentMethods().then(function (paymentMethods) {
                $ctrl.paymentMethods = paymentMethods;             
            });

            $ctrl.getAvailShippingMethods().then(function (shippingMethods) {
                $ctrl.shippingMethods = shippingMethods;          
            });

    
            customerService.getCurrentCustomer().then(function (response) {
                $ctrl.customer = response.data;             
            });

        
        }]
    });

angular.module('storefront.account')
.component('vcAccountCompanyInfo', {
    templateUrl: "themes/assets/account-company-info.tpl.liquid",
    require: {
        accountManager: '^vcAccountManager'
    },
    controller: ['storefrontApp.mainContext', '$scope', '$translate', 'accountApi', 'loadingIndicatorService', 'confirmService', function (mainContext, $scope, $translate, accountApi, loader, confirmService) {
        var $ctrl = this;
        $ctrl.loader = loader;

        function refresh() {
            loader.wrapLoading(function () {
                return accountApi.getUserOrganization().then(function (response) {
                    $ctrl.company = response.data;
                });
            });
        };

        $ctrl.updateCompanyInfo = function (company) {
            return loader.wrapLoading(function () {
                return accountApi.updateUserOrganization(company).then(function () { refresh(); });
            });
        };

        $ctrl.addNewAddress = function () {
            if (_.last(components).validate()) {
                $ctrl.company.addresses.push($ctrl.newAddress);
                $ctrl.newAddress = null;
                $ctrl.updateCompanyInfo($ctrl.company);
            }
        };

        $ctrl.submitCompanyAddress = function () {
            if (components[$ctrl.editIdx].validate()) {
                angular.copy($ctrl.editItem, $ctrl.company.addresses[$ctrl.editIdx]);
                $ctrl.updateCompanyInfo($ctrl.company).then($ctrl.cancel);
            }
        };

        $ctrl.cancel = function () {
            $ctrl.editIdx = -1;
            $ctrl.editItem = null;
        };

        $ctrl.edit = function ($index) {
            $ctrl.editIdx = $index;
            $ctrl.editItem = angular.copy($ctrl.company.addresses[$ctrl.editIdx]);
        };

        $ctrl.delete = function ($index) {
            var showDialog = function (text) {
                confirmService.confirm(text).then(function (confirmed) {
                    if (confirmed) {
                        $ctrl.company.addresses.splice($index, 1);
                        $ctrl.updateCompanyInfo($ctrl.company);
                    }
                });
            };

            $translate('customer.addresses.delete_confirm').then(showDialog, showDialog);
        };

        var components = [];
        $ctrl.addComponent = function (component) {
            components.push(component);
        };
        $ctrl.removeComponent = function (component) {
            components = _.without(components, component);
        };

        refresh();
    }]
});

angular.module('storefront.account')
    .component('vcAccountCompanyMemberDetail', {
        templateUrl: "account-company-member-detail.tpl",
        require: {
            accountManager: '^vcAccountManager'
        },
        controller: ['$q', '$rootScope', '$scope', '$window', 'accountApi', 'loadingIndicatorService', function ($q, $rootScope, $scope, $window, accountApi, loader) {
            var $ctrl = this;
            $ctrl.loader = loader;
            $ctrl.fieldsConfig = [
                {
                    field: 'CompanyName',
                    disabled: true,
                    visible: false,
                    required: false
                },
                {
                    field: 'Email',
                    disabled: false,
                    visible: true,
                    required: true
                },
                {
                    field: 'UserName',
                    disabled: true,
                    visible: false
                },
                {
                    field: 'Password',
                    disabled: true,
                    visible: false
                },
                {
                    field: 'Roles',
                    disabled: false,
                    visible: true
                }
            ];

            $ctrl.memberComponent = null;

            $scope.init = function (storeId) {
                $ctrl.storeId = storeId;
            };

            function refresh() {
                loader.wrapLoading(function () {
                    return accountApi.getUserById($ctrl.memberNumber).then(function (response) {
                        $ctrl.member = response.data;
                    });
                });
            }

            this.$routerOnActivate = function (next) {
                $ctrl.pageNumber = next.params.pageNumber || 1;
                $ctrl.memberNumber = next.params.member;
                refresh();
            };

            $ctrl.submitMember = function () {
                if ($ctrl.memberComponent.validate()) {
                    loader.wrapLoading(function () {
                        $ctrl.member.fullName = $ctrl.member.firstName + ' ' + $ctrl.member.lastName;
                        $ctrl.member.emails = [$ctrl.member.email];
                        $ctrl.member.roles = [$ctrl.member.role.id];
                        return accountApi.updateUser($ctrl.member).then(function (response) {
                            refresh();
                        });
                    });
                };
            };
        }]
    });


angular.module('storefront.account')
    .component('vcAccountCompanyMembers', {
        templateUrl: "themes/assets/account-company-members.tpl.liquid",
        $routeConfig: [
            { path: '/', name: 'MemberList', component: 'vcAccountCompanyMembersList', useAsDefault: true },
            { path: '/:member', name: 'MemberDetail', component: 'vcAccountCompanyMemberDetail' }
        ],
        controller: ['storefrontApp.mainContext', function (mainContext) {
            var $ctrl = this;
        }]
    })

    .component('vcAccountCompanyMembersList', {
        templateUrl: "account-company-members-list.tpl",
        bindings: { $router: '<' },
        controller: ['storefrontApp.mainContext', '$scope', 'accountApi', 'loadingIndicatorService', 'confirmService', '$location', '$translate', function (mainContext, $scope, accountApi, loader, confirmService, $location, $translate) {
            var $ctrl = this;
            $ctrl.currentMemberId = mainContext.customer.id;
            $ctrl.newMemberComponent = null;
            $ctrl.loader = loader;
            $ctrl.pageSettings = { currentPage: 1, itemsPerPageCount: 5, numPages: 10 };
            $ctrl.pageSettings.pageChanged = function () { refresh(); };

            function refresh() {
                $ctrl.errors = undefined;
                loader.wrapLoading(function () {
                    return accountApi.searchOrganizationUsers({
                        skip: ($ctrl.pageSettings.currentPage - 1) * $ctrl.pageSettings.itemsPerPageCount,
                        take: $ctrl.pageSettings.itemsPerPageCount,
                        sortInfos: $ctrl.sortInfos
                    }).then(function (response) {
                        $ctrl.entries = response.data.results;                       
                        $ctrl.pageSettings.totalItems = response.data.totalCount;
                    });
                });
            };

            $ctrl.addNewMemberFieldsConfig = [
                {
                    field: 'CompanyName',
                    disabled: true,
                    visible: false,
                    required: false
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
                    visible: true,
                    required: true
                }
            ];

            $scope.init = function (storeId, cultureName, registrationUrl) {
                $ctrl.storeId = storeId;
                $ctrl.cultureName = cultureName;
                $ctrl.registrationUrl = registrationUrl;
            };

            this.$routerOnActivate = function (next) {
                $ctrl.pageSettings.currentPage = next.params.pageNumber || $ctrl.pageSettings.currentPage;
                refresh();
            };

            $ctrl.inviteEmailsValidationPattern = new RegExp(/((^|((?!^)([,;]|\r|\r\n|\n)))([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*))+$/);
            $ctrl.invite = function () {
                $ctrl.inviteInfo.emails = $ctrl.inviteInfo.rawEmails.split(/[,;]|\r|\r\n|\n/g);
                loader.wrapLoading(function () {
                    return accountApi.createInvitation({
                        emails: $ctrl.inviteInfo.emails,
                        message: $ctrl.inviteInfo.message
                    }).then(function(response) {
                        if (response.data.succeeded) {
                            $ctrl.cancel();
                            refresh();
                        }
                        else {
                            $ctrl.errors = _.pluck(response.data.errors, 'description');
                        }
                       
                    });
                });
            };

            $ctrl.addNewMember = function () {
                if ($ctrl.newMemberComponent.validate()) {
                    $ctrl.newMember.organizationId = mainContext.customer.organizationId;
                    $ctrl.newMember.role = $ctrl.newMember.role ? $ctrl.newMember.role.id : undefined;
                    $ctrl.newMember.storeId = $ctrl.storeId;

                    loader.wrapLoading(function () {
                        return accountApi.registerNewUser($ctrl.newMember).then(function(response) {
                            if (response.data.succeeded) {
                                $ctrl.cancel();
                                $ctrl.pageSettings.currentPage = 1;
                                $ctrl.pageSettings.pageChanged();
                            }
                            else {
                                $ctrl.errors = _.pluck(response.data.errors, 'description');
                            }
                        });
                    });
                }
            };

            $ctrl.cancel = function () {
                $ctrl.inviteInfo = null;
                $ctrl.newMember = null;
            };

            $ctrl.changeStatus = function (member) {
                loader.wrapLoading(function () {
                    var action = member.isLockedOut ? accountApi.unlockUser : accountApi.lockUser;
                    member.isLockedOut = !member.isLockedOut;
                    return action(member.id).then(function (response) {
                        if (response.data.succeeded) {
                            refresh();
                        }
                        else {
                            $ctrl.errors = _.pluck(response.data.errors, 'description');
                        }
                    });
                });
            };

            $ctrl.edit = function (memberId) {
                this.$router.navigate(['MemberDetail', { member: memberId, pageNumber: $ctrl.pageSettings.currentPage }]);
            }

            $ctrl.delete = function (member) {
                var showDialog = function (text) {
                    confirmService.confirm(text).then(function (confirmed) {
                        if (confirmed) {
                            loader.wrapLoading(function () {
                                return accountApi.deleteUser(member.id).then(function(response) {
                                    if (response.data.succeeded) {
                                        refresh();
                                    }
                                    else {
                                        $ctrl.errors = _.pluck(response.data.errors, 'description');
                                    }
                                });
                            });
                        }
                    });
                };

                $translate('customer.edit_company_members.delete_confirm').then(showDialog, showDialog);
            };

            $ctrl.validate = function () {
                $ctrl.inviteForm.$setSubmitted();
                return $ctrl.inviteForm.valid;
            };

            $ctrl.showActions = function (member) {
                return member.id != mainContext.customer.id;
            }
        }]
    });

angular.module('storefront.account')
    .component('vcAccountLists',
        {
            templateUrl: "lists-manager.tpl",
            $routeConfig: [
                { path: '/', name: 'Lists', component: 'vcAccountLists' },
                { path: '/myLists', name: 'MyLists', component: 'vcAccountMyLists', useAsDefault: true }
            ],
            controller: [
                'listsApi', '$rootScope', 'cartService', '$translate', 'loadingIndicatorService', '$timeout',
                function (listsApi, $rootScope, cartService, $translate, loader, $timeout) {
                    var $ctrl = this;

                    $ctrl.loader = loader;
                    $ctrl.selectedList = {};
                    $ctrl.errors = null;

                    $ctrl.selectTab = function (tabName) {
                        $ctrl.selectedList = {};
                        $ctrl.selectedTab = tabName;
                    };

                    $ctrl.selectList = function (list) {
                        $ctrl.errors = null;
                        $ctrl.selectedList = list;
                        loader.wrapLoading(function () {
                            return listsApi.getWishlist(list.name, list.type).then(function (response) {
                                $ctrl.selectedList.items = response.data.items;
                            });
                        });
                    };

                    $ctrl.removeLineItem = function (lineItem, list) {
                        loader.wrapLoading(function () {
                            return listsApi.removeLineItem(lineItem.id, list.name, list.type).then(function (response) {
                                $ctrl.selectList(list);
                            });
                        });
                    };

                    $ctrl.addToCart = function (lineItem) {
                        loader.wrapLoading(function () {
                            return cartService.addLineItem(lineItem.productId, 1).then(function (response) {
                                lineItem.productAdded = true;
                                $timeout(function () { lineItem.productAdded = false; }, 10000);
                                $rootScope.$broadcast('cartItemsChanged');
                            });
                        });
                    }


                }]
        })
    .component('vcAccountMyLists',
        {
            templateUrl: 'themes/assets/js/account/account-lists.tpl.liquid',
            require: {
                accountLists: '^^vcAccountLists'
            },
            controller: [
                '$rootScope', 'listsApi', 'customerService', 'loadingIndicatorService', '$q', 'dialogService', function ($rootScope, listsApi, customerService, loader, $q, dialogService) {

                    var $ctrl = this;

                    $ctrl.type = null;
                    $ctrl.predefinedLists = [];

                    $ctrl.pageSettings = { currentPage: 1, itemsPerPageCount: 5, numPages: 4 };

                    $ctrl.pageSettings.pageChanged = function () {
                        $ctrl._searchLists();
                    };

                    $ctrl._searchLists = function () {
                        $ctrl.accountLists.errors = null;
                        loader.wrapLoading(function () {
                            return listsApi.searchLists({
                                pageNumber: $ctrl.pageSettings.currentPage,
                                pageSize: $ctrl.pageSettings.itemsPerPageCount,
                                type: $ctrl.type
                            }).then(function (response) {
                                $ctrl.accountLists.lists = response.data.results;
                                $ctrl.pageSettings.totalItems = response.data.totalCount;

                                $ctrl.accountLists.selectedList = _.first(response.data.results);
                            });
                        });
                    };

                    $ctrl.initialize = function (lists) {
                        $ctrl.predefinedLists = lists.default_lists;
                        $ctrl.type = lists.default_list_type;

                        var promises = [];
                        _.each($ctrl.predefinedLists, function (list) {
                            promises.push(createList(list.name, list.type));
                        });

                        $q.all(promises).then(function () {
                            $ctrl._searchLists();
                        });
                    };

                    $ctrl.$onInit = function () {
                        $ctrl.accountLists.selectTab('myLists');
                    }

                    $ctrl.createList = function () {
                        var dialogData = {
                            lists: $ctrl.lists,
                            type: $ctrl.type
                        }
                        var dialogInstance = dialogService.showDialog(dialogData, 'recentlyCreateNewListDialogController', 'storefront.lists-create-new-list-dialog.tpl');

                        dialogInstance.result.then(function (result) {
                            if (!result)
                                return;

                            if (result.error) {
                                $ctrl.accountLists.errors = [result.error];
                            } else {
                                $ctrl.pageSettings.currentPage = 1;
                                $ctrl._searchLists();
                            }
                        });
                    };

                    $ctrl.addToCartAllProducts = function (listName) {
                        loader.wrapLoading(function () {
                            return listsApi.mergeWithCurrentCart(listName, $ctrl.type).then(function (response) {
                                $rootScope.$broadcast('cartItemsChanged');
                            });
                        });
                    }

                    $ctrl.listSettings = function () {
                        loader.wrapLoading(function () {
                            return listsApi.searchLists({
                                pageSize: 10000,
                                type: $ctrl.type
                            }).then(function (response) {
                                var dialogData = {
                                    lists: response.data.results,
                                    predefinedLists: $ctrl.predefinedLists,
                                    type: $ctrl.type
                                }
                                var dialogInstance = dialogService.showDialog(dialogData, 'recentlyCreateNewListDialogController', 'storefront.lists-settings-dialog.tpl');

                                dialogInstance.result.then(function (result) {
                                    $ctrl.pageSettings.currentPage = 1;
                                    $ctrl._searchLists();
                                });
                            });
                        });


                    };

                    function createList(listName, type) {
                        return listsApi.createList(listName, type);
                    }
                }
            ]
        });

angular.module('storefront.account')
    .component('vcAccountOrders', {
        templateUrl: "themes/assets/js/account/account-orders.tpl.liquid",
        $routeConfig: [
            { path: '/', name: 'OrderList', component: 'vcAccountOrdersList', useAsDefault: true },
            { path: '/:number', name: 'OrderDetail', component: 'vcAccountOrderDetail' }
        ],
        controller: [function () {
            var $ctrl = this;           
        }]
    })
    .component('vcAccountOrdersList', {
        templateUrl: "account-orders-list.tpl",
        controller: ['accountApi', 'loadingIndicatorService', function (accountApi, loader) {
            var $ctrl = this;
            $ctrl.loader = loader;
            $ctrl.pageSettings = { currentPage: 1, itemsPerPageCount: 10, numPages: 10 };
            $ctrl.pageSettings.pageChanged = function () {
                return loader.wrapLoading(function () {
                    return accountApi.searchUserOrders({
                        pageNumber: $ctrl.pageSettings.currentPage,
                        pageSize: $ctrl.pageSettings.itemsPerPageCount,
                        sortInfos: $ctrl.sortInfos
                    }).then(function (response) {
                        $ctrl.entries = response.data.results;
                        $ctrl.pageSettings.totalItems = response.data.totalCount;
                    });
                });
            };

            this.$routerOnActivate = function (next) {
                $ctrl.pageSettings.currentPage = next.params.pageNumber || $ctrl.pageSettings.currentPage;
                $ctrl.pageSettings.pageChanged();
            };
        }]
    })
    .component('vcAccountOrderDetail', {
        templateUrl: "account-order-detail.tpl",
        require: {
            accountManager: '^vcAccountManager'
        },
        controller: ['$rootScope', '$window', 'loadingIndicatorService', 'confirmService', 'accountApi', 'inventoryApi', function($rootScope, $window, loader, confirmService, accountApi, inventoryApi) {
            var $ctrl = this;
            $ctrl.loader = loader;
            $ctrl.hasPhysicalProducts = true;
            var loadPromise;

            function refresh() {
                loader.wrapLoading(function () {
                    return accountApi.getUserOrder($ctrl.orderNumber).then(function (result) {
                        $ctrl.order = result.data;
                        return $ctrl.order;
                    }).then(function (order) {
                        var lastPayment = _.last(_.sortBy(order.inPayments, 'createdDate'));
                        $ctrl.billingAddress = (lastPayment && lastPayment.billingAddress) ||
                            _.findWhere(order.addresses, { type: 'billing' }) ||
                            _.first(order.addresses);                     

                        accountApi.getUserOrderNewPaymentData(order.number).then(function (response) {
                            _.each($ctrl.order.inPayments, function (x) {
                                var paymentMethod = _.find(response.data.paymentMethods, function (pm) { return pm.code == x.gatewayCode; });
                                if (paymentMethod) {
                                    x.paymentMethod = paymentMethod;
                                }
                            });
                        });

                        //Workaround because order doesn't have any properties for pickup delivery method
                        $ctrl.deliveryMethod = { type: 'shipping' };
                        inventoryApi.searchFulfillmentCenters({}).then(function(response) {
                            $ctrl.deliveryMethod.fulfillmentCenter = _.find(response.data.results, function(x) { return x.address.line1 == order.shipments[0].deliveryAddress.line1; });
                            if ($ctrl.deliveryMethod.fulfillmentCenter) {
                                $ctrl.deliveryMethod.type ='pickup';
                            }
                        });                        
                    });
                });
            }

            this.$routerOnActivate = function (next) {
                $ctrl.pageNumber = next.params.pageNumber || 1;
                $ctrl.orderNumber = next.params.number;

                refresh();
            };

            $ctrl.getInvoicePdf = function () {
                var url = $window.BASE_URL + 'storefrontapi/orders/' + $ctrl.orderNumber + '/invoice';
                $window.open(url, '_blank');
            }

            var components = [];
            $ctrl.addComponent = function (component) {
                components.push(component);
            };
            $ctrl.removeComponent = function (component) {
                components = _.without(components, component);
            };

            function outerRedirect(absUrl) {
                $window.location.href = absUrl;
            };
        }]
    })
    .filter('orderToSummarizedStatusLabel', [function () {
        return function (order) {
            if (!order)
                return false;

            var retVal = order.status || 'New';        

            return retVal;
        };
    }]);

angular.module('storefront.account')
.component('vcAccountPasswordChange', {
    templateUrl: "themes/assets/js/account/account-password-change.tpl.liquid",
    require: {
        accountManager: '^vcAccountManager'
    },
    controller: ['loadingIndicatorService', 'accountApi', function (loader, accountApi) {
        var ctrl = this;
        ctrl.loader = loader;
        ctrl.passwordChangeData = {};

        ctrl.submit = function () {
            // validation
            ctrl.errors = null;
            ctrl.error = {};
            var hasError = false;
            var errorMsg;

            errorMsg = ctrl.passwordChangeData.oldPassword === ctrl.passwordChangeData.newPassword;
            ctrl.error.newPassword = errorMsg
            hasError = hasError || errorMsg;

            if (!hasError) {
                errorMsg = ctrl.passwordChangeData.newPassword !== ctrl.passwordChangeData.newPassword2;
                ctrl.error.newPassword2 = errorMsg;
                hasError = hasError || errorMsg;
            }

            if (!hasError) {
                loader.wrapLoading(function () {
                    accountApi.changeUserPassword(ctrl.passwordChangeData).then(function (result) {
                        angular.extend(ctrl, result);
                        ctrl.passwordChangeData = {};
                        ctrl.form.$setPristine();
                        return result;
                    });
                });
            }
        };
        ctrl.setForm = function (frm) { ctrl.form = frm; };
    }]
});

angular.module('storefront.account')
.component('vcAccountProfileUpdate', {
    templateUrl: "themes/assets/account-profile-update.tpl.liquid",
    require: {
        accountManager: '^vcAccountManager'
    },
    controller: ['$q', '$scope', 'storefrontApp.mainContext', 'accountApi', 'loadingIndicatorService', 'availableRoles', function ($q, $scope, mainContext, accountApi, loader, availableRoles) {
        var $ctrl = this;
        $ctrl.loader = loader;
        $ctrl.availableRoles = availableRoles;
        $ctrl.member = mainContext.customer;
  
        $scope.$watch(
            function () { return mainContext.customer; },
            function (customer) {
                $ctrl.member = customer;
                if ($ctrl.member.roles) {
                    $ctrl.member.role = _.find($ctrl.availableRoles, function (x) { return x.id == $ctrl.member.roles[0].id });
                }
            });


        $ctrl.submit = function () {
            $ctrl.member.fullName = $ctrl.member.firstName + ' ' + $ctrl.member.lastName;
            $ctrl.member.emails = [$ctrl.member.email];
            if ($ctrl.member.role) {
                $ctrl.member.roles = [$ctrl.member.role.id];
            }

            return loader.wrapLoading(function () {
                return accountApi.updateUser($ctrl.member).then(function (response) {
                    return mainContext.loadCustomer().then(function (customer) {
                        $ctrl.member = customer;                      
                    });
                });
            });
        };
    }]
});

angular.module('storefront.account')
.component('vcAccountQuotes', {
    templateUrl: "themes/assets/js/account/account-quotes.tpl.liquid",
    require: {
        accountManager: '^vcAccountManager'
    },
    controller: [function () {
        var ctrl = this;
        ctrl.pageSettings = { currentPage: 1, itemsPerPageCount: 5, numPages: 10 };
        ctrl.pageSettings.pageChanged = function () {
            ctrl.accountManager.getQuotes(ctrl.pageSettings.currentPage, ctrl.pageSettings.itemsPerPageCount, ctrl.sortInfos, function (data) {
                ctrl.entries = data.results;
                ctrl.pageSettings.totalItems = data.totalCount;
            });
        };
        
        this.$routerOnActivate = function (next) {
            ctrl.pageSettings.currentPage = next.params.pageNumber || ctrl.pageSettings.currentPage;
            ctrl.pageSettings.pageChanged();
        };
    }]
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('accountRegisterController', ['$q', '$scope', 'storefrontApp.mainContext', 'loadingIndicatorService', 'vcRecaptchaService', 'commonService', 'WizardHandler', 'accountApi', 
    function ($q, $scope, mainContext, loader, vcRecaptchaService, commonService, WizardHandler, accountApi) {
        $scope.loader = loader;
        $scope.finished = false;
        commonService.getCountries().then(function (response) {
            $scope.countries = response.data;
        });

            
        function populateRegionalDataForAddress(address) {
            if (address) {
                //Set country object for address
                address.country = _.findWhere($scope.countries, { code3: address.countryCode });
                if (address.country) {
                    address.countryName = address.country.name;
                    address.countryCode = address.country.code3;

                    if (address.country.regions) {
                        setAddressRegion(address, address.country.regions);
                    }
                    else {
                        commonService.getCountryRegions(address.country.code3).then(function (response) {
                            address.country.regions = response.data;
                            setAddressRegion(address, response.data);
                        });
                    }
                }
            }
        }

        function setAddressRegion(address, regions) {
            address.region = _.findWhere(regions, { code: address.regionId });
            if (address.region) {
                address.regionId = address.region.code;
                address.regionName = address.region.name;
            }
            else {
                address.regionId = undefined;
                address.regionName = undefined;
            }
        }
        //Watch any address changes to repopulate address properties for user selection 
        $scope.$watch('registration.address', function (address) {
            if (address) {
                populateRegionalDataForAddress(address);
            }
        }, true);

        $scope.init = function (storeId) {
            $scope.registration = { storeId: storeId, type: 'Business', address: {}, email: null };
            $scope.switchTemplate($scope.registration.type);
        };
   
        $scope.finishedWizard = function() {
            return loader.wrapLoading(function () {
                return accountApi.registerOrganization($scope.registration).then(function (response) {
                    if (response.data.succeeded) {
                        $scope.outerRedirect($scope.baseUrl);
                    } else {
                        if (response.data.errors) {
                            $scope.errors = _.map(response.data.errors, function(err){ return err.description; });
                        }
                    }
                });
            });
        };

        $scope.switchTemplate = function (type) {
            if (type === 'Business') {
                $scope.step1TemplateUrl = 'step1-business';
                $scope.step2TemplateUrl = 'step2-business';
            }
            else if (type === 'Personal') {
                $scope.step1TemplateUrl = 'step1-personal';
                $scope.step2TemplateUrl = 'step2-personal';
            }
                
        }
    }]);

angular.module('storefront.account')
.component('vcAccountSubscriptions', {
    templateUrl: "themes/assets/js/account/account-subscriptions.tpl.liquid",
    $routeConfig: [
     { path: '/', name: 'SubscriptionList', component: 'vcAccountSubscriptionsList', useAsDefault: true },
     { path: '/:number', name: 'SubscriptionDetail', component: 'vcAccountSubscriptionDetail' }
    ]
})

.component('vcAccountSubscriptionsList', {
    templateUrl: "account-subscriptions-list.tpl",
    controller: ['accountApi', 'confirmService', 'loadingIndicatorService', '$translate', function (accountApi, confirmService, loader, $translate) {
        var $ctrl = this;
        $ctrl.loader = loader;
        $ctrl.pageSettings = { currentPage: 1, itemsPerPageCount: 5, numPages: 10 };
        $ctrl.pageSettings.pageChanged = function () {
            loader.wrapLoading(function () {
                return accountApi.searchUserSubscriptions({
                    pageNumber: $ctrl.pageSettings.currentPage,
                    pageSize: $ctrl.pageSettings.itemsPerPageCount,
                    sortInfos: $ctrl.sortInfos
                }).then(function (response) {
                    $ctrl.entries = response.data.results;
                    $ctrl.pageSettings.totalItems = response.data.totalCount;
                });
            });
        };

        this.$routerOnActivate = function (next) {
            $ctrl.pageSettings.currentPage = next.params.pageNumber || $ctrl.pageSettings.currentPage;
            $ctrl.pageSettings.pageChanged();
        };
    }]
})

.component('vcAccountSubscriptionDetail', {
    templateUrl: "account-subscription-detail.tpl",
    controller: ['accountApi', 'confirmService', 'loadingIndicatorService', '$translate', function (accountApi, confirmService, loader, $translate) {
        var $ctrl = this;
        $ctrl.loader = loader;

        function refresh() {
            loader.wrapLoading(function () {
                return accountApi.getUserSubscription({ number: $ctrl.entryNumber }).then(function (response) {
                    $ctrl.subscription = angular.copy(response.data);
                });
            });
        }

        this.$routerOnActivate = function (next) {
            $ctrl.pageNumber = next.params.pageNumber || 1;
            $ctrl.entryNumber = next.params.number;

            refresh();
        };

        $ctrl.cancel = function () {
           
            loader.wrapLoading(function () {
                return accountApi.cancelUserSubscription({ number: $ctrl.entryNumber, cancelReason: $ctrl.cancelReason }).then(function (result) {
                    $ctrl.subscription = angular.copy(result.data);
                    $ctrl.isCancelFormVisible = false;
                    refresh();
                });
            });               
        };
    }]
})

.filter('toIntervalKey', function () {
    return function (data, data_intervalCount) {
        var retVal = 'customer.subscriptions.intervals.' + data.interval.toLowerCase() + '_' + (data_intervalCount === 1 ? 1 : 'plural');
        //var everyKey = 'customer.subscriptions.intervals.every';

        //$translate([intervalKey, everyKey]).then(function (translations) {
        //var intervalVal = translations[intervalKey];
        //  var everyVal = translations[everyKey];

        //if (data_intervalCount === 1) {
        //    retVal = intervalKey;
        //} else {
        //    retVal = data_intervalCount + intervalVal;
        //}
        //});

        return retVal;
    };
});

//Call this to register our module to main application
var moduleName = "storefront.account";

if (storefrontAppDependencies !== undefined) {
    storefrontAppDependencies.push(moduleName);
}
angular.module(moduleName, ['ngResource', 'ngComponentRouter', /*'credit-cards', */'pascalprecht.translate', 'ngSanitize', 'storefrontApp', 'storefrontApp.consts'])

    .config(['$translateProvider', 'baseUrl', function ($translateProvider, baseUrl) {
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        $translateProvider.useUrlLoader(baseUrl + 'themes/localization.json');
        $translateProvider.preferredLanguage('en');
    }])

    .run(['$templateCache', function ($templateCache) {
        // cache application level templates
        $templateCache.put('pagerTemplate.html', '<ul uib-pagination boundary-links="true" max-size="$ctrl.pageSettings.numPages" items-per-page="$ctrl.pageSettings.itemsPerPageCount" total-items="$ctrl.pageSettings.totalItems" ng-model="$ctrl.pageSettings.currentPage" ng-change="$ctrl.pageSettings.pageChanged()" class="pagination-sm" style="padding-bottom: 20px;" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></ul uib-pagination>');
    }])

    .value('$routerRootComponent', 'vcAccountManager')
    .service('accountDialogService', ['$uibModal', function ($uibModal) {
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
            }
        }
    }])

    .component('vcAccountManager', {
        templateUrl: "account-manager.tpl",
        bindings: {
            baseUrl: '<',
            customer: '<'
        },
        $routeConfig: [
            { path: '/orders/...', name: 'Orders', component: 'vcAccountOrders' },
            { path: '/subscriptions/...', name: 'Subscriptions', component: 'vcAccountSubscriptions' },
            { path: '/quotes', name: 'Quotes', component: 'vcAccountQuotes' },
            { path: '/profile', name: 'Profile', component: 'vcAccountProfileUpdate', useAsDefault: true },
            { path: '/addresses', name: 'Addresses', component: 'vcAccountAddresses' },
            { path: '/changePassword', name: 'PasswordChange', component: 'vcAccountPasswordChange' },
            { path: '/companyInfo', name: 'CompanyInfo', component: 'vcAccountCompanyInfo' },
            { path: '/companyMembers/...', name: 'CompanyMembers', component: 'vcAccountCompanyMembers' },
            { path: '/lists/...', name: 'Lists', component: 'vcAccountLists' },
            //{ path: '/checkoutDefaults', name: 'CheckoutDefaults', component: 'vcAccountCheckoutDefaults' },
        ],
        controller: ['$scope', '$timeout', 'storefrontApp.mainContext', 'loadingIndicatorService', 'commonService', function ($scope, $timeout, mainContext, loader, commonService) {
            var $ctrl = this;
            $ctrl.loader = loader;
            $ctrl.availCountries = [];
            loader.wrapLoading(function() {
                return commonService.getCountries().then(function (response) {
                    $ctrl.availCountries = response.data;
                });
            });

            $ctrl.getCountryRegions = function (country) {
                return loader.wrapLoading(function() {
                    return commonService.getCountryRegions(country.code3).then(function (response) { return response.data; });
                });
            };
        }]
    })

    .service('confirmService', ['$q', function ($q) {
        this.confirm = function (message) {
            return $q.when(window.confirm(message || 'Is it OK?'));
        };
    }])

    .service('checkoutDefaultService', ['$localStorage', function ($localStorage) {
        return {
            paymentMethod: undefined,
            shippingMethod: undefined,
            deliveryMethod: undefined,
            address: undefined
        };       
    }])


var storefrontApp = angular.module('storefrontApp');

storefrontApp.service('accountApi', ['$http', function ($http) {
    return {
        getCurrentUser: function () {
            return $http.get('storefrontapi/account?t=' + new Date().getTime());
        },
        getUserById: function (userId) {
            return $http.get('storefrontapi/account/' + userId + '?t=' + new Date().getTime());
        },
        updateUser: function (user) {
            return $http.post('storefrontapi/account', user);
        },
        updateUserAddresses: function (addresses) {
            return $http.post('storefrontapi/account/addresses', addresses);
        },
        getUserOrganization: function () {
            return $http.get('storefrontapi/account/organization/current?t=' + new Date().getTime());
        },
        updateUserOrganization: function (organization) {
            return $http.put('storefrontapi/account/organization', organization);
        },
        registerOrganization: function (registration) {
            var XSRF_token = angular.element('input[name="__RequestVerificationToken"]').attr('value');
            return $http.post('storefrontapi/account/organization', registration, { headers: { RequestVerificationToken: XSRF_token } });
        },
        searchOrganizationUsers: function (criteria) {
            return $http.post('storefrontapi/account/organization/users/search', criteria);
        },
        createInvitation: function (invitation) {
            return $http.post('storefrontapi/account/invitation', invitation);
        },
        registerNewUser: function (user) {
            return $http.post('storefrontapi/account/user', user);
        },
        lockUser: function (userId) {
            return $http.post('storefrontapi/account/' + userId + '/lock');
        },
        unlockUser: function (userId) {
            return $http.post('storefrontapi/account/' + userId + '/unlock');
        },
        deleteUser: function (userName) {
            return $http.delete('storefrontapi/account/' + userName);
        },
        searchUserOrders: function (searchCriteria) {
            return $http.post('storefrontapi/orders/search', searchCriteria);
        },
        getUserOrder: function (orderNumber) {            
            return $http.get('storefrontapi/orders/' + orderNumber + '?t=' + new Date().getTime());
        },
        getUserOrderNewPaymentData: function (orderNumber) {
            return $http.get('storefrontapi/orders/' + orderNumber + '/newpaymentdata?t=' + new Date().getTime());
        },
        searchUserSubscriptions: function (searchCriteria) {
            return $http.post('storefrontapi/subscriptions/search', searchCriteria);
        },
        getUserSubscription: function (number) {
            return $http.get('storefrontapi/subscriptions/{number}', searchCriteria);
        },
        cancelUserSubscription: function (cancelRequest) {
            return $http.post('storefrontapi/subscriptions/cancel', cancelRequest);
        },
        changeUserPassword: function (passwordChangeData) {
            return $http.post('storefrontapi/account/password', passwordChangeData);
        },
    }
}]);

angular.module('storefrontApp')
	.component('addToListButton', {
		templateUrl: 'themes/assets/js/lists/add-to-list-button.tpl.html',
		bindings: {
			selectedVariation: '<'
		},
        controller: ['accountApi', 'dialogService', 'listsApi', 'customerService', function (accountApi, dialogService, listsApi, customerService) {
			var $ctrl = this;
			$ctrl.$onInit = function () {
				compareProductInLists();
			}

			function compareProductInLists() {
				$ctrl.buttonInvalid = true;
                listsApi.searchLists({
					pageSize: 10000,
					type: $ctrl.type
				}).then(function (response) {
					$ctrl.lists = response.data.results;

					if ($ctrl.lists) {
						var nameLists = _.pluck($ctrl.lists, 'name');
						listsApi.getListsWithProduct($ctrl.selectedVariation.id, nameLists, $ctrl.type).then(function(containsResponse) {
							var containsLists = containsResponse.data;
							if (containsLists) {
								_.each($ctrl.lists, function(list) {
									list.contains = _.contains(containsLists, list.name);
								});
							}
						});
					}
				});
				customerService.getCurrentCustomer().then(function(response) {
					$ctrl.customer = response.data;
				});

			}

			function toListsDialogDataModel(product, quantity) {
				return {
					product: product,
					quantity: quantity,
					updated: false
				}
			}

			$ctrl.addProductToWishlist = function () {
				var dialogData = toListsDialogDataModel($ctrl.selectedVariation, 1);
				dialogService.showDialog(dialogData, 'recentlyAddedListItemDialogController', 'storefront.lists-added-list-item-dialog.tpl');
            }

            $ctrl.signInToProceed = function() {
                dialogService.showDialog({ title: 'Add product to list...' }, 'universalDialogController', 'storefront.sign-in-to-proceed.tpl');
            }

		}]
	})

var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('recentlyAddedListItemDialogController', ['$scope', '$window', '$uibModalInstance', 'dialogData', 'listsApi', '$translate', 'defaultLists', '$q', 'loadingIndicatorService', function ($scope, $window, $uibModalInstance, dialogData, listsApi, $translate, defaultLists, $q, loader ) {
    $scope.availableLists = [];
    $scope.selectedList = {};
    $scope.dialogData = dialogData;
    $scope.inProgress = false;
    $scope.itemAdded = false;
    $scope.type = dialogData.listType;

    $scope.addProductToList = function () {
        $scope.inProgress = true;
        listsApi.addLineItem(dialogData.product.id, $scope.selectedList.name, $scope.selectedList.type).then(function (response) {
            if (response.data) {
                $scope.inProgress = false;
                $scope.itemAdded = true;
            }
        });
    };
    $scope.selectList = function (list) {
        $scope.selectedList = list;
    };

    $scope.close = function () {
        $uibModalInstance.close();
    };

    $scope.redirect = function (url) {
        $window.location = url;
    };

    $scope._searchLists = function () {
        loader.wrapLoading(function () {
            return listsApi.searchLists({
                pageSize: 1000,
                type: $scope.type
            }).then(function (response) {
                $scope.lists = response.data.results;
                if ($scope.lists) {
                    var nameLists = _.pluck($scope.lists, 'name');
                    listsApi.getListsWithProduct(dialogData.product.id, nameLists, $scope.type).then(function(containsResponse) {
                        var containsLists = containsResponse.data;
                        if ($scope.lists && containsLists) {
                            _.each($scope.lists, function(list) {
                                list.contains = _.contains(containsLists, list.name);
                            });
                        }
                    });
                }
            });
        });
    };

    $scope.initialize = function () {
        $scope.predefinedLists = defaultLists.default_lists;
        $scope.type = defaultLists.default_list_type;

        var promises = [];
        _.each($scope.predefinedLists, function (list) {
            promises.push(createList(list.name, list.type));
        });

        $q.all(promises).then(function () {
            $scope._searchLists();
        });
    };

    function createList(listName, type) {
        return listsApi.createList(listName, type);
    }

    $scope.initialize();
}]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('recentlyCreateNewListDialogController', ['$rootScope', '$scope', '$window', '$uibModalInstance', 'customerService', 'dialogData', 'listsApi', '$localStorage', 'loadingIndicatorService', '$translate', 'confirmService', function ($rootScope, $scope, $window, $uibModalInstance, customerService, dialogData, listsApi, $localStorage, loader, $translate, confirmService) {

    $scope.dialogData = dialogData.lists;
    $scope.predefinedLists = dialogData.lists;
    $scope.userName = dialogData.userName;
    $scope.inProgress = false;
    $scope.data = $scope.listName;
    $scope.selectedTab = dialogData.selectedTab;
    $scope.type = dialogData.type;

    $scope.createList = function () {
        listsApi.createList($scope.dialogData.listName, $scope.type).then(function(result) {
            $uibModalInstance.close(result.data);
        });
    };

    $scope.selectedList = function (listName, type) {
        var items = listsApi.getWishlist(listName, type).items;
        $scope.selectedList.items = items;
    };

    $scope.submitSettings = function () {
        var showDialog = function (text) {
            confirmService.confirm(text).then(function (confirmed) {
                if (confirmed) {
                    var listIds = [];
                    _.each(dialogData.lists, function (list) {
                        if (list.delete)
                            listIds.push(list.id);
                    });

                    listsApi.deleteListsByIds(listIds).then(function (result) {
                        $uibModalInstance.close();
                    });
                }
            });
        };

        showDialog("Are you sure you wish to delete this list?");
    };

    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };

    function inititlize() {
        _.each($scope.dialogData, function(list) {
            var foundList = _.find(dialogData.predefinedLists, function (predefinedList) { return predefinedList.name === list.name });
            if (foundList) {
                list.disabled = true;
            }
        });
    }

    inititlize();

}]);

var storefrontApp = angular.module('storefrontApp');
storefrontApp.service('listsApi', ['$http', function ($http) {
    return {
        getWishlist: function (listName, type) {
            return $http.get('storefrontapi/lists/' + listName + '/' + type + '?t=' + new Date().getTime());
        },
        getListsWithProduct: function (productId, listNames, type) {
            return $http.post('storefrontapi/lists/getlistswithproduct', { productId: productId, listNames: listNames, type: type });
        },
        addLineItem: function (productId, listName, type) {
            return $http.post('storefrontapi/lists/items', { productId: productId, listName: listName, type: type });
        },
        removeLineItem: function (lineItemId, listName, type) {
            return $http.delete('storefrontapi/lists/' + listName + '/' + type + '/items/' + lineItemId);
        },
        searchLists: function (searchCriteria) {
            return $http.post('storefrontapi/lists/search', searchCriteria);
        },
        createList: function(listName, type) {
            return $http.post('storefrontapi/lists/' + listName + '/' + type + '/create');
        },
        deleteListsByIds: function(listIds) {
            return $http.delete('storefrontapi/lists/deletelistsbyids?listIds=' + listIds.join('&listIds='));
        },
        mergeWithCurrentCart: function(listName, type) {
            return $http.post('storefrontapi/lists/' + listName + '/' + type + '/mergewithcurrentcart');
        }
    }
}]);
//# sourceMappingURL=account-scripts.js.map
