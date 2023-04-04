const btnEL = document.getElementById("btn")

const apiKey = "LSwMMsGyAfilr0w0y3dWdw==9ReGV5VEwWPOWfKO"

const options = {
    method: "GET",
    headers:{
         "X-Api-Key": apiKey,
  },
};

const apiURL = "http://api.api-ninjas.com/v1/dadjokes?limit=1";

function getJoke(){
    const response = await fetch( apiURL, options);
    const data =await response.json();

    console.log(data);
}

btnEL.addEventListener("click", getJoke);