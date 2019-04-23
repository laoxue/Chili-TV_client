const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);
app.get('/',function(req,res){
	res.send('hello,world')
})	

app.ws('/ws',function(ws,req){
	ws.on('message',function(str){
		console.log(str);
		 list(str);
	})
})

function list(str){
	expressWs.getWss().clients.forEach(function(conn){
		conn.send(''+str)
	})
}
app.listen(2333,function(){
	console.log('The server will be RUn');

})