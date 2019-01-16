const onfidoLog = require('../components/onfido.js');
const crypto = require('crypto');
/**
 * Webhook
 * @param {string} req - The incoming request.
 * @param {string} res - The outcoming response.
 * @property {string} req.body.payload.resource_type - The resource type.
 * @property {string} req.body.payload.action - The resource type.
 * @property {string} req.body.payload.object.id - The resource type.
 * @property {string} req.body.payload.object.status - The resource type.
 * @property {string} req.body.payload.object.completed_at - The resource type.
 * @property {string} req.body.payload.object.href - The resource type.
 */
async function postOnfido(req, res) {
  try {
    const xheader = req.headers['x-signature'];
    const resourceType = req.body.payload.resource_type;
    const action = req.body.payload.action;
    const onfidoId = req.body.payload.object.id;
    const status = req.body.payload.object.status;
    const completedAt = req.body.payload.object.completed_at;
    const href = req.body.payload.object.href;
    const token = crypto.createHmac('sha1', process.env.ONFIDO_WEBHOOK_SECRET);
    .update(JSON.stringify(req.body)).digest('hex');
    if (xheader === token) {
      onfidoLog.log(onfidoId, action, resourceType, status,
          completedAt, href);
      res.status(200).json({data: true});
    } else {
      res.status(400).json({data: false});
    }
  } catch (err) {
    res.status(400).json({data: false});
  }
}

module.exports = {
  postOnfido,
};
