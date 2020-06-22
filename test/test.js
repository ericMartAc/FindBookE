var request = require('supertest');
var app = require('../src/index.js');

describe('GET /', function() {
	if( function(done) {
		request(app).get('/').expect('index run', done);
	}); 
});