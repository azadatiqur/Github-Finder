let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e)=>{
    let userText = searchUser.value;
    if (userText != '') {
        //Fetch API
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                if(data.message == "Not Found") {
                    // Show Alert
                    ui.showAlert("User not Found!", "alert alert-danger");
                    //console.log("not found");
                }
                else {
                    // Show Profile
                    if(data.public_repos>0) {
                        ui.loading();
                        fetch(data.repos_url)
                            .then(result => result.json())
                            .then(repos_data => {
                                //console.log(repos_data);        
        
                                ui.showProfile(data);
                                ui.showRepos(repos_data);
                                
                            });
                    }
                    else {
                        ui.showProfile(data);
                    }
                }
            });
    }
    else {
        //Clear Profile
        ui.clearProfile();
    }
});