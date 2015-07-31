/**
 * Created by maida sanchez on 30/07/2015.
 */

var request = require('superagent');

var authorization = 'Basic bWFpZGEuc2FuY2hlekBnbWFpbC5jb206Q29udHJvbDEyMw==';

describe ('Agilefant', function(){
    xit ('should return projects with authentication', function (done){
        request
            .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/145428?templates=Name')
            .set ('Authorization', authorization)
            .end(function(error, response){
                console.log('lenght', response.body.length);
                console.log(response);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });
    });
    xit ('should get an specific backlog', function (done){
        request
            .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/143744?templates=Name')
            .set ('Authorization', authorization)
            .end(function(error, response){
                console.log('lenght', response.body.length);
                console.log(response.status);
                expect(response.status).toBe(200);
                expect(response.body.length).toBe(1);
                done();
            });
    });
    it ('should create a new backlog', function (done){
        request
            .post('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs')
            .set('Authorization', authorization)
            .send({
                "type": "product",
                "name": "Example product from Super Agent"})
            .end(function(error, response){
                if (error) throw error;
                //console.log(response.body.type);
                //console.log(response.error);
                console.log(response.text.);
                //console.log(response.ok);
                expect(response.ok).toBe(true);
                expect(response.status).toBe(201);
                done();
            });
    });
});