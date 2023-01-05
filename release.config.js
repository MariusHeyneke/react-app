module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/MariusHeyneke/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
