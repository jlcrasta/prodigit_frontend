var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

async function register(data, updatePage) {
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  await fetch("http://localhost:5000/api/v1/prodigit/register", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      updatePage(2);
    })
    .catch((error) => {
      alert("error occured");
      console.log("error", error);
    });
}

export default register;
