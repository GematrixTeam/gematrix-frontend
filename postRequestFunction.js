var id_topic = 321;
var text_topic = 'Lorem ipsum'; 
var data_body = "id_topic=" + id_topic + "text_topic="+ text_topic;  
 
/*
Первым аргументом кладем путь до файла на сервере, 
вторым объект где будут свойства method, 
body здесь у нас данные для передачи на сервер, 
headers заголовок.
*/

const URLPATH = 'python file';

fetch(URLPATH, { 
	method: "POST",
    body: data_body,   
	headers:{"content-type": "application/x-www-form-urlencoded"} 
	})
   
.then( (response) => {
        if (response.status !== 200) {           
			return Promise.reject();
        }   
return response.text()
})
.then(i => console.log(i))
.catch(() => console.log('ошибка')); 