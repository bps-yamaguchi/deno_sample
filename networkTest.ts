const data = fetch("https://raw.githubusercontent.com/bps-yamaguchi/deno_sample/main/dummy_data.json");
data.then((response) => {
    return response.json()
  }).then((jsonData) => {
    console.log(jsonData)
  })