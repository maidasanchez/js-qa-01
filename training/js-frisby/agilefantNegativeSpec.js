/**
 * Created by maida sanchez on 27/07/2015.
 */

var frisby = require('frisby');

frisby.globalSetup({
    request:{
        headers: {
            'Authorization': 'Basic bWFpZGEuc2FuY2hlekBnbWFpbC5jb206Q29udHJvbDEyMw=='
        }
    }
});


var storyPOST = {
    "type": "story"
};

frisby.create('Verify that can not create a story without a needed field')
    .post('https://cloud.agilefant.com:443/maidasanchez/api/v1/stories', storyPOST,{json:true})
    .expectStatus(500)
    .expectJSON({
        'errorMessage': 'There was an error processing the request, please try again later. Exception: org.hibernate.exception.ConstraintViolationException: could not execute statement'
    })
    .inspectJSON()
    .toss();

var storyPOST2 = {
    "type": "story",
    "name": "<>?>>>>??|ZX|ZX@!#!@#!@#||"
};

frisby.create('Verify that can create a story with special characters')
    .post('https://cloud.agilefant.com:443/maidasanchez/api/v1/stories', storyPOST2,{json:true})
    .expectStatus(201)
    .inspectJSON()
    .toss();
