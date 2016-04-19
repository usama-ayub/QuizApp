var first=angular.module("first",['ngRoute']);

first.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'templates/Login.html',controller:'ctrl1'
        })
        .when('/quiz', {
            templateUrl : 'templates/quiz.html',controller:'ctrl1'
        })
        .when('/result', {
            templateUrl : 'templates/result.html'
        });
});



first.controller("ctrl1",function($scope,$location){
    $scope.arr=[
        {question:"Which tag makes the largest headline?",option:[
            {answer:'H4', iscorrect:false},
            {answer:'H1', iscorrect:true},
            {answer:'H6', iscorrect:false},
            {answer:'H2', iscorrect:false}
        ]},
        {question:"Which attribute of the element specifies a linked document’s location?",option:[
            {answer:'href', iscorrect:true},
            {answer:'url', iscorrect:false},
            {answer:'link', iscorrect:false},
            {answer:'scr', iscorrect:false}
        ]},
        {question:" What does HTML stand for?",option:[
            {answer:'Hyperlinks and Text Markup Language', iscorrect:false},
            {answer:'Home Tool Markup Language.', iscorrect:false},
            {answer:' HyperText Markup Language', iscorrect:true},
            {answer:' HyperText Makup Language', iscorrect:false}
        ]}
    ];

    $scope.index=0;
    $scope.count=0;
    $scope.next=function(){
        $scope.arr[$scope.index].option.forEach(function(obj){
            if(obj.iscorrect==true){
                if(obj.answer==$scope.arr[$scope.index].answer)  {
                    $scope.count++
                }
            }
        });
        if($scope.index==$scope.arr.length-1){
            $location.path('/result')
        }
        else{
            $scope.index++;
        }
    };
    $scope.studentCreated = [];
    localStorage.setItem('save', JSON.stringify($scope.studentCreated));
    $scope.student = [];
    localStorage.setItem('save1', JSON.stringify($scope.student));

    $scope.given = "Account have";
    /*creat account*/

    $scope.name1 = "";
    $scope.roll1 = "";

    $scope.created = function () {
        if ($scope.name1.length > 2 && $scope.roll1.length > 2) {
            $scope.studentCreated.push({name: $scope.name1, Roll: $scope.roll1});

            /*$location.path('/quiz');*/
            alert("enter");
        }
        else {
            alert("please enter username and password!!");
        }
    };
    /*login part*/
    $scope.login = function (name, roll) {
        var na = 0;
        while (na < $scope.studentCreated.length) {
            //check if name exist in database
            if ($scope.studentCreated[na].name == name) {
                console.log("exist!!");
                //check password is correct or not
                if ($scope.studentCreated[na].Roll == roll) {
                    var obj = {
                        name: name,
                        Roll: roll
                    };
                    $scope.student.push(obj);
                    $location.path('/quiz');
                    console.log("Account have");
                    break;
                }
                else {
                    console.log("password incorrect!!");
                }
            }
            na++;
        }
    };
    $scope.logout = function() {
        $location.path('/');
        console.log($scope.studentCreated)
    }
});

/*   $scope.login = function(name, roll) {
 for (i = 0; i <= $scope.studentCreated.length; i++) {
 if ($scope.studentCreated[na].name == name) {
 console.log("exist!!");
 //check password is correct or not
 if ($scope.studentCreated[na].Roll == roll) {
 var obj = {
 name: name,
 Roll: roll
 };
 $scope.student.push(obj);
 alert($scope.given);
 $location.path('/quiz');
 }
 else {
 console.log("password incorrect!!");
 }
 }
 }
 }
 });
 */
/*
 else{$scope.index++;
 if($scope.index++){
 alert("wrong")}}
 } */
