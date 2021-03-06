'use strict';
angular.module('nodeInAction')
.service('Account', function ($http, Config, localStorageService) {
    this.register = function (user) {
        return $http.post(Config.URL + 'account', user);
    };

    this.checkUser = function (email) {
        return $http.get(Config.URL + 'account/checkUser/' + email);
    };

    this.login = function (user) {
        return $http.post(Config.URL + 'login', user);
    };

    this.sendAgain = function (email) {
        return $http.get(Config.URL + 'account/sendAgain/' + email);
    };

    this.activeUser = function (activeToken) {
        return $http.get(Config.URL + 'account/active/' + activeToken);
    };


    this.sendResetEmail = function (email) {
        return $http.get(Config.URL + 'account/forget/' + email);
    };

    this.getUser = function () {
        return localStorageService.get('user');
    };

    this.updateUser = function (user) {
        return $http.post(Config.URL + 'account/update', user);
    };

    this.resetPswd = function (username, pswd, token) {
        return $http.post(Config.URL + 'account/resetPswd' ,{
            username: username,
            password: pswd,
            activeToken: token
        });
    };

    this.createFactory = function (user) {
        return $http.post(Config.URL + 'factory/createFactory', user);
    };

    this.getAllFactory = function () {
        return $http.get(Config.URL + 'factory/getAllFactory');
    };

    this.uploadProduct = function (product) {
        return $http.post(Config.URL + 'factory/uploadProduct', product);
    };

    this.getAllProduct = function () {
        return $http.get(Config.URL + 'factory/getAllProduct');
    };

    this.createChildAccount = function (user) {
        return $http.post(Config.URL + 'dealer/add', user);
    };

    this.getAllChildAccount = function () {
        return $http.get(Config.URL + 'dealer/getAll');
    };
});
