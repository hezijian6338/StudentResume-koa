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
      jobwant: stu.jobwant,
      mojor: stu.major,
      email: stu.email,
      mobileno: stu.mobileno,
      selfevaluation: stu.selfevaluation,
      org_name: stu.org_name,
      schoolname: stu.schoolname,
      majorinfo: stu.majorinfo,
      englishlevel: stu.englishlevel,
      sofewareskills: stu.sofewareskills
    }, {
      where: {
        studentno: stu.studentno
      }
    })
  }
}
