"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  getAllResellers: async (ctx) => {
    const resellers = await strapi
      .query("communities")
      .find({ type: "Resellers" });

    ctx.send(
      resellers.map((reseller) => {
        return reseller.entity;
      })
    );
  },

  getAllCustomers: async (ctx) => {
    const customers = await strapi
      .query("communities")
      .find({ type: "Customers" });

    ctx.send(
      customers.map((customer) => {
        return customer.entity;
      })
    );
  },

  getAllPartners: async (ctx) => {
    const partners = await strapi
      .query("communities")
      .find({ type: "Partners" });

    ctx.send(
      partners.map((partner) => {
        return partner.entity;
      })
    );
  },
};
