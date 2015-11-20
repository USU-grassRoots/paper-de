angular.module('taskbar', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('brown');
  })
  .controller("taskbar-controller", function($scope) {

    $scope.openDevTools = function() {
      var remote = require('remote');
      var browser = remote.getCurrentWindow();
      browser.openDevTools();
      // browser.devToolsWebContents.executeJavaScript('document.getElementsByClassName("long-click-glyph")[0].click()')
    }

    $scope.openTerminal = function() {
      var exec = require("child_process").exec;
      exec('x-terminal-emulator');
    };

    $scope.settings = function() {
      // alert('hello world');
      // window.open('http://www.google.com', 'settings');
      var remote = require('remote');
      remote.getGlobal('opensettings')();


    }
  });
