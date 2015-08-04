/**
 * Created by maida sanchez on 30/07/2015.
 */

var request = require('superagent');

var authorization = 'Basic bWFpZGEuc2FuY2hlekBnbWFpbC5jb206Q29udHJvbDEyMw==';

describe ('Agilefant', function(){
    it ('should GET a Project', function (done){
        request
            .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/145428?templates=Name')
            .set ('Authorization', authorization)
            .end(function(error, response){
                console.log('lenghth', response.body.length);
                console.log(response);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });
    });
    it ('should GET an Iteration', function (done){
        request
            .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/143746?templates=Name')
            .set ('Authorization', authorization)
            .end(function(error, response){
                console.log('length', response.body.length);
                console.log(response);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });
    });
    it ('should create a Story', function (done){
        request
            .post('https://cloud.agilefant.com:443/maidasanchez/api/v1/stories')
            .set('Authorization', authorization)
            .send({
                "type": "story",
                "name": "test-story-sa"})
            .end(function(error, response){
                if (error) throw error;
                expect(response.ok).toBe(true);
                expect(response.status).toBe(201);
                done();
            });
    });
    it ('should GET all Users by Template: Summary', function (done){
        request
            .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/users/all?templates=Summary')
            .set ('Authorization', authorization)
            .end(function(error, response){
                console.log('length', response.body.length);
                console.log(response);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });
    });
    it ('should GET Users login', function (done){
        request
            .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/users/all?templates=Summary')
            .set ('Authorization', authorization)
            .end(function(error, response){
                console.log('length', response.body.length);
                console.log(response);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });
    });

});
