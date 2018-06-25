/**
 * Creates a new table in an existing schema in HarperDB
 * @param {Object} body
 * @example
 *
 * req.params.body = {
 *      "schema":"dev",
 *      "table":"dog"
 *  };
 *
 *  @returns {Object}
 *  @example
 *  {
*  "message": "table dev.dog successfully created."
*  }
 */
function HarperDBCreateTable(req, resp) {
    const harperdb = HarperDBInitialization();
    harperdb.createTable(req.params.body.schema, req.params.body.table, (err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
