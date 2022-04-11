/*
 * All routes for login are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = () => {
  router.post("/", (req, res) => {
    req.session = null;
    res.redirect("/");
  });
  return router;
};

// set user cookie when logged in

// router.get("/login", (req, res) => {
//   res.render("user");
// });

// // logout a user
// router.post("/logout", (req, res) => {
//   req.session = null;
//   res.redirect("/");
// });
// };
