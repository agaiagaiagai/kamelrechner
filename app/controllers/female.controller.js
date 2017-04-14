(function () {
    'use strict';

    angular.module('kamelrechner').controller('FemaleController', ["$scope", "$localStorage", FemaleController]);

    function FemaleController($scope, $localStorage) {

        $scope.hair = 'long';
        $scope.hairColor = 'blonde';
        $scope.eyeColor = 'blue';
        $scope.boobs = 'a';
        $scope.bodyType = 'thin';

        $scope.ageSlider = {
            value: 18,
            options: {
                floor: 14,
                ceil: 70,
                step: 1,
                hidePointerLabels: true,
                hideLimitLabels: true,
                showSelectionBar: true
            }
        };

        $scope.heightSlider = {
            value: 168,
            options: {
                floor: 140,
                ceil: 220,
                step: 1,
                hidePointerLabels: true,
                hideLimitLabels: true,
                showSelectionBar: true
            }
        };



        $scope.CalculateWorth = function() {



            var femaleObject = {
                age: $scope.ageSlider.value,
                height: $scope.heightSlider.value,
                hair: $scope.hair,
                hairColor: $scope.hairColor,
                eyeColor: $scope.eyeColor,
                boobs: $scope.boobs,
                bodyType: $scope.bodyType
            };

            var score = 56; //This is score when all params are with default values age is 14, and height is 140, the minimal values in range sliders

            //Calculating score based on parameters given

            switch(femaleObject.age) {
                case 14:
                    score += 0;
                    break;
                case 15:
                    score += 2;
                    break;
                case 16 || 17:
                    score += 4;
                    break;
                case femaleObject.age >= 18 && femaleObject.age <= 22 && femaleObject.age:
                    score += 8;
                    break;
                case femaleObject.age >= 23 && femaleObject.age <= 27 && femaleObject.age:
                    score += 6;
                    break;
                case femaleObject.age >= 28 && femaleObject.age <= 30 && femaleObject.age:
                    score += 3;
                    break;
                case femaleObject.age >= 31 && femaleObject.age <= 40 && femaleObject.age:
                    score -= 1;
                    break;
                case femaleObject.age >= 41 && femaleObject.age <= 45 && femaleObject.age:
                    score -= 2;
                    break;
                case femaleObject.age >= 46 && femaleObject.age <= 49 && femaleObject.age:
                    score -= 3;
                    break;
                case 50:
                    score -= 24;
                    break;
                case femaleObject.age >= 51 && femaleObject.age:
                    score -= 26;
                    break;
            }

            switch(femaleObject.height) {
                case femaleObject.height >= 140 && femaleObject.height < 145 && femaleObject.height:
                    score += 0;
                    break;
                case femaleObject.height >= 145 && femaleObject.height < 150 && femaleObject.height:
                    score += 1;
                    break;
                case femaleObject.height >= 150 && femaleObject.height < 155 && femaleObject.height:
                    score += 3;
                    break;
                case femaleObject.height >= 155 && femaleObject.height < 165 && femaleObject.height:
                    score += 6;
                    break;
                case femaleObject.height >= 165 && femaleObject.height <= 175 && femaleObject.height:
                    score += 11;
                    break;
                case femaleObject.height >= 176 && femaleObject.height <= 180 && femaleObject.height:
                    score += 10;
                    break;
                case femaleObject.height >= 181 && femaleObject.height <= 185 && femaleObject.height:
                    score += 6;
                    break;
                case femaleObject.height >= 186 && femaleObject.height <= 195 && femaleObject.height:
                    score += 3;
                    break;
                case femaleObject.height >= 196 && femaleObject.height <= 220 && femaleObject.height:
                    score += 0;
                    break;
            }

            switch(femaleObject.hair) {
                case 'long':
                    score += 0;
                    break;
                case 'middle':
                    score -= 14;
                    break;
                case 'short':
                    score -= 18;
                    break;
            }

            switch(femaleObject.hairColor) {
                case 'blonde':
                    score += 0;
                    break;
                case 'brown':
                    score -= 12;
                    break;
                case 'black':
                    score -= 18;
                    break;
                case 'red':
                    score -= 16;
                    break;
                case 'gray':
                    score -= 20;
                    break;
            }

            switch(femaleObject.eyeColor) {
                case 'blue':
                    score += 0;
                    break;
                case 'green':
                    score -= 12;
                    break;
                case 'brown':
                    score -= 16;
                    break;
                case 'gray':
                    score -= 14;
                    break;
            }

            switch(femaleObject.boobs) {
                case 'a':
                    score += 0;
                    break;
                case 'b':
                    score += 6;
                    break;
                case 'c':
                    score += 10;
                    break;
                case 'd':
                    score += 8;
                    break;
            }

            switch(femaleObject.bodyType) {
                case 'thin':
                    score += 0;
                    break;
                case 'sporty':
                    score += 8;
                    break;
                case 'normal':
                    score += 6;
                    break;
                case 'chubby':
                    score += 0;
                    break;
                case 'fat':
                    score -= 4;
                    break;
            }


            //If two or three params rom hair, hairColor and eyeColor are changed, adding value to score

            if (femaleObject.hair !== 'long' && femaleObject.hairColor !== 'blonde' && femaleObject.eyeColor !== 'blue') {
                score += 20;
            }
            else if (femaleObject.hair !== 'long' && femaleObject.hairColor !== 'blonde') {
                score += 10;
            }
            else if (femaleObject.hair !== 'long' && femaleObject.eyeColor !== 'blue'){
                score += 10;
            }
            else if (femaleObject.hairColor !== 'blonde' && femaleObject.eyeColor !== 'blue') {
                score += 10;
            }

            console.log(femaleObject);
            console.log(score);
        }

    }
})();
