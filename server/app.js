var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;
var events =[];

app.listen( port, function( req, res ){
  console.log( 'server listening on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// testGet
app.get( '/testGet', function( req, res ){
  console.log( 'testGet url hit' );
  // do work here
  // assemble object to return
  var objectToReturn =
  {
    field0: 'I came from testGet on server'
  }; // end object to return
  // return objectToReturn
  res.send( events );
}); // end testGet

// testPost
app.post( '/testPost', urlEncodedParser, function( req, res ){
  console.log( 'testPost url hit. req.body:', req.body );
events.push(req.body);
console.log("This is in events:", events);
  // do work here
  // assemble object to return
  var objectToReturn =
  {
    field0: 'I came from userInput on server'
  }; // end object to return
  // return objectToReturn
  res.send( objectToReturn );
}); // end testPost

// static folder
app.use( express.static( 'public' ) );
