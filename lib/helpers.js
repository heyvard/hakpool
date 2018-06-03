const moment = require('moment');

const register = function(Handlebars) {
  const helpers = {
    // put all of your helpers inside this object
    formatDate: function(timestamp){
      return moment(timestamp).utcOffset('+0200').format('D MMM HH:mm')
    },
  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    // register helpers
    for (const prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
    // just return helpers object if we can't register helpers here
    return helpers;
  }

};

module.exports.register = register;
module.exports.helpers = register(null);