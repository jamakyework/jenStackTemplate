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
        console.log( 'back from get call:', response);

// need object from server side
for(var i = 0; i < response.length; i++){
  var outputText = '';
  // outputText += '<p>' + response[i].eventName + " "+ response[i].athleteName + " " + response[i].award + '</p>';
  outputText += '<p>' + response[i].award + '</p>';
}

      $( "#outputDiv").append(outputText);
      // displayOnDom(response);
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
      // displayOnDom(response);
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

  var displayOnDom = function(testGetFunc){
    $("#outputDiv").empty();
      console.log("In testGet Show:",testGetFunc);
      $( "#outputDiv").append("<p>" + testGetFunc.field0 + "</p>");
  };

}); //end doc ready
