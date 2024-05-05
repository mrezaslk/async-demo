console.log("Before");
getUser(1, (user) => {
  //   console.log("User", user);
  //   Get the repositories
  getRepositories(user.githubUserName, (repos) => {
    console.log("repos", repos);
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database ...");
    callback({ id: id, githubUserName: "reza" });
  }, 2000);
}

function getRepositories(username, cb) {
  setTimeout(() => {
    console.log("Calling github api ...");
    cb(["repo1", "repo2", "repo3"]);
  }, 2000);
}
