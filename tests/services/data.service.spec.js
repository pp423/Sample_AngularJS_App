(function(){
    describe('dataService: ', function(){

        var httpBackend, dataService;
       beforeEach(module('plunker'));

        beforeEach(inject(function($injector, $httpBackend){
            dataService = $injector.get('dataService');
            httpBackend = $httpBackend;
        }));

        it('should get all the users : Success', function(){
            httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200,[{},{},{}]);
            dataService.getUsers().then(function(results){
                expect(result.length).toEqual(3);
            });
        });

        it('should get all the users : Error', function(){
            httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(500, {});
            dataService.getUsers().then(function(results){
                expect(result.length).toEqual(3);
            });
        });
    });
})();