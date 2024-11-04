'use strict';

/**
 * global-gtm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-gtm.global-gtm');
