const Joi = require('joi');

module.exports = {
  validate: {
    body: {
      payload: {
        resource_type: Joi.string().required(),
        action: Joi.string().required(),
        object: {
          id: Joi.string().required(),
          status: Joi.string().required(),
          completed_at: Joi.string().required(),
          href: Joi.string().required(),
        },
      },
    },
  },
};
