const api_url =
  "https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=1&vote_average.gte=5";

// Defining async function
async function getapi(url, int, int) {
  // Storing response
  const response = await fetch(url).then((d) => d.json());

  // Storing data in form of JSON

  console.log(response);
  console.log(response["results"][0]["title"]);

  data = "";
  for (i = 0; i <= 19; i++) {
    html = `
      
    <div class="card m-5" id=${i} style="width: 18rem;">
        <img src='https://image.tmdb.org/t/p/w500${response["results"][i]["backdrop_path"]}' class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${response["results"][i]["title"]}</h5>
            
            <p class="card-text">Average Vote: ${response["results"][i]["vote_average"]}</p>
            <p class="card-text">Vote count: ${response["results"][i]["vote_count"]}</p>
            <p class="card-text">Release Date: ${response["results"][i]["release_date"]}</p>
           
        </div>
    </div>

    

    `;
    data += html;
  }

  test = document.getElementById("mydiv");
  test.innerHTML = data;
  test.style.cssText = "style: display: inline-block;";
  document.body.appendChild(test);
}

getapi(api_url, 10, 10);
