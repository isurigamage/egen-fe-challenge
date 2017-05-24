
(function () {
    "use strict";

    angular
        .module("onlineClassScheduler")
        .controller("ClassEditCtrl",
        ["selectedClass",
            "$location",
            ClassEditCtrl]);

    function ClassEditCtrl(selectedClass, $location) {
        var vm = this;

        vm.class = selectedClass;
        vm.title = "";

        // vm.class.startDate = new Date(vm.class.startDate);
        // vm.class.endDate = new Date(vm.class.endDate);

        if (vm.class && vm.class.classId) {
            vm.title = "Edit: " + vm.class.className;
        }
        else {
            vm.title = "New User";
        }

        vm.cancelEntry = function (control, event) {
            if (event.keyCode == 27) {
                control.$rollbackViewValue();
            }
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.class.$save();
                $location.path("/classList");
            }
        };

        vm.cancel = function () {
            $location.path("/classList");
        };
    }
}());
