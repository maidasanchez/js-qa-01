/**
 * Created by maida sanchez on 27/07/2015.
 */

var frisby = require('frisby');
/*
frisby.globalSetup({
    request:{
        headers: {
            'Authorization': 'Basic bWFpZGEuc2FuY2hlekBnbWFpbC5jb206Q29udHJvbDEyMw=='
        }
    }
});
*/
frisby.create('Agilefant should return error when getting teams without authorization by template: Name')
    .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/teams/all?templates=Name')
    .expectStatus(401)
    .expectJSON({
        errorMessage: 'Unauthenticated user cannot access this resource!'
    })
    .inspectJSON()
    .toss();