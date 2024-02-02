
import { writeFile } from 'node:fs';

export function WriteJson(count){
    //const fs = require('fs');

    let data = count; //"This is a file containing a collection of books.";

    writeFile("./clickCount.json", data, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        //console.log(fs.readFileSync("books.txt", "utf8"));
        }
});
    
}