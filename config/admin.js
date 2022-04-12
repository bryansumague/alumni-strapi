module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c1eb1cb1f3dbbbfd9904d10cfe568804'),
  },
});
