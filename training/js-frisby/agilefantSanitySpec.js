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


frisby.create('Verify GET an Iteration')
    .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/143746?templates=Name')
    .expectStatus(200)
    .expectJSON([
        {
            "type": "iteration",
            "id": 143746,
            "name": "Example iteration"
        }
    ])
    .expectJSONTypes([
    {
        type: String,
        id: Number,
        name: String
    }
    ])
    .inspectJSON()
    .toss();