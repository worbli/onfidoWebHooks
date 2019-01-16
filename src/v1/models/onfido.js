const mongoose = require('mongoose');

const onfidoWebhookSchema = new mongoose.Schema({
  onfidoId: {type: String, required: true},
  action: {type: String, required: true},
  resourceType: {type: String, required: true},
  status: {type: String, required: true},
  completedAt: {type: String, required: true},
  href: {type: String, required: true},
});

module.exports = mongoose.model('onfidowebhook', onfidoWebhookSchema);
