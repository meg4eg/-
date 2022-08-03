module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '411475a69abe3e79bf7b80c62af074be'),
  },
});
