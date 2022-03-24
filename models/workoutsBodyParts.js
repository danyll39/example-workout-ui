

const workoutsBodyParts = (connection, Sequelize) => {
  return connection.define('workoutsBodyParts', {
    workOutID: { type: Sequelize.INTEGER, references: { model: 'workOuts', key: 'id' } },
    bodyPartId: { type: Sequelize.INTEGER, references: { model: 'bodyParts', key: 'id' } },

  })
}

module.exports = workoutsBodyParts
