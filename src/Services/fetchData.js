async function fetchDetails(name, mobile, email) {
  var myHeaders = new Headers();
  myHeaders.append("token", `Bearer ${localStorage.token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  await fetch("http://localhost:5000/api/v1/prodigit/user", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      name(result.user.name);
      mobile(result.user.mobile);
      email(result.user.email);
    })
    .catch((error) => {
      alert("error occured");
      console.log("error", error);
    });
}

export default fetchDetails;
