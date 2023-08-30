import makeRequest from '../httpsRequest'

const method = 'post'

export default {
  '/category/list': makeRequest<null, { pageSize: number; pageNum: number }>({
    url: '/category/list',
    method,
  }),
  '/ticketing/queryByTicketIdV2': makeRequest<null, { ticketId: number }>({
    url: '/ticketing/queryByTicketIdV2',
    method,
  }),
}
