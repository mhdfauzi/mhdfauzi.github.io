let dbPromised = idb.open("premier-league", 1, function(upgradeDb) {
    let teamObjectStore = upgradeDb.createObjectStore("teams", {
      keyPath: "id"
    });
    teamObjectStore.createIndex("name", "name", { unique: false });
  });

const saveTeam = team => {
  dbPromised
    .then(db => {
      let tx = db.transaction("teams", "readwrite");
      let store = tx.objectStore("teams");
      console.log(team);
      store.put(team);
      return tx.complete;
    })
    .then(() => {
      const title = `Premier League`;
      const options = {
        'body': `Club ${team.name} berhasil disimpan.`,
        'badge': '/images/icons/icon-512x512.png',
        'icon': '/images/icons/icon-512x512.png',
        'actions': [
          {
              'action': 'yes-action',
              'title': 'Yes'
          },
          {
              'action': 'no-action',
              'title': 'No'
          }
      ]
    }
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification(title, options);
      })
    } else {
      M.toast({
        html: `Club ${team.name} berhasil disimpan.`
      })
    }
  })
  .catch(() => {
    console.log("Profil Tim gagal disimpan");
  })
}

const deleteTeam = team => {
  let urlParams = new URLSearchParams(window.location.search);
  let idParam = urlParams.get("id");
  dbPromised
    .then(db => {
      let tx = db.transaction("teams", "readwrite");
      let store = tx.objectStore("teams");
      store.delete(parseInt(idParam));
      return tx.complete;
    })
    .then(() => {
      const title = `Premier League`;
      const options = {
        'body': `Club ${team.name} berhasil dihapus.`,
        'badge': '/images/icons/icon-512x512.png',
        'icon': '/images/icons/icon-512x512.png'
      }
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification(title, options);
        })
      } else {
        M.toast({
          html: `Club ${team.name} berhasil dihapus.`
        })
      }
    })
    .catch(() => {
      console.log("Profil Tim gagal dihapus");
    })
}

const getById = id => {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(db => {
        let tx = db.transaction("teams", "readonly");
        let store = tx.objectStore("teams");
        return store.get(parseInt(id));
      })
      .then(team => {
        resolve(team);
      })
  });
}

const getAll = () => {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(db => {
        let tx = db.transaction("teams", "readonly");
        let store = tx.objectStore("teams");
        return store.getAll();
      })
      .then(teams => {
        // console.log(teams);
        resolve(teams);
      });
  });
}