console.log( 'genero sourced' );

$( document ).ready( function(){
  console.log( 'JQ' );

  // test get function
  var getData = function(){
    console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/testGet',
      success: function( response ){
        console.log( 'back from get call:', response );
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    })
  }; // end getData

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
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    })
  }; // end getData

  /// - buttons to test - ///
  $( '#testGetButton' ).on( 'click', function(){
    console.log( 'in testGetButton on click' );
    getData();
    $('#outputDiv').append(getData());
  }); // end testGetButton
  $( '#testPostButton' ).on( 'click', function(){
    console.log( 'in testPostButton on click' );
    postData();
  }); // end testGetButton

}); //end doc ready
