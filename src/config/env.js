//获取图片地址
const imgurl =  'https://picsum.photos/200/300/?random'//'http://localhost/files/images/';
let baseUrl;

if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://localhost:8003'
}else{
	baseUrl = 'http://localhost:8003'
}
export {
	baseUrl,
	imgurl 
}
