$(document).ready(function(){
  // loading the url
  let url = "https://newsapi.org/v2/everything?q=apple&from=2021-10-13&to=2021-10-13&sortBy=popularity&apiKey=6aa2c474003e460b94dc2e4479d45fd2";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    // display preloaded to the user
    beforeSend: function() {
      $(".progress").show();
    },
    // request is complete
    complete: function() {
      $(".progress").hide();
    },

    //if it is success then:
    success: function (newsdata) {
      let output = "";
      let latestNews = newsdata.articles;//array of articles are present inside the object so here to use newsdata passing it as a parameter
      for (var i in latestNews) {
        //`` is going to be our html templete how the things are going to be designed on the page
        output += `
          <div class="col l3 m6 s12">
              <h3>${latestNews[i].id}</h3>
          </div>
        `;
      }

      if (output !== "") {
        $("#newsResults").html(output);
      }

    },
    //if it is success then:
    error: function () {
      let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
      $("#newsResults").html(errorMsg);
    }
  })

});
