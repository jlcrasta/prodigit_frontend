async function updateDetails(data, number, email) {
  var myHeaders = new Headers();
  myHeaders.append("token", `Bearer ${localStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  await fetch(
    "http://localhost:5000/api/v1/prodigit/editDetails",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      number(result.mobile);
      email(result.email);
    })
    .catch((error) => {
      console.log("error", error);
      alert("error occured");
    });
}

export default updateDetails;
