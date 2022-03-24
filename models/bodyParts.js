const bodyParts = (connection, Sequelize,) => {
  return connection.define('bodyParts', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    body: { type: Sequelize.STRING },
  })
}

module.exports = bodyParts
