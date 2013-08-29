//http://peter.michaux.ca/articles/hyper-private-variables-in-javascript

function Person(first, age) {

    // prvate methods
    var getFirstName,
        setFirstName,
        getAge,
        setAge;

    (function() {
        // _first is a hyper-private variable.
        // _first only visible to getFirstName and setFirstName.
        var _first;
        getFirstName = function() {
           // captialize the name
           return _first.charAt(0).toUpperCase() + _first.substr(1);  
        };
        setFirstName = function(v) {
            _first = v;
        };
    })();

    (function() {
        // _year is a hyper-private variable.
        // _year only visible to getAge and setAge.
        // Store birth year instead of age so that 
        // getAge always returns current age.
        var _year;
        getAge = function() {
           return (new Date()).getYear() - _year;  
        };
        setAge = function(v) {
            if (v < 0) {throw new Error('negative ages not allowed');}
            _year = (new Date()).getYear() - v;
        };
    })();

    // sayInfo is public method.
    // Cannot access _first or _age directly
    // so must use the getters.
    this.sayInfo = function() {
        alert(getFirstName() + ' ' + getAge());
    };

    // Cannot access _first or _age directly
    // so must use the setters.
    setFirstName(first);
    setAge(age);
}

var gisele = new Person('Gisele', 27);

gisele.sayInfo();