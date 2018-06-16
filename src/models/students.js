import db from '../lib/sequelize'
import Sequelize from 'sequelize'
var Students = db.define('t_students', {
  STU_ID: {
    type: Sequelize.STRING(32),
    primaryKey: true
  },
  STUDENTNO: Sequelize.STRING,
  STUNAME: Sequelize.STRING,
  SEX: Sequelize.STRING,
  BIRTHDAY: Sequelize.BIGINT,
  POLITICALSTATUS: Sequelize.STRING,
  NATION: Sequelize.STRING,
  NATIVEPLACE: Sequelize.STRING,
  FROM_PLACE: Sequelize.STRING,
  IDCARDNO: Sequelize.STRING,
  ORG_ID: Sequelize.STRING,
  ORG_NAME: Sequelize.STRING,
  DEPARTMENT: Sequelize.STRING,
  MAJOR: Sequelize.STRING,
  MAJORFIELD: Sequelize.STRING,
  MAJORCATEGORIES: Sequelize.STRING,
  CULTIVATEDIRECTION: Sequelize.STRING,
  CLASSNAME: Sequelize.STRING,
  EDUCATIONSYSTEM: Sequelize.BIGINT,
  SCHOOLINGLENGTH: Sequelize.BIGINT,
  ACCEPTANCEDATE: Sequelize.BIGINT,
  MIDDLESCHOOL: Sequelize.STRING,
  FAMILYTELNO: Sequelize.STRING,
  MOBILENO: Sequelize.STRING,
  POSTCODE: Sequelize.STRING,
  TRAVELRANGE: Sequelize.STRING,
  ADDRESS: Sequelize.STRING,
  SKILL: Sequelize.STRING,
  SELFDESCRIPTION: Sequelize.STRING,
  AWARDS: Sequelize.STRING,
  SCHOOLSTATUS: Sequelize.STRING,
  DQSZJ: Sequelize.STRING,
  PHOTOPATH: Sequelize.STRING,
  GRADUATEFLAG: Sequelize.STRING,
  ALUMNIFLAG: Sequelize.STRING,
  CREATE_TIME: Sequelize.BIGINT,
  CREATOR: Sequelize.STRING,
  PASSWORD: Sequelize.STRING,
  PARENT_ORG_ID: Sequelize.STRING,
  MAJOR_CODE: Sequelize.STRING,
  EMAIL: Sequelize.STRING,
  SCORE: Sequelize.STRING,
  GRADE: Sequelize.STRING
}, {
  timestamps: false
})
module.exports = Students
