(function(){
    describe('UsersController: ', function() {

        var service, usersVm;
        var userMock = [{
                id: 1,
                name: 'Dummy Name 1',
                username: 'dummy1'
            },
            {
                id:2,
                name: 'Dummy Name 2',
                username: 'dummy2'
                }
        ];

        beforeEach(module('plunker'));

        beforeEach(inject(function($controller, dataService, $q, $rootScope){

            service = dataService;

            var defer = $q.defer();

            defer.resolve(userMock);

            spyOn(service, 'getUsers').and.returnValue(defer.promise);

            usersVm = $controller('UsersController', {'dataService': service});

            $rootScope.apply();
        }));

        it('should be defined', function(){
            expect(usersVm).toBeDefined();
        });

        it('should be people', function(){
            expect(usersVm.people.length).toEqual(2);
        });
    });
})();