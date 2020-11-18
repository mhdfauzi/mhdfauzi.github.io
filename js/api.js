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
    fetchAPI(ENDPOINT_COMPETITION)
        .then(data => {
            showStanding(data);
        })
        .catch(error => {
            console.log(error)
        })
}

const getScorer = () => {
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