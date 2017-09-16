    //array of strings
    var topics = ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali", "Amy Farrah Fowler"];

    //display Gifs
    function displayGifs() {

      var topic = $(this).attr("data-interest");

      var queryURL ="http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

      //AJAX call

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {

        console.log(queryURL);

        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var gifsDiv = $("<div>");


          var rating = $("<p>").text("Rating: " + results[i].rating);

          var gifsImage = $("<img>");

          gifsImage.attr("src", results[i].images.fixed_width.url);

          $(gifsDiv).append(gifsImage);

          $("#gifs-view").prepend(gifsDiv);
        }
        
      });
    }

    function renderButtons() {
      $("#buttons-view").empty();

      for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");

        a.addClass("topic");

        a.attr("data-interest", topics[i]);

        a.text(topics[i]);

        $("#buttons-view").append(a);
      }
    }

    $("#add-topic").on("click", function(event) {

      event.preventDefault();

      var topic = $("#topic-input").val().trim();

      topics.push(topic);

      renderButtons();
    });

    $(document).on("click", ".topic", displayGifs);

    renderButtons();


