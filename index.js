// Asynchronous
console.log("Before");
// getUser(1, getRepositories);
console.log("After");

// getUser(1,(user) => {
//   getRepositories(user.githubUserName,(repos) => {
//     getCommits(repos[0],(commit) => {
//       console.log(commit);
//     })
//   })
// })

getUser(1)
.then((user) => getRepositories(user.githubUserName))
.then(repos => getCommits(repos[0]))
.then(commits => console.log('commits',commits))


function getUser(id) {
  return new Promise((resolve,reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log("Reading a user from a database ...");
      resolve({ id: id, githubUserName: "reza" });
    }, 2000);
  })
}

function getRepositories(username) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Calling github api ...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  })
}

function getCommits(repo) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Calling github api commit ...");
      resolve(["commit"]);
    }, 2000);
  })
}
