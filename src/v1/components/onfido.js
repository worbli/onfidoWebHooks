const onfidoModel = require('../models/onfido.js');
/**
 * @param {string} onfidoId - ID
 * @param {string} action - action
 * @param {string} resourceType - type
 * @param {string} status - status
 * @param {string} completedAt - completed
 * @param {string} href - ref link
*/
function log(onfidoId, action, resourceType,
    status, completedAt, href) {
  try {
    onfidoModel({
      onfidoId,
      action,
      resourceType,
      status,
      completedAt,
      href,
    }).save();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`logger log. ${err}`);
  }
}

module.exports = {
  log,
};
