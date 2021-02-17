module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define("Date", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  });

  Date.associate = (models) => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    DataTransferItemList.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };

  return Date;
};
