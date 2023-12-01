import axios from "axios"

export interface ApiResponse<T> {
  data: T
}
export async function getTodo () {
  return await axios.get('/api/todos/1').then((res) => {
    return res.data
  })
}
