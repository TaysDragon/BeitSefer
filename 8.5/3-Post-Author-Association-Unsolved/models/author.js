module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING

      }, {
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        Task.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Author;
};


//http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelstaskjs