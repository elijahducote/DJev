const { Dropbox } = require("dropbox"),
{Base64} = require("js-base64"),
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

await axios({
    url: "https://api.github.com/repos/elijahducote/djev/contents/img/Newest.png",
    method: "GET",
    headers:{"Accept":"application/vnd.github+json","Authorization":`Bearer ${process.env.TOKEN}`,"X-GitHub-Api-Version":"2022-11-28"}
}).then(async (response) => {
hash = response.data.sha;
});


await dbx.filesDownload({path: `/Newest/${file}`})
  .then(async (response) => {
     img = Base64.btoa(response.result.fileBinary);
});
await axios({
    url: "https://api.github.com/repos/elijahducote/djev/contents/img/newest.png",
    method: "PUT",
    headers:{"Accept":"application/vnd.github+json","Authorization":`Bearer ${process.env.TOKEN}`,"X-GitHub-Api-Version":"2022-11-28"},
    data: { message:"update file", sha: hash, content:img}
});
try {
return {statusCode:200,body:JSON.stringify({success:true})};
} catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: " Failed fetching images " } ),
    };
  }
};