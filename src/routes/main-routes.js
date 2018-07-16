import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router.use('/api/students', controllers.students.routes(), controllers.students.allowedMethods())

router.use('/api/student-resume', controllers.studentResume.routes(), controllers.studentResume.allowedMethods())

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default)
  .get('/api/:name/:info', controllers.api.Get)
  .post('/api/:name/:info', controllers.api.Post)
  .put('/api/:name/:info', controllers.api.Put)
  .del('/api/:name/:info', controllers.api.Delect)
  .post('/auth/:action', controllers.auth.Post)

module.exports = router
