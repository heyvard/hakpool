const moment = require('moment');

function jsUcfirst(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const register = function(Handlebars) {
  const helpers = {
    // put all of your helpers inside this object
    formatDate: function(timestamp){
      moment.locale('nb');
      return jsUcfirst(moment(timestamp).utcOffset('+0200').format('dddd D. MMMM HH:mm'));  
    },
    inc: function(value){
      return parseInt(value) + 1;
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