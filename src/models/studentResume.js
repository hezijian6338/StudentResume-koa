import db from '../lib/sequelize'
import Sequelize from 'sequelize'
var StudentResume = db.define('t_student_resume', {
  id: {
    type: Sequelize.STRING(32),
    primaryKey: true
  },
  studentno: Sequelize.STRING,
  stuname: Sequelize.STRING,
  jobwant: Sequelize.STRING,
  major: Sequelize.STRING,
  email: Sequelize.STRING,
  photopath: Sequelize.STRING,
  mobileno: Sequelize.STRING,
  selfevaluation: Sequelize.STRING,
  org_name: Sequelize.STRING,
  schoolname: Sequelize.STRING,
  majorinfo: Sequelize.STRING,
  skillone: Sequelize.STRING,
  oneinfo: Sequelize.STRING,
  skilltwo: Sequelize.STRING,
  twoinfo: Sequelize.STRING,
  skillthree: Sequelize.STRING,
  threeinfo: Sequelize.STRING,
  englishlevel: Sequelize.STRING,
  sofewareskills: Sequelize.STRING
}, {
  timestamps: false,
  freezeTableName: true
})
module.exports = StudentResume
