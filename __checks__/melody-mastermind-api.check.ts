import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('books-api-check-1', {
  name: 'Melody Mastermind API',
  alertChannels: [],
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    url: 'https://timwallace.ca/melody-mastermind/api/token',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('access_token').isNotNull(),
    ],
  },
  runParallel: true,
})
