

const equipments = (connection, Sequelize, workOuts) => {
  return connection.define('equipments', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    equipmentName: { type: Sequelize.STRING, allowNull: false },
    workOutId: { type: Sequelize.INTEGER, references: { model: workOuts, key: 'id' } },
  })
}

module.exports = equipments
