const devMountainBtn = document.querySelector(".dev-mountain-btn");

devMountainBtn.addEventListener("click", () => {
    // axios request 
    // log message with rollbar on server 
    axios.get("http://localhost:3000/devMountain").then(res => {
        console.log("sent a request to localhost API for devmountain");
        console.log(res);
    }).catch(err => {
        console.log({error: err});
    });
});