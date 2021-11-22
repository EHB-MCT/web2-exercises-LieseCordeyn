import * as fs from 'fs/promises';

// get the data from teh file
let result = await fs.readFile('boardgames.json');
let data = JSON.parse(result);

//loop over boardgames
for(let i in data){
    //dynamische filename (uit data gehaald) maken
    let filename = `${i}.json`
    let bg = JSON.stringify(data[i]); //convert value to string

    //Safe to file
    await fs.writeFile(filename,bg)
    
}