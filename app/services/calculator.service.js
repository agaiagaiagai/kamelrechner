(function () {
    'use strict';

    angular.module('kamelrechner').service('CalculatorService', [CalculatorService]);

    function CalculatorService() {

        var score = 0;

        this.score = 0;

        this.ageSlider = {
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
        this.heightSlider = {
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

        this.CalculateScore = function(person) {

            SetScore(person.gender);

            SetAgeScore(person.gender, person.age);
            SetHeightScore(person.gender, person.height);
            SetHairLengthScore(person.gender, person.hairLength);
            SetHairColorScore(person.gender, person.hairColor);
            SetEyeColorScore(person.gender, person.eyeColor);
            SetBodyTypeScore(person.gender, person.bodyType);
            SetAdditionalScore(person);

            if(person.gender === 'female'){
                SetBoobSizeScore(person.boobSize);
            }
            else {
                SetBeardScore(person.beard);
            }

            this.score = score;
        }


        //Setting base score based on gender with all default values and min values for age and height
        function SetScore(gender) {
            if(gender === 'female') {
                score = 56;
            }
            else {
                score = 50;
            }
        };


        //Functions for updating the score
        function SetAgeScore(gender, age) {
            switch(age) {
                case 14:
                    score += 0;
                    break;
                case 15:
                    score += 2;
                    break;
                case 16 || 17:
                    score += 4;
                    break;
                case age >= 18 && age <= 22 && age:
                    score += 8;
                    break;
                case age >= 23 && age <= 27 && age:
                    score += 6;
                    break;
                case age >= 28 && age <= 30 && age:
                    score += 3;
                    break;
                case age >= 31 && age <= 40 && age:
                    score -= 1;
                    break;
                case age >= 41 && age <= 45 && age:
                    score -= 2;
                    break;
                case age >= 46 && age <= 49 && age:
                    score -= 3;
                    break;
                case 50:
                    if(gender === 'female') {
                        score -= 28;
                    }
                    else {
                        score -= 3;
                    }
                    break;
                case age >= 51 && age <= 59 && age:
                    if(gender === 'female') {
                        score -= 29;
                    }
                    else {
                        score -= 4;
                    }
                    break;
                case age >= 60 && age:
                    if(gender === 'female') {
                        score -= 29;
                    }
                    else {
                        score -= 24;
                    }
                    break;
            }
            
        }
        function SetHeightScore(gender, height){
            if(gender === 'female') {
                switch(height) {
                    case height >= 140 && height < 145 && height:
                        score += 0;
                        break;
                    case height >= 145 && height < 150 && height:
                        score += 1;
                        break;
                    case height >= 150 && height < 160 && height:
                        score += 4;
                        break;
                    case height >= 160 && height < 165 && height:
                        score += 7;
                        break;
                    case height >= 165 && height < 170 && height:
                        score += 11;
                        break;
                    case height >= 170 && height <= 180 && height:
                        score += 12;
                        break;
                    case height >= 181 && height <= 185 && height:
                        score += 5;
                        break;
                    case height >= 186 && height <= 195 && height:
                        score += 3;
                        break;
                    case height >= 196 && height <= 220 && height:
                        score += 0;
                        break;
                }
            }
            else {
                switch(height) {
                    case height >= 140 && height < 145 && height:
                        score += 0;
                        break;
                    case height >= 145 && height < 150 && height:
                        score += 1;
                        break;
                    case height >= 150 && height < 165 && height:
                        score += 4;
                        break;
                    case height >= 165 && height < 170 && height:
                        score += 9;
                        break;
                    case height >= 170 && height < 175 && height:
                        score += 10;
                        break;
                    case height >= 175 && height <= 180 && height:
                        score += 12;
                        break;
                    case height >= 181 && height <= 185 && height:
                        score += 8;
                        break;
                    case height >= 185 && height <= 195 && height:
                        score += 6;
                        break;
                    case height >= 196 && height:
                        score += 0;
                        break;
                }
            }
        }
        function SetHairLengthScore(gender, length) {

            if(gender === 'female') {
                switch(length) {
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
            }
            else {
                switch(length) {
                    case 'long':
                        score += 0;
                        break;
                    case 'middle':
                        score += 18;
                        break;
                    case 'short':
                        score += 8;
                        break;
                    case 'bald':
                        score += 3;
                        break;
                }
            }
        }
        function SetHairColorScore(gender, hairColor) {
            if(gender === 'female') {
                switch(hairColor) {
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
            }
            else {
                switch(hairColor) {
                    case 'blonde':
                        score += 0;
                        break;
                    case 'brown':
                        score -= 2;
                        break;
                    case 'black':
                        score -= 4;
                        break;
                    case 'red':
                        score -= 10;
                        break;
                    case 'gray':
                        score -= 4;
                        break;
                }
            }
        }
        function SetEyeColorScore(gender, eyeColor) {
            if(gender === 'female') {
                switch(eyeColor) {
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
            }
            else {
                switch(eyeColor) {
                    case 'blue':
                        score += 0;
                        break;
                    case 'green':
                        score -= 2;
                        break;
                    case 'brown':
                        score -= 6;
                        break;
                    case 'gray':
                        score -= 4;
                        break;
                }
            }
        }
        function SetBodyTypeScore(gender, bodyType) {
            if(gender === 'female') {
                switch(bodyType) {
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
            }
            else {
                switch(bodyType) {
                    case 'normal':
                        score += 0;
                        break;
                    case 'thin':
                        score -= 3;
                        break;
                    case 'fat':
                        score -= 7;
                        break;
                }
            }
        }
        function SetAdditionalScore(person) {
            if (person.gender === 'female') {

                //Hair and eyes additional score
                if (person.hairLength !== 'long' && person.hairColor !== 'blonde' && person.eyeColor !== 'blue') {
                    score += 20;
                }
                else if (person.hairLength !== 'long' && person.hairColor !== 'blonde') {
                    score += 10;
                }
                else if (person.hairLength !== 'long' && person.eyeColor !== 'blue'){
                    score += 10;
                }
                else if (person.hairColor !== 'blonde' && person.eyeColor !== 'blue') {
                    score += 10;
                }
            }
            else {
                if (person.hairLength === 'middle' && person.hairColor !== 'blonde') {
                    score -= 10;
                }
                else if (person.hairLength === 'middle' && person.eyeColor !== 'blue'){
                    score -= 10;
                }
            }
        }


        //Female calculator only
        function SetBoobSizeScore(boobSize) {
            switch(boobSize) {
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
        }

        //Male calculator only
        function SetBeardScore(beard) {
            switch(beard) {
                case 'a':
                    score += 0;
                    break;
                case 'b':
                    score -= 5;
                    break;
                case 'c':
                    score += 4;
                    break;
                case 'd':
                    score += 2;
                    break;
            }
        }

    }

})();