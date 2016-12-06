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
      displayOnDom(response);
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end getData

  // test get function
  var postData = function(){
    console.log( 'in postData' );
    // assemble object to send

    var newItem = {
      eventName: $("#eventName").val(),
      athleteName:$("#athleteName").val(),
      award:$("#award").val()
    };
   // end object to send

    $.ajax({
      type: 'POST',
      url: '/testPost',
      data: newItem,
      success: function( response ){
        console.log( 'back from post call:', response );
      displayOnDom(response);
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end getData

  /// - buttons to test - ///
  $( '#testGetButton' ).on( 'click', function(){
    console.log( 'in testGetButton on click' );
    getData();
  }); // end testGetButton

//new postButton
  $("#testPostButton").on("click", function(){
    console.log("is test post working");
    postData();
     //end new postButton
 });

  // $( '#testPostButton' ).on( 'click', function(){
  //   console.log( 'in testPostButton on click' );
  //   postData();
  // }); // end testPostButton

  var displayOnDom = function(testGetFunc){
    $("#outputDiv").empty();
      console.log("In testGet:",testGetFunc);
      $( "#outputDiv").append("<p>" + testGetFunc.field0 + "</p>");
  };

}); //end doc ready
