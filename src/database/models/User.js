import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

// Define the model
const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
  },
  {
    tableName: 'users',
    timestamps: true // Sequelize will manage createdAt and updatedAt
  }
);

export default User;
