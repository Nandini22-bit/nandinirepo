
angular.module('myApp', []).controller('myController', function ($scope) {
    $scope.names = [
        {
            name:
                [{
                    first: 'Jani',
                    last: 'test'
                },

                ],
            age: 21,
            email: "nn@gmail.com",
            phone: 9923232323
        },
        {
            name:
                [{
                    first: 'khushi',
                    last: 'agrawal'
                },

                ],
            age: 11,
            email: "khu@example.com",
            phone: 87375758845
        },
        {
            name:
                [{
                    first: 'rani',
                    last: 'gupta'
                },

                ],
            age: 25,
            email: "rr@yahoo.com",
            phone: 7888432223
        }
    ];
    $scope.searchText = '';

    console.log($scope.names);

}).filter('myTableFilter', function () {

        return function (dataArray, searchText) {
            console.log("dataarray", dataArray);
            if (searchText) {

                var searchstring = searchText;
                var termm = searchText;

                return dataArray.filter(function (item) {

                    var termInName;
                    item.name.forEach((data) => {
                        console.log(data.first, searchstring);
                        if (data.first.toLowerCase().includes(searchstring) || data.last.toLowerCase().includes(searchstring)) {
                            console.log("innnnnn")
                            termInName = item;
                            console.log(termInName, "terminName");
                        }

                    });
                    var termInPhone = item.phone.toString().indexOf(termm) > -1;
                    var termInEmail = item.email.toLowerCase().indexOf(searchstring) > -1;
                    var termInAge = item.age.toString().indexOf(termm) > -1;

                    return termInEmail || termInPhone || termInAge || termInName;;
                });
            }
            return dataArray;

        }
    });