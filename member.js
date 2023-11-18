function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/members/member.html',
        scope: {
        member: '='
        },
        controller: function($scope) {
        $scope.getSkills = function() {
            var skills = [];
            for (var i = 0; i < $scope.member.skills.length; i++) {
            skills.push($scope.member.skills[i].name);
            }
            return skills.join(', ');
        };
        }
    };
}
