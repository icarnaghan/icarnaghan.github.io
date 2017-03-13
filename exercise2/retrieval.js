$(document).ready(function () {

  $('#retrieve-resources').click(function () {
    var displayResources = $('#display-resources');
    var iso2code = $('#country').val(); // this variable should capture text input from the user

    displayResources.text('Loading data from JSON source...');
    /* AJAX Call to RESTful Service */
    $.ajax({
      type: "get",
      url: "http://services.groupkt.com/country/search",
      data:  {text: iso2code}, // Use the format { parameterName: variable },
      success: function(result) {
      
        console.log(result);
        // Build output render
        var output="<table><thead><tr><th>Name</th><th>Alpha 2 Code</th><th>Alpha 3 Code</th></thead><tbody>";
        for (var i in result.RestResponse.result)
        {
          output+="<tr><td>" + (result.RestResponse.result[i].name + "</td><td>" + result.RestResponse.result[i].alpha2_code +
           "</td><td>" + result.RestResponse.result[i].alpha3_code + "</td></tr>");
        }
        output +="</tbody></table>";
        // Add data to the output render
        // Create a for loop that will iterate over the result.RestResponse.result object and add <tr><td> element
        // Hint: You will want to display result.RestResponse.result[i].name, result.RestResponse.result[i].alpha2_code, and result.RestResponse.result[i].alpha3_code in your table


        displayResources.html(output);

        // Add bootstrap class to the table for styling
        $("table").addClass("table");
      }
    });
  });
});
