

const workOuts = (connection, Sequelize) => {
  return connection.define('workOuts', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    workoutName: { type: Sequelize.STRING },
    description: { type: Sequelize.TEXT },
    equipmentId: { type: Sequelize.INTEGER, references: { model: 'equipments', key: 'id' } },
  })
}

module.exports = workOuts
