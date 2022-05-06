'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Event, StageEvent, SetTime}) {
      Stage.belongsToMany(Event, {
        through: StageEvent,
        foreignKey: 'event_id',
        as: 'events'
      })
      Stage.hasMany(SetTime, {
        foreignKey: 'set_time_id',
        as: 'set_time'
      })

    }
  }
  Stage.init({
    stage_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  });
  return Stage;
};