const { Dropbox } = require("dropbox"),
axios = require("axios"),
dbx = new Dropbox({ 
  clientId: "gm4dyloi7rntol5",
  clientSecret: process.env.APP_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});
var img,
hash;
exports.handler = async (event, context) => {
const {content} = JSON.parse(event.body),
arr = content.split("/"),
file = arr[arr.length - 1];

if (!file.length) file = arr[arr.length - 2];

const { data: response } = await axios.get("https://api.github.com/repos/elijahducote/djev/contents/img/newest.png",{headers:{"Accept":"application/vnd.github+json","Authorization":`Bearer ${process.env.TOKEN}`,"X-GitHub-Api-Version":"2022-11-28"}});

hash = response;

//await dbx.filesDownload({path: `/Newest/${file}`})
//  .then(async (response) => {
//     img = Buffer.from(response.result.fileBinary).toString("base64");
//});

await axios.put("https://api.github.com/repos/elijahducote/djev/contents/img/newest.png",{"message":"update file", "sha":hash,"content":img},{headers:{"Accept":"application/vnd.github+json","Authorization":`Bearer ${process.env.TOKEN}`,"X-GitHub-Api-Version":"2022-11-28"}});
try {
return {statusCode:200,body:JSON.stringify({success:true,resp:hash})};
} catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: " Failed fetching images " } ),
    };
  }
};