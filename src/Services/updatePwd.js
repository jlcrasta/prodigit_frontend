function updatePwd(obj) {
  var myHeaders = new Headers();
  myHeaders.append("token", `Bearer ${localStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(obj),
    redirect: "follow",
  };

  fetch("http://localhost:5000/api/v1/prodigit/resetPwd", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => {
      alert("error occured");
      console.log("error", error);
    });
}

export default updatePwd;
