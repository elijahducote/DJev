var fetch = import("node-fetch"),
Dropbox = require("dropbox").Dropbox;

export async function handler (event, context) {
var data = await dbx.filesDownload({accessToken:`${ACCESS_TOKEN}`,path: "/Newest"}).then(async (response) => {
      console.log("down");
      await response.pipe(temporaryFileStream);
    }).catch((error) => {
      console.log(error);
    });
return {statusCode:200,body:JSON.stringify({message:data})};
}