module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8be9579afda167c1536581a2768a313f'),
  },
});
