(function () {
    describe('Calculator Controller: ', function () {
        var calcVm;
        //before each is jasmine feature
        beforeEach(module('plunker'));

        beforeEach(inject(function ($controller) {
            calcVm = $controller('CalcController');
        }));
        it('should be defined', function(){
            console.log(calcVm);

            expect(calcVm).toBeDefined();
        });

        it('should add two numbers', function(){
            calcVm.num1 = 10;
            calcVm.num2 = 20;
            calcVm.add();

            expect(calcVm.result).toEqual(30);
        });
    });
})();