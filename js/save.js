document.addEventListener("DOMContentLoaded", () => {
    let urlParams = new URLSearchParams(window.location.search);
    let isFromSaved = urlParams.get("saved");
    let btnSave = document.getElementById("save");
    let btnDelete = document.getElementById("delete");
    let item = getTeamById();
    if (isFromSaved) {
        btnSave.style.display = "none";
        btnDelete.style.display = "block";
        btnDelete.onclick = () => {
          console.log("Tombol delete di klik.");
          item.then(team => {
            deleteTeam(team);
          });
          btnDelete.style.display = "none";
        };
        // ambil artikel lalu tampilkan
        getSavedTeamById();
    } else {
      btnSave.onclick = () => {
        console.log("Tombol save di klik.");
        item.then(team => {
          saveTeam(team);
        });
        btnSave.style.display = "none";
        btnDelete.style.display = "block";
      };
      btnDelete.onclick = () => {
        console.log("Tombol delete di klik.");
        item.then(team => {
          deleteTeam(team);
        });
        btnDelete.style.display = "none";
        btnSave.style.display = "block";
      };
    }
  });