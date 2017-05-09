module.exports = function(sequelize, DataTypes) {
 // Add code here to create a Post model
 // This model needs a title, a body, and a category
 // Don't forget to 'return' the post after defining
 var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 160]    }
    },
    body: {
      type: DataTypes.TEXT,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      validate: {
        len: [1]    }
      },
category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
      }
  });
  return Post;
};
