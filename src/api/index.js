import axios from 'axios'

axios.defaults.headers.Authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEsImNyZWF0ZWQiOjE2MzY3NzcwNjM4ODMsImV4cCI6MTYzNzM4MTg2M30.jVZnS8l3itS4Sbc8hMZvdfelyGPifU5zetcyPZVIUxRXcI3aVOwtbsVLx2KEvYOo-4OFSZV4B2v-z4asMDGVsw';

export const getData = ()=>axios.get('http://61.151.249.194:9088/admin/api/dist/listDictByKey.html')