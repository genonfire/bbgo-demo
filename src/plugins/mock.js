import MockAdapter from 'axios-mock-adapter'

function mockResponse(config, responses) {
  const [url, params] = config.url.split('?')
  let apiurl = config.url

  if (params) {
    if (responses[config.method][url + '?'].params.includes(params)) {
      apiurl = url + '?'
    }
  }

  const result = responses[config.method][apiurl]
  let status = 200
  let response = {
    pagination: {
      'item_total': 0,
      'page_total': 0,
      'current_page': 1,
      'next_link': null,
      'prev_link': null,
      'first_link': null
    }
  }

  if (result) {
    status = result.status || 200
    response = result.response || {}
  }

  return [status, response]
}

export default {
  mocked(axiosClient, responses) {
    const mock = new MockAdapter(
      axiosClient,
      {
        onNoMatch: 'throwException'
      }
    )

    mock.onAny().reply((config) => {
      const [status, response] = mockResponse(config, responses)
      return [
        status,
        response
      ]
    })
  }
}
