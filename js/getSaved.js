const showSavedTeam = teams => {
    let clubs = "";
  
    teams.forEach(data => {
        clubs += `
        <a href="./team.html?id=${data.id}&saved=true">
            <div class="card row valign-wrapper z-depth-4" style="background-color: #00909e;">
            <div class="col s12 center-align">
                <img class="responsive-img" src="${data.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="${data.name}" onError="this.onerror=null;this.src='/images/icons/icon-256x256.png';" style="padding: 30px 0 10px 0; height: 100%; width: 200px;"/>
            </div>
            <div class="col s12 left-align">
                <span class="truncate white-text" style="font-weight: bold">${data.name}</span>
            </div>
            </div>
        </a>

        `;
    });
    
    document.getElementById("saved-team").innerHTML = clubs;
}

const showSavedTeamById = team => {
    let club = "";

    club += `
        <div class="card row border center" style="background-color: #00909e;">
        <div class="col s12 m3">
        <img class="responsive-img" alt="${team.name}" src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" onError="this.onerror=null;this.src='/images/icons/icon-256x256.png';" style="height:100%;"/>
        </div>
        <div class="col s12 m9 center">
        <table class="white-text">
        <tr>
        <th>Name:</th>
        <td>${team.name} (${team.tla})</td>
        </tr>
        <tr>
            <th>Country:</th>
            <td>${team.area.name}</td>
        </tr>
        <tr>
            <th>Founded:</th>
            <td>${team.founded}</td>
        </tr>
        <tr>
            <th>Stadium:</th>
            <th>${team.venue}</th>
        </tr>
        <tr>
            <th>Address:</th>
            <td>${team.address}</td>
        </tr>
        <tr>
            <th>Homepage:</th>
            <td>
                <a class="white-text" rel="noopener" href="${team.website}" target="_blank">  
                    ${team.website}
                </a>
            </td>
        </tr>
        <tr>
        <th>Email:</th>
        <td>
            <a class="white-text" rel="noopener" href="mailto:${team.email}" target="_blank">  
                ${team.email}
            </a>
        </td>
        </tr>
        </table>
        </div>
        </div>
    `;

    document.getElementById("team").innerHTML = club;
}