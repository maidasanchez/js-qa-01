/**
 * Created by maida sanchez on 04/08/2015.
 */
var request = require('superagent');

var authorization = 'Basic bWFpZGEuc2FuY2hlekBnbWFpbC5jb206Q29udHJvbDEyMw==';

describe ('Agilefant', function(){
    it ('should return error when getting teams without authorization by template: Name', function (done){
        request
            .get('https://cloud.agilefant.com:443/maidasanchez/api/v1/teams/all?templates=Name')
            //.set ('Authorization', authorization)
            .end(function(error, response){
                expect(response.ok).toBe(false);
                expect(response.status).toBe(401);
                done();
            });
    });
});