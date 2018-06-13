import services from '../services/index'

const router = require('koa-router')()

let stuSer = services.studentsService

router.get('/', async (ctx, next) => {
  console.log(ctx.query)
  ctx.body = await stuSer.getStudents()
})
router.get('/:info', async (ctx, next) => {
  //   ctx.body = await getUserList(ctx, next);
  var student = await stuSer.getStudentByNo(ctx.params.info)
  ctx.body = {
    result: 'get',
    name: ctx.params.info,
    para: ctx.query,
    stuInfo: student
  }
})
router.post('/:info', async (ctx, next) => {
  console.log(ctx.request.body)
  //   let reqBody = ctx.request.body;
  //   ctx.body = await register(reqBody);
  ctx.body = {
    result: 'post',
    name: ctx.params.info,
    para: ctx.request.body
  }
})
router.del('/:info', async (ctx, next) => {
  console.log(ctx.request.body)
  //   let reqBody = ctx.request.body;
  //   ctx.body = await removeUser(reqBody);
  ctx.body = {
    result: 'delect',
    name: ctx.params.info,
    para: ctx.request.body
  }
})

module.exports = router
