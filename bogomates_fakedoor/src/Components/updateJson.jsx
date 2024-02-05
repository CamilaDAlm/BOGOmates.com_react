import { Octokit } from "@octokit/rest";
import { createTokenAuth } from "@octokit/auth-token";
import {Token} from '../token.js';
//import { request } from "@octokit/request";
import "../clickCount.json";

const url='http://127.0.0.1:5000';

export async function updateJson(count){
  let data = {
       
    
        "click":count
    
    }
    
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-api-key', Token());
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    //let url = "https://github.com/CamilaDAlm/BOGOmates.com_react/tree/main/bogomates_fakedoor/public"
    //let url = "c"
    //let url = "public/"
    let options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers:myHeaders,
      //mode: "no-cors", 
      body:JSON.stringify(data),
      cache:"default"
      }      
                  


   // };

   // const token = "";
                   
    //const auth = createTokenAuth(token.toString());
    //const authentication = await auth();

    /*const octokit = new Octokit({
       auth : Token(),
      })*/

   /* const request1 = await octokit.request('PUT /repos/CamilaDAlm/BOGOmates.com_react/', {
        owner: 'CamilaDAlm',
        repo: 'BOGOmates.com_react',
        path: "output.json",
        message: "feat: Upload new count",
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        content:data,
        committer: {
          name: "CamilaDAlm",
          email: "camilacamila957@gmail.com",
        },
      })  ;*/

     /* const request =await octokit.repos.createOrUpdateFileContents({
        // replace the owner and email with your own details
             owner: "CamilaDAlm",
             repo: "BOGOmates.com_react",
             path: "output.json",
             message: "feat: Upload new count",
             content: data,
             committer: {
                name: "CamilaDAlm",
                email: "camilacamila957@gmail.com",
              },
             author: {
             name: "CamilaDAlm",
             email: "camilacamila957@gmail.com",
             },
           });*/

     // console.log(request);


     /* const requestWithAuth = request.defaults({
        headers: {
          authorization:Token(),
        },
      });

      const result = await requestWithAuth("GET /repos/{owner}/{repo}/"
      ,{
        owner: "CamilaDAlm",
        repo: "BOGOmates.com_react",
        message: "upload file",
        content:JSON.stringify(data).toString('base64'),

      });*/

     
      
      /*const result = await requestWithAuth("POST /repos/{owner}/{repo}/"
      ,{
        owner: "CamilaDAlm",
        repo: "BOGOmates.com_react",
        title: "Hello world",

      });*/

      //console.log(result);
      //console.log(result.data.permissions);
      let request = new Request(url+'/items/{item_name}',options);
     // const resp = fetch(request).then((res) => console.log(res));
     // const resp =  fetch(
     // ,options
     // )//.then((res) => res.json())
     /* .then((json) => {

       console.log(json)
      

      })*/
     // console.log(resp);
    return(  
      //request     result

      /*postData("../clickCount.json", { content: data }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      })*/
      fetch(request).then((res) => res.json()).then((json) => {

        console.log(json)
       
 
       }).catch(error => {
        console.error(error);
    })
     
    )

    //let request = new Request( url,options);

    //console.log(request);



    /*return (

      fetch(request)
        .then((response) => {
        //if (response.status === 200) {
          return response.json();
        //} else {
          //throw new Error("Something went wrong on API server!");
       // }
      })

    );*/

  }




  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  
  










