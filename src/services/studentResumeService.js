import model from '../models/index'
let stuResume = model.studentResume
module.exports = {
  getStudentResumeByNo: (stuNo) => {
    return stuResume.findAll({
      where: {
        studentno: stuNo
      }
    })
  },
  updateStudentResumeSkillByNo: (student) => {
    return stuResume.update({
      skillone: student.skillone,
      oneinfo: student.oneinfo,
      skilltwo: student.skilltwo,
      twoinfo: student.twoinfo,
      skillthree: student.skillthree,
      threeinfo: student.threeinfo
    }, {
      where: {
        studentno: student.studentno
      }
    })
  },
  updateStudentResumeBaseInfoByNo: (stu) => {
    return stuResume.update({

    },{
        where: {
            studentno: stu.studentno
        }
    })
  }
}
