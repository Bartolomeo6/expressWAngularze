// npm init -y
// npm install express
// nodemon app.js -> WAŻNE!

const express = require('express');
const app = express();  // tworzenie nowej aplikacji (obiektu) Express
const port = 2006;
const fs = require('fs');
const path = require('path');

app.get('/', (ques,ans) => {
    ans.send('<title>Główne okno</title> Witam w Express.js!');
})

app.get('/html', (pyt,odp) => {
    odp.send('<title>Przesyłanie html</title><h2>Siemanko ziomo!</h2>');    // send() działa jak end(), wysyła i kończy odpowiedź, AUTOMATYCZNA SERIALIZACJA
})

app.get('/json', (req, res) => {
    const data = { name: 'Bart', age: 23};
    res.send(data) // Express przekształci obiekt na JSON (serializacja)
    //res.json(data);
})

// formularz 
app.get('/form', (req,res) => {
    res.sendFile(path.join(__dirname,'/pliki/formularz.html'));
})

app.get('/submit', (pyt, odp) => {
    const {imieUzyt, emailLudka} = pyt.query;
    odp.send(`Dane formularza ${imieUzyt}, ${emailLudka} zostały przyjęte`);
})

// app.get('/file', (preg, respo) => {
//     const filePath = 'plik.txt';
//     fs.readFile(filePath, (err, data) => {
//         if(err){
//             respo.status(500).send('Nie można odczytać pliku!')
//         }
//         else{
//             respo.send(data);
//         }
//     })
// })

app.listen(port, () => {
    console.log(`Serwer nasłuchuje na porcie ${port}`);
})