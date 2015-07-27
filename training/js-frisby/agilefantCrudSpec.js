/**
 * Created by maida sanchez on 22/07/2015.
 */

var frisby = require('frisby');

frisby.globalSetup({
    request:{
        headers: {
            'Authorization': 'Basic bWFpZGEuc2FuY2hlekBnbWFpbC5jb206Q29udHJvbDEyMw=='
        }
    }
});
frisby.create('Verify GET ALL backlogs of type templates=name')
    .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/all?templates=Name')
    .expectStatus(200)
    .expectJSON([
    {
        "type": "product",
        "id": 143744,
        "name": "Example product"
    },
    {
        "type": "project",
        "id": 143745,
        "name": "Example project",
        "parent": {
            "type": "product",
            "id": 143744
        }
    },
    {
        "type": "iteration",
        "id": 143746,
        "name": "Example iteration",
        "parent": {
            "type": "project",
            "id": 143745,
            "parent": {
                "type": "product",
                "id": 143744
            }
        }
    },
    {
        "type": "product",
        "id": 145426,
        "name": "MSI TEST 100"
    },
    {
        "type": "product",
        "id": 145427,
        "name": "Producto 20"
    },
    {
        "type": "project",
        "id": 145428,
        "name": "CGGP Project",
        "parent": {
        "type": "product",
        "id": 145427
    }
    },
    {
        "type": "iteration",
        "id": 145637,
        "name": "iteration1",
        "parent": {
            "type": "project",
            "id": 145428,
            "parent": {
               "type": "product",
                "id": 145427
            }
        }
    }
    ])
    .expectJSONLength(7)
    .inspectJSON()
    .toss();

frisby.create('Verify GET ALL backlogs of type templates=name')
    .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/all?templates=Name')
    .expectStatus(200)

    .expectJSONLength(7)
    .inspectJSON()
    .toss();


frisby.create('Verify GET a simple Project')
    .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/143744?templates=Name')
    .expectStatus(200)
    .expectJSON([
    {
        "type": "product",
        "id": 143744,
        "name": "Example product"
    }
    ])
    .inspectJSON()
    .toss();

 var productPOST = {
    "type": "product",
    "name": "Example product2"
 };

frisby.create('Verify POST a simple Project')
    .post('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs', productPOST,{json:true})
    .expectHeaderContains('Content-Type', 'json')
    .expectStatus(201)
    .afterJSON(function(result){
        console.log(result);
        frisby.create('verify GET PROJECT ')
            .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/'+result[0].id +'?templates=Name')
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



 // note the post operation with id do not return any value inside after json

var modifyProject = {"type": "product", "name": "anotherTESTFINAL"};
frisby.create('Verify PUT Project of type templates=name')
    .post('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/145663', modifyProject, {json:true})
    .expectHeaderContains("Cache-Control",'no-cache="set-cookie"')
    .expectStatus(200)
    .toss();

frisby.create('Verify DELETE Project of type templates=name')
    .delete('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/145663')
    .expectHeaderContains("Cache-Control",'no-cache="set-cookie"')
    .expectStatus(200)
.toss();