// Asynchronous
console.log("Before");
getUser(1, getRepositories);
console.log("After");

function getRepositories(user) {
  getRepositories(user.githubUserName, getCommits);
}

function getCommits(repos) {
  getCommits(repos, displayCommits);
}
function displayCommits(commits) {
  console.log(commits);
}

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
