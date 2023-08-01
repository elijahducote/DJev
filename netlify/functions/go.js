const { Dropbox } = require('dropbox'),
adm = require('adm-zip'),
dbx = new Dropbox({ 
  clientId: 'gm4dyloi7rntol5',
  clientSecret: process.env.APP_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});
var zip;
exports.handler = async (event, context) => {
try {
  //const {content} = JSON.parse(event.body);
await dbx.filesDownload({path: '/Newest'})
  .then(function(response) {
     zip = response.result.fileBinary;
});
return {statusCode:200,body:JSON.stringify({success:true})};
} catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: ' Failed fetching images ' } ),
    };
  }
};