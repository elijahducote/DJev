const { Dropbox } = require("dropbox"),
url = require("url"),
axios = require("axios"),
dbx = new Dropbox({ 
  clientId: "gm4dyloi7rntol5",
  clientSecret: process.env.APP_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});
var img,
hash;
exports.handler = async (event, context) => {
const {content} = JSON.parse(event.body);
//path = url.parse(content),
//file = url.pathname;


const { data: response } = await axios.get("https://api.github.com/repos/elijahducote/djev/contents/img/newest.png",{headers:{"Accept":"application/vnd.github+json","Authorization":`Bearer ${process.env.TOKEN}`,"X-GitHub-Api-Version":"2022-11-28"}});

hash = response.sha;

//await dbx.filesDownload({path: `/Newest/${dir}`}).then(async (response) => {
//     img = Buffer.from(response.result.fileBinary).toString("base64");
//});

//await axios.put("https://api.github.com/repos/elijahducote/djev/contents/img/newest.png",{"message":"update file", "sha":hash,"content":img},{headers:{"Accept":"application/vnd.github+json","Authorization":`Bearer ${process.env.TOKEN}`,"X-GitHub-Api-Version":"2022-11-28"}});
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