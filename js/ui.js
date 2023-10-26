class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }   

    loading() {
      this.clearAlert();
      this.profile.innerHTML = "<h3>Loading... Please wait</h3>";
    }

    showProfile(user) {
      this.clearAlert();
      this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9 before-repos">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
        `;
    }

    showRepos(repos_data) {
      let div = document.querySelector('.before-repos');
      let header = document.createElement('h2');
      header.appendChild(document.createTextNode('Repos:'));
      div.appendChild(header);
      let repos_div = document.createElement('div');
      let repos_ui = "<ol>";
      repos_data.forEach(repo => {
        repos_ui += `<li>${repo.name}</li>`; 
      })
      repos_ui += "</ol>";
      repos_div.innerHTML = repos_ui;
      div.appendChild(repos_div);
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }

    showAlert(message, className) {
        //let body = document.querySelector('body');
        this.clearAlert();
        this.clearProfile();
        let searchContainer = document.querySelector('.searchContainer');
        let alertDiv = document.createElement('div');
        let search = document.querySelector('.search');
        alertDiv.className = className;
        alertDiv.appendChild(document.createTextNode(message));
        searchContainer.insertBefore(alertDiv, search);
    }
    
    clearAlert() {
      let currentAlert = document.querySelector('.alert');
      if(currentAlert) {
        currentAlert.remove();
      }
    }
}
