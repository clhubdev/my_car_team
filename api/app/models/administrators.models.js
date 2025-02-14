import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";
import User from "./users.model.js";

class Administrator extends User {}

Administrator.init(
  {
    // Utilisation de user_id comme clé primaire et clé étrangère vers users.id
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    accessLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Niveau d'accès par défaut
    },
  },
  {
    sequelize,
    modelName: "administrators",
    freezeTableName: true,
    timestamps: true,
  }
);

export default Administrator;