console.log( 'genero sourced' );

$( document ).ready( function(){
  console.log( 'JQ' );


// var getDataArray=[];
// var postDataArray=[];

  // test get function
  var getData = function(){
    console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/testGet',
      success: function( response ){
        console.log( 'back from get call:', response );
        $( "#outputDiv").append("<p>" + response.field0 + "</p>");
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end getData
    // console.log("what is in get data array:", getDataArray);  // check to see if variable was pushed to global var

  // test get function
  var postData = function(){
    console.log( 'in postData' );
    // assemble object to send
    var objectToSend={
      tester: 'testy'
    }; // end object to send

    $.ajax({
      type: 'POST',
      url: '/testPost',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from post call:', response );
      displayOnDom
      $( "#outputDiv").append("<p>" + response.field0 + "</p>");
      },
      error: function(){
        console.log( 'error with ajax call...');

      }
    });
  }; // end getData

  // console.log("what is in get post array:", postDataArray); // check to see if variable was pushed to global var

  /// - buttons to test - ///
  $( '#testGetButton' ).on( 'click', function(){
    console.log( 'in testGetButton on click' );
    getData();
    // displayOnDom(getDataArray);
  }); // end testGetButton
  $( '#testPostButton' ).on( 'click', function(){
    console.log( 'in testPostButton on click' );
    postData();
    // displayOnDom(postDataArray);
  }); // end testGetButton

  // var displayOnDom = function(testGetFunc){
  //   $("#outputDiv").empty();
  //     console.log("In testGet:",testGetFunc);
  //};

}); //end doc ready
