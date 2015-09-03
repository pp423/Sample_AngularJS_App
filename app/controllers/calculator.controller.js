(function(){
    'use strict';

    angular.module('plunker')
        .controller('CalcController', CalcControllerFn);

    CalcControllerFn.$inject=[];
    function CalcControllerFn() {
        var calcVm = this;

        calcVm.num1, calcVm.num2;

        calcVm.add = function(){
            calcVm.result = calcVm.num1 + calcVm.num2;
        };
    }
})();