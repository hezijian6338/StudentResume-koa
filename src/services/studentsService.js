import model from '../models/index'
let stu = model.students
module.exports = {
  getStudents: () => {
    return stu.findAll()
  },
  getStudentByNo: (stuNo) => {
    return stu.findAll({
      where: {
        STUDENTNO: stuNo
      }
    })
  },
  getStudentsByLimit: (limit, page) => {
    return stu.findAndCountAll({
      where: '',
      offset: page,
      limit: limit * 1
    })
  }
}
