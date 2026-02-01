module.exports = {
  apps: [
    {
      name: "tokogame-frontend",
      script: "npx",
      args: "serve -s dist -p 5173",
      cwd: "./frontend",
      watch: false,
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "tokogame-backend",
      script: "npm",
      args: "run start",
      cwd: "./backend",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};
