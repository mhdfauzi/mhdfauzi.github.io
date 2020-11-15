const showTeam = data => {
    let clubs = "";
  
    data.teams.forEach(club => {
        clubs += `
            <div class="col s6 m4 section">
            <a href="./team.html?id=${club.id}">
            <div class="card z-depth-4" style="background-color: #00909e;">
                <div class="row valign-wrapper">
                <div class="col s4 center">
                    <img src="${club.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="${club.name}" class="responsive-img" style="padding: 10px 0 5px 0; height: 3rem;"/>
                </div>
                <div class="col s8">
                    <span class="truncate white-text">${club.name}</span>
                </div>
                </div>
            </div>
            </a>
            </div>
        `;
    });
    
    document.getElementById("teams").innerHTML = clubs;
}

const showTeamById = data => {
    let club = "";

    club += `
        <div class="card row border center" style="background-color: #00909e;">
        <div class="col s12 m4">
        <img class="responsive-img" alt="${data.name}" src="${data.crestUrl.replace(/^http:\/\//i, 'https://')}" style="padding: 30px 0 10px 0; height: 100%; width: 200px;"/>
        </div>
        <div class="col s12 m8 center">
        <table class="white-text">
        <tr>
        <th>Name:</th>
        <td>${data.name} (${data.tla})</td>
        </tr>
        <tr>
            <th>Country:</th>
            <td>${data.area.name}</td>
        </tr>
        <tr>
            <th>Founded:</th>
            <td>${data.founded}</td>
        </tr>
        <tr>
            <th>Stadium:</th>
            <th>${data.venue}</th>
        </tr>
        <tr>
            <th>Address:</th>
            <td>${data.address}</td>
        </tr>
        <tr>
            <th>Homepage:</th>
            <td>
                <a class="white-text" rel="noopener" href="${data.website}" target="_blank">  
                    ${data.website}
                </a>
            </td>
        </tr>
        <tr>
        <th>Email:</th>
        <td>
            <a class="white-text" rel="noopener" href="mailto:${data.email}" target="_blank">  
                ${data.email}
            </a>
        </td>
        </tr>
        </table>
        </div>
        </div>
    `;

    document.getElementById("team").innerHTML = club;
}

const showScorer = data => {
    let scorers = "";
  
    data.scorers.forEach(scorer => {
        scorers += `
        <div class="card row valign-wrapper z-depth-4" style="background-color: #00909e;">
            <div class="col s2 center-align">
                <i class="material-icons circle white">person</i>
            </div>
            <div class="col s7 left-align">
                <span class="truncate white-text" style="font-weight: bold">${scorer.player.name}</span>
                <span class="truncate white-text">${scorer.team.name}</span>
            </div>
            <div class="col s3">
                <span class="truncate white-text">${scorer.numberOfGoals}</span>
            </div>
        </div>

        `;
    });
    
    document.getElementById("scorer").innerHTML = scorers;
}