var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

async function signIn(data, setWebState) {
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  await fetch("http://localhost:5000/api/v1/prodigit/signIn", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", result.token);
      setWebState(2);
    })
    .catch((error) => {
      setWebState(1);
      alert("error occured");
      console.log("error", error);
    });
}

export default signIn;
