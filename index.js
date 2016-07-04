
var my_string = "my string";

var my_integer = 1;

var my_float = 1.01;

var my_boolean = true;

var my_null = null;

var my_undefined = undefined;

var my_array = [1,2,3,4,5];

var my_object = {
    key1: 'value1',
    key2: 'value2'
};

var namespaces = {
    "schema.org":{
        "person" : {
            "@context": "http://schema.org",
            "@type": "Person",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "postalCode": "98052",
                "streetAddress": "20341 Whitworth Institute 405 N. Whitworth"
            },
            "colleague": [
                "http://www.xyz.edu/students/alicejones.html",
                "http://www.xyz.edu/students/bobsmith.html"
            ],
            "email": "mailto:jane-doe@xyz.edu",
            "image": "janedoe.jpg",
            "jobTitle": "Professor",
            "name": "Jane Doe",
            "telephone": "(425) 123-4567",
            "url": "http://www.janedoe.com"
            }
    }
};

var person = function(){
    return {
            "@context": "http://schema.org",
            "@type": "Person",
            "image": "",
            "jobTitle": "",
            "name": "",
            "telephone": "",
            "url": ""
    };
}

var telephone_operator = new person();

telephone_operator.setTelephoneNumber = function(person, telephone_number){
    person.telephone = telephone_number;
}

telephone_operator.setTelephoneNumber(telephone_operator, '555-1212');
console.log(telephone_operator)

var my_function = function(argument){
    if(typeof argument === 'number'){
      argument+=1;
    }
      console.log(argument);

}

var my_constructor_function = function(){
    this.cool_property = 'stuff';
    return this;
}

my_object.new_property = my_string;
my_object["new_property2"] = my_float;

my_function(my_object.new_property);
my_function(my_object.new_property2);
my_function(new my_constructor_function());