import axios from "axios"

export const BASE_REQUEST = (
  method: string,
  url: string,
  headers: any = null,
  data: any = null
) => {
  return axios({
    method: method,
    url: url,
    ...(headers && { headers }),
    ...(data && { data }),
  })
}
