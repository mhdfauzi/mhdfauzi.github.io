const showStanding = data => {
    let standings = "";
    let standingElement =  document.getElementById("homeStandings");
  
    data.standings[0].table.forEach(standing => {
        standings += `
                <tr>
                    <td>${standing.position}</td>
                    <td>
                      <a href="./team.html?id=${standing.team.id}">
                        <img class="responsive-img" alt="${standing.team.name}" src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" onError="this.onerror=null;this.src='/images/icons/icon-256x256.png';" style="height: 30px"/>
                      </a>
                    </td>
                    <td>
                      <a href="./team.html?id=${standing.team.id}">
                        <span class="white-text">${standing.team.name}</span>
                      </a>
                    </td>
                    <td>${standing.playedGames}</td>
                    <td>${standing.won}</td>
                    <td>${standing.draw}</td>
                    <td>${standing.lost}</td>
                    <td>${standing.goalsFor}-${standing.goalsAgainst}</td>
                    <td>${standing.goalDifference}</td>
                    <td>${standing.points}</td>
                </tr>
        `;
    });
  
     standingElement.innerHTML = `
                <div class="card z-depth-4" style="background-color: #00909e; padding-left: 20px; padding-right: 20px;">
  
                <table class="responsive-table white-text">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Team</th>
                            <th>Pl</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>+/-</th>
                            <th>GD</th>
                            <th>P</th>
                        </tr>
                     </thead>
                    <tbody id="standings">
                        ${standings}
                    </tbody>
                </table>
                
                </div>
    `;
  }