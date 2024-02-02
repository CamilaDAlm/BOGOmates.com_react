import { Octokit } from "@octokit/rest";

export async function updateJson(count){
  let data = [{
        "headers" : { 
            "Content-Type": "application/json",
            "Accept": "application/json"
           },
    
        "click":count
    
    }]
    
    console.log(data);
    //let url = "https://github.com/CamilaDAlm/BOGOmates.com_react/tree/main/bogomates_fakedoor/public"
    //let url = "c"
    let url = "public/"
    let options = {
                    method:'POST',
                    body:JSON.stringify(data)


    };

    const octokit = new Octokit({
        auth: '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'
      })

    /*const request = await octokit.request('POST /repos/CamilaDAlm/BOGOmates.com_react/', {
        owner: 'CamilaDAlm',
        repo: 'BOGOmates.com_react',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        content:data
      })  */

      const request =await octokit.repos.createOrUpdateFileContents({
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
           });

      console.log(request);
      
    return(  
      request
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