
var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":true}));

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

var person = function(args){


    var _schema = {
            "@context": "http://schema.org",
            "@type": "Person",
            "email":"",
            "image": "",
            "jobTitle": "",
            "name": "",
            "telephone": "",
            "url": ""
    };

    for(var x in args){
        if(_schema.hasOwnProperty(x)){
            _schema[x] = args[x];
        }
    }

    return _schema;
}
/*
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
*/

function event(){
    return {
  "@context": "http://schema.org/",
  "@type": "Event",
  "name": "The Missoula Marathon",
  "sponsor": {
    "@type": "Organization",
    "name": "Run Wild Missoula",
    "url": "http://www.runwildmissoula.org/"
        },
  "startDate": "2016-07-10T06:00",
  "offers": [
    {
      "@type": "Offer",
      "url": "http://www.runwildmissoula.org/runwild/index.php/ID/mmar2016/fuseaction/register.main.htm",
      "validFrom": "2015-10-01T00:01",
      "validThrough": "2016-01-31T23:59",
      "price": "85.00",
      "priceCurrency": "USD"
    },{
      "@type": "Offer",
      "url": "http://www.runwildmissoula.org/runwild/index.php/ID/mmar2016/fuseaction/register.main.htm",
      "validFrom": "2016-02-01T00:01",
      "validThrough": "2016-06-14T23:59",
      "price": "95.00",
      "priceCurrency": "USD"
    },{
      "@type": "Offer",
      "url": "http://www.runwildmissoula.org/runwild/index.php/ID/mmar2016/fuseaction/register.main.htm",
      "validFrom": "2016-06-15T00:01",
      "validThrough": "2016-07-09T23:59",
      "price": "125.00",
      "priceCurrency": "USD"
    }
    ],
  "description": "The Missoula Marathon course is flat, fast, USATF certified, and a Boston Qualifier! The marathon course does have a significant hill at the halfway point. The course is a point-to-point, beginning with a scenic route through the countryside and finishing in historic downtown Missoula. The marathon course is well marked with both cones and arrows on the road. You will notice every mile is marked on the road and with 8ft tall mile markers. Wheelchair and Handcycle: We are pleased to offer wheelchair and handcycle divisions in the 2016 Full and Half Marathon.",
  "location": {
    "@type": "Place",
    "name": "Missoula, MT",
    "url": "http://www.ci.missoula.mt.us/",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Missoula",
      "addressRegion": "MT"
    },
    "hasMap": "http://www.missoulamarathon.org/wp-content/uploads/2015/06/2015-MM-Course-Map-V1-6-2-15.png"
    }
}
}

var people = [];
people.push(new person({"name":"will"}), 
            new person({'name':'tj', telephone:'555-1212'}))

var entities = {
    'person':people,
    'event': [new event(), new event()],
    'blargh':[{id:1},{id:2}]
};

for (var entity in entities){

(function(_entity){
    console.log(_entity)
    app.get('/'+entity, function(req, res){
        var _entity_filtered = entities[_entity].filter(function(__entity){
            var _returnvalue = true;
            for(var prop in req.query){
                if(!__entity.hasOwnProperty(prop) ||
                    req.query[prop]!==__entity[prop]){
                    _returnvalue = false;
                }
            }
            return _returnvalue;
        })
        res.send(_entity_filtered);
    });

    app.post('/'+entity, function(req, res){
        
        var found_em = false;
        var _p = null;


    })
    })(entity)
}
app.listen(3000)