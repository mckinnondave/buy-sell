// PG database client/connection setup
// not sure about this, if not working... check with a mentor
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

const getSearchResults = (options)=>{
  const queryParams = [];
  let getSearchResultsQuery = `
  SELECT listings.*, users.name as user_name
    FROM listings
    JOIN users ON creator_id = users.id
    ORDER BY name
    LIMIT 3;
  `;
  return pool
    .query(getSearchResultsQuery, queryParams)
    .then((result) => {
      // console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
