function route(path, type) {
  return {
    path, type
  }
}

export default {
  awsebapi_eb_health_check: route('/api/v1/eb/health', 'GET'),
  userapi_register: route('/api/v1/users/register', 'POST'),
  userapi_login: route('/api/v1/users/token/auth', 'POST'),
  userapi_logout: route('/api/v1/users/token/remove', 'POST'),
  userapi_hello: route('/api/v1/users/hello', 'GET'),
  questionsapi_answer_next_question: route('/api/v1/questions/answer', "POST"),
  questionsapi_get_rank: route('/api/v1/questions/rank', "GET"),
  questions_api_next_question: route('/api/v1/questions/next', "GET"),
}

// export default { 
//   awsebapi_eb_health_check: '/api/v1/eb/health',
// catch_all                          GET      /<path:path>
// catch_all                          GET      /
// questionsapi.answer_next_question  POST     /api/v1/questions/answer
// questionsapi.get_rank              GET      /api/v1/questions/rank
// questionsapi.next_question         GET      /api/v1/questions/next
// send_css                           GET      /css/<path:path>
// send_fonts                         GET      /fonts/<path:path>
// send_images                        GET      /images/<path:path>
// send_js                            GET      /js/<path:path>
// static                             GET      /static/<path:filename>
// userapi.forgot_password            POST     /api/v1/users/forgot
// userapi.hello_protected            GET      /api/v1/users/hello
// userapi.login                      POST     /api/v1/users/token/auth
// userapi.logout                     POST     /api/v1/users/token/remove
// userapi.refresh                    POST     /api/v1/users/token/refresh
// userapi.register                   POST     /api/v1/users/register
// userapi.reset_password             POST     /api/v1/users/reset-password
// }