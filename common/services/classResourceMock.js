/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    "use strict";

    var app = angular
        .module("classResourceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var Users = [
            {
                "id": "44e75b63-cf1c-4533-aec1-09dbff448f42",
                "firstName": "Cyrus",
                "lastName": "Kihn",
                "email": "Waylon_Treutel@hotmail.com",
                "address": {
                    "street": "084 Daphney Motorway",
                    "city": "Bednarside",
                    "zip": "34182-9711",
                    "state": "ND",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T07:09:19.580Z",
                "company": {
                    "name": "White, Bergnaum and West",
                    "website": "http://kellen.info"
                },
                "profilePic": "http://lorempixel.com/640/480/nightlife"
            },
            {
                "id": "7ca14894-5436-4700-b85b-83df8453a016",
                "firstName": "Kassandra",
                "lastName": "Conroy",
                "email": "Sandy_Haley@gmail.com",
                "address": {
                    "street": "645 Keebler Manors",
                    "city": "East Declan",
                    "zip": "03855",
                    "state": "NY",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T15:34:23.703Z",
                "company": {
                    "name": "Wehner - Gaylord",
                    "website": "https://dariana.biz"
                },
                "profilePic": "http://lorempixel.com/640/480/cats"
            },
            {
                "id": "d5514409-20e2-414e-b851-a49a50c67797",
                "firstName": "Tyree",
                "lastName": "Ondricka",
                "email": "Miles.Kovacek1@yahoo.com",
                "address": {
                    "street": "460 Hudson Shore",
                    "city": "East Myahchester",
                    "zip": "74265-8729",
                    "state": "NM",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T17:15:34.775Z",
                "company": {
                    "name": "Hansen - Jacobs",
                    "website": "http://autumn.biz"
                },
                "profilePic": "http://lorempixel.com/640/480/food"
            },
            {
                "id": "f7032780-6e44-4222-b147-8c6e0f44cbb6",
                "firstName": "Jailyn",
                "lastName": "Wilderman",
                "email": "Manley.Cole25@yahoo.com",
                "address": {
                    "street": "670 Ruecker Crossing",
                    "city": "Gutmannview",
                    "zip": "62079",
                    "state": "KY",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T20:20:27.311Z",
                "company": {
                    "name": "McLaughlin Group",
                    "website": "https://kevin.org"
                },
                "profilePic": "http://lorempixel.com/640/480/abstract"
            },
            {
                "id": "3428f432-b4fe-4444-a71e-e8ad4e2dbce6",
                "firstName": "Martine",
                "lastName": "Trantow",
                "email": "Marcella.Kilback95@yahoo.com",
                "address": {
                    "street": "530 Logan Throughway",
                    "city": "Lake Marguerite",
                    "zip": "73742",
                    "state": "LA",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T17:17:09.480Z",
                "company": {
                    "name": "Lueilwitz, Johns and Prohaska",
                    "website": "http://sim.biz"
                },
                "profilePic": "http://lorempixel.com/640/480/business"
            },
            {
                "id": "1567be43-c395-45f9-bfd1-43cee59ec482",
                "firstName": "Vincenzo",
                "lastName": "Nader",
                "email": "Porter7@yahoo.com",
                "address": {
                    "street": "9228 Collins Spring",
                    "city": "South Frederikmouth",
                    "zip": "54538",
                    "state": "WV",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T06:17:55.192Z",
                "company": {
                    "name": "Kirlin, O'Hara and Konopelski",
                    "website": "http://emerald.info"
                },
                "profilePic": "http://lorempixel.com/640/480/food"
            },
            {
                "id": "1d7d712e-2eaa-448c-8b4b-ce295886bed6",
                "firstName": "Shane",
                "lastName": "Huel",
                "email": "Allene_Cruickshank4@hotmail.com",
                "address": {
                    "street": "19867 Lessie Curve",
                    "city": "West Claireview",
                    "zip": "85210-8705",
                    "state": "GA",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T07:34:51.495Z",
                "company": {
                    "name": "Senger, Wyman and Stokes",
                    "website": "https://alexandro.net"
                },
                "profilePic": "http://lorempixel.com/640/480/transport"
            },
            {
                "id": "4b822177-1d30-4b76-ace7-2be4697e9d4a",
                "firstName": "Hilton",
                "lastName": "Sauer",
                "email": "Loraine_Moore42@hotmail.com",
                "address": {
                    "street": "5792 Evan Spring",
                    "city": "South Eveborough",
                    "zip": "56716-3122",
                    "state": "AZ",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T20:44:02.545Z",
                "company": {
                    "name": "Waters and Sons",
                    "website": "https://corene.org"
                },
                "profilePic": "http://lorempixel.com/640/480/nightlife"
            },
            {
                "id": "d0cb4ab6-a517-4a6b-bf80-0d18c3cbe847",
                "firstName": "Taurean",
                "lastName": "Heathcote",
                "email": "Justina_Gulgowski@gmail.com",
                "address": {
                    "street": "15686 Mayer Rest",
                    "city": "Shyannetown",
                    "zip": "03298",
                    "state": "MD",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T22:12:48.642Z",
                "company": {
                    "name": "Kirlin, Jacobs and Ullrich",
                    "website": "http://vicky.net"
                },
                "profilePic": "http://lorempixel.com/640/480/technics"
            },
            {
                "id": "5115db85-072a-4560-bba9-d5b5a352d246",
                "firstName": "Emil",
                "lastName": "Rempel",
                "email": "Afton_Leannon@gmail.com",
                "address": {
                    "street": "25971 Gerhold Coves",
                    "city": "Jonesberg",
                    "zip": "35593-5374",
                    "state": "UT",
                    "country": "USA"
                },
                "dateCreated": "2017-05-23T08:58:57.182Z",
                "company": {
                    "name": "Bailey Group",
                    "website": "http://christa.net"
                },
                "profilePic": "http://lorempixel.com/640/480/nightlife"
            }
        ];

      var classesUrl = "/api/classes";
       // var classesUrl = "http://mocker.egen.io/users/";
        $httpBackend.whenGET(classesUrl).respond(Users);

        var duplicateCheckRegex = new RegExp(classesUrl + "/[0-9][0-9]*" + "/.*", '');
        $httpBackend.whenGET(duplicateCheckRegex).respond(function (method, url, data) {
            var selectedClass = null;
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 2];
            var className = unescape(parameters[length - 1]);

            if (className) {
                for (var i = 0; i < Users.length; i++) {
                    if (Users[i].firstNameName == className &&
                        Users[i].id != id) {
                        selectedClass = Users[i];
                        break;
                    }
                }
            }

            if (selectedClass) {
                return [200, selectedClass, {}];
            } else {
                return [404, selectedClass, {}];
            }
        });
        //
        var editingRegex = new RegExp(classesUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var selectedClass = {"id": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < Users.length; i++) {
                    if (Users[i].id == id) {
                        selectedClass = Users[i];
                        break;
                    }
                }
            }

            return [200, selectedClass, {}];
        });

        $httpBackend.whenPOST(classesUrl).respond(function (method, url, data) {
            var selectedClass = angular.fromJson(data);

            if (!selectedClass.id) {
                // new class Id
                selectedClass.id = Users[Users.length - 1].id + 1;
                Users.push(selectedClass);
            } else {
                // Updated class
                for (var i = 0; i < Users.length; i++) {
                    if (Users[i].id == selectedClass.id) {
                        Users[i] = selectedClass;
                        break;
                    }
                }
            }
            return [200, selectedClass, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();

})
}());
