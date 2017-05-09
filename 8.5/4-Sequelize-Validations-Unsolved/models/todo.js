// Add a flag for the text attribute to prevent this field from being null

// Add a validation for the text attribute to make sure it's at least one character,
// but no more than 140 characters

// Add a flag for complete so that it's false by default if not given a value

module.exports = function(sequelize, DataTypes) {
  var Todo = DataTypes.define("Todo", {
    text: {type: Sequelize.STRING, allowNull: false, validate: { len: [1,140]},
    complete: DataTypes.BOOLEAN, defaultValue: false
  };
  return Todo;
};



// look at http://docs.sequelizejs.com/en/latest/docs/models-definition/
//is not null before querying the DB, look at the validations section below.
// title: { type: Sequelize.STRING, allowNull: false},

// latitude: {
//     type: Sequelize.INTEGER,
//     allowNull: true,
//     defaultValue: null,
//     validate: { min: -90, max: 90 }
//   },