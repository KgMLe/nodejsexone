const fs = require ('fs');

// fs.writeFile('./data.txt', ' This is the first text.', ( (err) =>{
//     if (err) throw err;
//     console.log('Created');
//   }));

// fs.writeFile('./data.txt', ' This is the second text.', ( (err) =>{
//     if (err) throw err;
//     console.log('Created');
//   }));

  fs.appendFile('./data.txt', ' This is the appending text.', ( (err) =>{
    if (err) throw err;
    console.log('Created');
  }));  