require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;

const githubData = {
  login: "sanjeev-desai-18",
  id: 190378727,
  node_id: "U_kgDOC1jy5w",
  avatar_url: "https://avatars.githubusercontent.com/u/190378727?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sanjeev-desai-18",
  html_url: "https://github.com/sanjeev-desai-18",
  followers_url: "https://api.github.com/users/sanjeev-desai-18/followers",
  following_url:
    "https://api.github.com/users/sanjeev-desai-18/following{/other_user}",
  gists_url: "https://api.github.com/users/sanjeev-desai-18/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/sanjeev-desai-18/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/sanjeev-desai-18/subscriptions",
  organizations_url: "https://api.github.com/users/sanjeev-desai-18/orgs",
  repos_url: "https://api.github.com/users/sanjeev-desai-18/repos",
  events_url: "https://api.github.com/users/sanjeev-desai-18/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/sanjeev-desai-18/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Sanjeev Desai",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 3,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2024-12-02T13:54:30Z",
  updated_at: "2025-07-28T18:23:54Z",
};

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Form</h1>");
});

app.listen(port, () => {
  console.log("App listening at port " + port);
});
