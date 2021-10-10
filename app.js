const github = new Github();
const ui = new UI();
//Search Input UI var
const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener("keyup", (e) => {
  //get input text
  const userText = e.target.value;

  if (userText != "") {
    //Make HTTP call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show alert user not found
        ui.showAlert("User not found!", "alert alert-danger");
      } else {
        //SHow profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
