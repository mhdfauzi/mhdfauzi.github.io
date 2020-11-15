const BASE_URL = "https://api.football-data.org/v2/";

const API_KEY = "16d85bf702974259b17e4dff4faeade4";

const LEAGUE_ID = 2021;

const ENDPOINT_COMPETITION = `${BASE_URL}competitions/${LEAGUE_ID}/standings`;

const ENDPOINT_TEAM = `${BASE_URL}competitions/${LEAGUE_ID}/teams`;

const fetchAPI = url => {
    return fetch(url, {
        headers: {
            'X-Auth-Token': API_KEY
        }
    })
        .then(res => {
            if (res.status !== 200) {
                console.log(`Error: ${res.status}`);
                return Promise.reject(new Error(res.statusText))
            } else {
                return Promise.resolve(res)
            }
        })
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
};

const getTeam = () => {
    if ("caches" in window) {
        caches.match(ENDPOINT_TEAM).then(response => {
            if (response) {
                response.json().then(data => {
                    console.log(`Competition Data: ${data}`);
                    showTeam(data);
                })
            }
        })
    }

    fetchAPI(ENDPOINT_TEAM)
        .then(data => {
            showTeam(data);
        })
        .catch(error => {
            console.log(error)
        })
}

const getTeamById = () => {
    return new Promise(function(resolve, reject) {
        let urlParams = new URLSearchParams(window.location.search);
        let idParam = urlParams.get("id");
    
        if ("caches" in window) {
            caches.match(`${BASE_URL}teams/${idParam}`).then(response => {
                if (response) {
                    response.json().then(data => {
                        console.log(`Team Data: ${data}`);
                        showTeamById(data);
                        resolve(data);
                    })
                }
            })
        }
    
        fetchAPI(`${BASE_URL}teams/${idParam}`)
        .then(data => {
            showTeamById(data);
            resolve(data);
        })
        .catch(error => {
            console.log(error)
        })
    })
}

const getStanding = () => {
    if ("caches" in window) {
        caches.match(ENDPOINT_COMPETITION).then(response => {
            if (response) {
                response.json().then(data => {
                    console.log(`Standing Data: ${data}`);
                    showStanding(data);
                })
            }
        })
    }

    fetchAPI(ENDPOINT_COMPETITION)
        .then(data => {
            showStanding(data);
        })
        .catch(error => {
            console.log(error)
        })
}

const getScorer = () => {
    if ("caches" in window) {
        caches.match(`${BASE_URL}competitions/${LEAGUE_ID}/scorers`).then(response => {
            if (response) {
                response.json().then(data => {
                    console.log(`Team Data: ${data}`);
                    showScorer(data);
                })
            }
        })
    }

    fetchAPI(`${BASE_URL}competitions/${LEAGUE_ID}/scorers`)
    .then(data => {
        showScorer(data);
    })
    .catch(error => {
        console.log(error)
    })
}

const getSavedTeam = () => {
    getAll().then(teams => {
        showSavedTeam(teams);
    })
}

const getSavedTeamById = () => {
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");
    
    getById(idParam).then(team => {
        showSavedTeamById(team);
    })
}