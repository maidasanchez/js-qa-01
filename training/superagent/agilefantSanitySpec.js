/**
 * Created by maida sanchez on 04/08/2015.
 */
var request = require('superagent');

var authorization = 'Basic bWFpZGEuc2FuY2hlekBnbWFpbC5jb206Q29udHJvbDEyMw==';

describe ('Agilefant', function(){
    it ('should GET an Iteration', function (done){
        request
            .get('ttps://cloud.agilefant.com:443/maidasanchez/api/v1/backlogs/143746?templates=Name')
            .set ('Authorization', authorization)
            .end(function(error, response){
                console.log('length', response.body.length);
                console.log(response);
                expect(response.body.length).toBeGreaterThan(0);
                done();
            });
    });
});