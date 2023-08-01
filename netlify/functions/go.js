const { Dropbox } = require('dropbox'),
adm = require('adm-zip'),
dbx = new Dropbox({ 
  clientId: 'gm4dyloi7rntol5',
  clientSecret: process.env.APP_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});
var img;
exports.handler = async (event, context) => {
const {content} = JSON.parse(event.body),
arr = content.split("/"),
file = arr[arr.length - 1];

await dbx.filesDownload({path: `/Newest/${file}`})
  .then(async (response) => {
     img = response.result.fileBinary;
});
try {
return {statusCode:200,body:JSON.stringify({success:true})};
} catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: ' Failed fetching images ' } ),
    };
  }
};