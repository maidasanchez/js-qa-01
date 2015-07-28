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

frisby.create('Verify GET a Project')
    .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/145428?templates=Name')
    .expectStatus(200)
    .expectJSON([
        {
            "type": "project",
            "id": 145428,
            "name": "CGGP Project"
        }
    ])
    .inspectJSON()
    .toss();

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
    .inspectJSON()
    .toss();

var storyPOST = {
    "type": "story",
    "name": "test-story"
};

frisby.create('Verify create a Story')
    .post('https://cloud.agilefant.com:443/maidasanchez/api/v1/stories', storyPOST,{json:true})
    .expectHeaderContains('Content-Type', 'application/json;charset=UTF-8')
    .expectStatus(201)
    .afterJSON(function(result){
        console.log(result);
        frisby.create('Verify Get a story')
            .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/stories/'+result[0].id)
            .expectStatus(200)
            .expectJSON([
                {
                    "type": result[0].type,
                    "id": result[0].id,
                    "name": result[0].name
                }
            ])
            .toss();
    })
    .inspectJSON()
    .toss();

frisby.create('Verify GET all Users by Template: Summary')
    .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/users/all?templates=Summary')
    .expectStatus(200)
    .expectHeaderContains('Content-type', 'application/json;charset=UTF-8')
    .inspectJSON()
    .toss();

frisby.create('Verify GET Users login')
    .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/users/loggedIn')
    .expectStatus(200)
    .expectHeaderContains('Content-type', 'application/json;charset=UTF-8')
    .inspectJSON()
    .toss();