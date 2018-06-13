import services from '../services/index'

const router = require('koa-router')()

let stuSer = services.studentsService

router.get('/', async (ctx, next) => {
  var ctxQuery = ctx.query
  console.log(ctx.query)
  if (ctxQuery.page != null || ctxQuery.limit != null) {
    var page = (ctxQuery.page - 1) * ctxQuery.limit
    var student = await stuSer.getStudentsByLimit(ctxQuery.limit, page)
  } else {
    student = await stuSer.getStudents()
  }
  ctx.body = {
    result: 'get',
    name: ctx.params,
    para: ctx.query,
    stuInfo: student
  }
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
router.get('/:limit/:page', async (ctx, next) => {
  //   ctx.body = await getUserList(ctx, next);
  var ctxParams = ctx.params
  var page = (ctxParams.page - 1) * ctxParams.limit
  var student = await stuSer.getStudentsByLimit(ctxParams.limit, page)
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
