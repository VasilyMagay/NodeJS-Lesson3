// ДЗ №3, Магай Василий

// По ссылке вы найдете файл с логами запросов к серверу весом более 2 Гб. 
// Напишите программу, которая находит в этом файле все записи с ip-адресами 
// 89.123.1.41 и 34.48.240.111, а также сохраняет их в отдельные файлы с 
// названием “%ip-адрес%_requests.log”.

const fs = require('fs');
const readline = require( 'readline' );

ACCESS_LOG = './access.log';
let hosts = ["89.123.1.41", "34.48.240.111"];

const file = readline.createInterface({
	input: fs.createReadStream(ACCESS_LOG, 'utf-8'),
	output: process.stdout,
	terminal: false
});

file.on('line', (line) => {
	for (let host of hosts) {
		if (line.indexOf(host) != -1) {
			let filename = host + "_requests.log";
			fs.writeFile(filename, line + '\n', { flag: 'a', encoding: 'utf-8' }, (err) => {if(err) console.log(err)});
		};
	}
});
