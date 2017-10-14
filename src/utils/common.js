import { HOST,QINIU,TOKEN } from './config';
import uuidv4 from 'uuid/v4';

export const asyncFetch = (method, url, data) => {
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

//得到图片名称
export const getImageName = (filename,type) =>{
  let name
  if(type == 0){
    name = QINIU.BLOGCONTENT
  }else if (type ==1){
    name = QINIU.BLOGBACKGROUND
  }
  return name + uuidv4() + '.'+filename.split('.').pop()
}

//简单文件上传
export const uploadPicture = (file,pathType,successCallBack)=>{
  let url = HOST + 'test/getqiniu'
  asyncFetch('get',url).then((res)=>{
    return res.data.qiniuToken
  }).then((token)=>{
    const formData = new FormData()
    formData.append('token', token)
    formData.append('key', getImageName(file.name,pathType))
    formData.append('file',file)

    var uri = 'http://upload.qiniu.com'
    return fetch(uri, {
      method: 'post',
      'Content-Type': 'multipart/form-data; boundary=zcV4qZ1R8f7jaG7hzVlZ_RL9oOdIZWv9tUCoKq',
      body: formData,
    })
  }).then((response)=> response.json()).then((res)=>{
    const url = QINIU.BASE+res.key
    successCallBack(url)
  })
}

//cookies 设置
export const fSetCookieMesCommon = (key, val) => {
  document.cookie = key + "=" + val;
}
//查询cookies
export const fGetCookieMes = (key) => {
  let strCookie = document.cookie;
  strCookie = strCookie.replace(/\s/g, "");
  let arrCookie = strCookie.split(';');
  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split("=");
    if (key == arr[0] && arr[1] != '') {
      return arr[1];
    }
  }

  return ""
};

//防止未登录用户访问页面
export const isNoLogined = ()=>{
  if(fGetCookieMes(TOKEN)){
    return false
  }else{
    return true
  }
}



export default asyncFetch