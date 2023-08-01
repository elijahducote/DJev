const { Dropbox } = require('dropbox'),
const adm = require('adm-zip'),
dbx = new Dropbox({ 
  clientId: 'gm4dyloi7rntol5',
  clientSecret: process.env.APP_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});
var zip;
exports.handler = async (event, context) {
try {
  //const {content} = JSON.parse(event.body);
dbx.filesDownload({path: '/Newest'})
  .then(function(response) {
     zip = new adm(response.fileBinary());
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