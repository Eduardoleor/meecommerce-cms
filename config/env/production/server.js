module.exports = ({ env }) => ({
  url: env('https://meecommerce-cms.herokuapp.com/'),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["DATABASE_URL", "NODE_ENV", "meecommerce-cms"]),
  },
});
