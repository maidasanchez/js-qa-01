/**
 * Created by maida sanchez on 04/08/2015.
 */

var request = require('superagent');

var authorization = 'Basic bWFpZGEuc2FuY2hlekBnbWFpbC5jb206Q29udHJvbDEyMw==';

describe ('Agilefant', function(){
    it ('should not create a story without a needed field', function (done){
        request
            .post('https://cloud.agilefant.com:443/maidasanchez/api/v1/stories')
            .set('Authorization', authorization)
            .send({
                "type": "story"})
            .end(function(error, response){
                //console.log(error);
                //if (error)throw error;
                expect(response.ok).toBe(false);
                expect(response.status).toBe(500);
                done();
            });
    });
    it ('should create a story with special characters', function (done){
        request
            .post('https://cloud.agilefant.com:443/maidasanchez/api/v1/stories')
            .set('Authorization', authorization)
            .send({
                "type": "story",
                "name": "<>?>>>>??|ZX|ZX@!#!@#!@#||"})
            .end(function(error, response){
                expect(response.ok).toBe(true);
                expect(response.status).toBe(201);
                done();
            });
    });
});
