import { HOST } from './config';

var config = {
  api: {
    base: 'http://upload.media.aliyun.com/',
    singleUpload: 'api/proxy/upload',
  },

}

//单个文件上传
const singleUpload = (token,file,size,dir,fileName)=>{
  // var dir = '/profile/avatar'
  // fileName =  'id'+'-'+ Date.now() + '.' + filePath.split('.').pop()

  var formData = new FormData()
  // formData.append('md5', md5)
  formData.append('size', size)
  formData.append('dir', dir)
  formData.append('name', fileName)
  formData.append('content',{uri: file,type: 'application/octet-stream', name: fileName})

  var options = {}

  options.headers = {
    'Content-Type': 'multipart/form-data; boundary=zcV4qZ1R8f7jaG7hzVlZ_RL9oOdIZWv9tUCoKq',
    'User-Agent': 'ALIMEDIASDK_NODEJS_CLOUD',
    'Authorization': token,
  }
  options.body = formData;
  options.method = 'post';
  var uri = config.api.base + config.api.singleUpload
  console.log('开始 fetch',options)
  // return options
  return fetch(uri,options).then((response)=> response.json())
  //return options
}


const asyncFetch = (method, url, data) => {
  let request;
  if (method === 'get') {
    request = new Request(url, {
      method: 'GET',
      headers: ({
        'Content-Type': 'application/json'
      })
    });
  } else if (method === 'post') {
    request = new Request(url, {
      method: 'POST',
      headers: ({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    });
  }
  return fetch(request).then((response) => response.json())
}


export const uploadPicture = (file)=>{
  console.log(file)
  // return
   //先拿token
  let url = HOST
  let api = 'test/getToken'
  asyncFetch('get',url+api).then((json)=>{
     const {wantuToken} =json.data
    return wantuToken
  }).then((token)=>{
      // let wantuUri = config.api.base + config.api.singleUpload
    singleUpload(token,file,file.size,'blog',file.name)
  }).then((res)=>{
     console.log(res)
  })
}



export default asyncFetch