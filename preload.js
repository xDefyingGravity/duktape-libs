/** console */
function internal__print_unavailable_warning() {
    print("[warning] function is not fully available in this environment");
}

if (typeof(console) === undefined) {
    console = {
        countTrackers: {},
        timeTrackers: {},
    };
    console.log = function(message) {
        print(message);
    };
    console.error = function(message) {
        error(message);
    };
    console.warn = function(message) {
        print(message);
    };
    console.info = function(message) {
        print(message);
    };
    console.debug = function(message) {
        print(message);
    };

    console.count = function(label) {
        if (!console.countTrackers[label]) {
            console.countTrackers[label] = 0;
        }
        console.countTrackers[label]++;
        print(label + ": " + console.countTrackers[label]);
    };
    console.countReset = function(label) {
        console.countTrackers[label] = 0;
    };

    console.time = function(label) {
        console.timeTrackers[label] = new Date();
    };
    console.timeEnd = function(label) {
        var time = new Date() - console.timeTrackers[label];
        print(label + ": " + time + "ms");
    };

    console.group = function(label) {
        internal__print_unavailable_warning();
        print(label);
    };
    console.groupEnd = function() {
        internal__print_unavailable_warning();
        print();
    };
    console.groupCollapsed = function(label) {
        internal__print_unavailable_warning();
        print(label);
    };
    console.table = function(data) {
        internal__print_unavailable_warning();
        print(data);
    };
    console.trace = function() {
        print(new Error().stack);
    };
    console.assert = function(condition, message) {
        if (!condition) {
            print("Assertion failed: " + message);
        } else {
            print("Assertion passed: " + message);
        }
    };
    console.timeStamp = function(label) {
        internal__print_unavailable_warning();
        print(label);
    };

    console.profile = function(label) {
        internal__print_unavailable_warning();
        print(label);
    };
    console.profileEnd = function(label) {
        internal__print_unavailable_warning();
        print(label);
    };
    console.timeLog = function(label) {
        internal__print_unavailable_warning();
        print(label);
    };
    console.timeEnd = function(label) {
        internal__print_unavailable_warning();
        print(label);
    };
    console.timeStamp = function(label) {
        internal__print_unavailable_warning();
        print(label);
    }
    console.timeStampEnd = function(label) {
        internal__print_unavailable_warning();
        print(label);
    };
}
