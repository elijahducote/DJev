const { Dropbox } = require('dropbox'),
adm = require('adm-zip'),
dbx = new Dropbox({ 
  clientId: 'gm4dyloi7rntol5',
  clientSecret: process.env.APP_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});
var zip;
exports.handler = async (event, context) => {
await dbx.filesDownload({path: '/Newest/Album_Cover[1].png'})
  .then(async (response) => {
     zip = response.result.fileBinary;
});
try {
  //const {content} = JSON.parse(event.body);
return {statusCode:200,body:JSON.stringify({success:true})};
} catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: ' Failed fetching images ' } ),
    };
  }
};