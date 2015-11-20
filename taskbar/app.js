angular.module('taskbar', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('brown');
  })
  .controller("taskbar-controller", function($scope) {

    var nodeBattery = require("node-battery");
    // nodeBattery.getBatteries(function(data){
    //     // Linux only
    //     // "data" Is an array containing paths to the battery files
    // });

    try {
      $scope.shortcuts = require('./shortcuts.json');
    } catch (e) {
      alert('Shortcuts file is missing or corrupted. Adding a default terminal shortcut.')
      $scope.shortcuts = [{
        name: "Terminal",
        command: "x-terminal-emulator"
      }];
    } finally {

    }

    // console.log(require('shortcuts.json'));

    $scope.exec = require("child_process").exec;

    $scope.batterylevel = "...";
    $scope.currenttime = new Date(Date());

    $scope.updateinfo = function() {
      nodeBattery.isCharging(function(pluggedin){
        nodeBattery.percentages(function(data){
          $scope.$apply(function() {
              $scope.batterylevel = data[0];
              $scope.pluggedin = pluggedin[0];
              $scope.currenttime = new Date(Date());
          });
        });
      });
    }

    setInterval(function(){$scope.updateinfo()}, 5000);
    $scope.updateinfo();

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
