'use strict';

/**
 * global-gtm router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-gtm.global-gtm');
