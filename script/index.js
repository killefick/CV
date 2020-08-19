fetch("https://api.github.com/users/killefick/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // console.log("github api", json);

    var githubrepos = document.getElementById("githubrepos");
    // console.log(githubrepos);

    json.forEach((repo) => {
      githubrepos.insertAdjacentHTML(
        "beforeend",
        "<div class='repo-container'>" +
          "<a href=" +
          repo.html_url +
          " class='expand' target=blank>" +
          "<div>" +
          repo.name +
          "</div>" +
          "</a>" +
          "</br>" +
          "</div>"
      );
    });
  });
