const axios =  require("axios");
exports.handler = async function (event, context)  {
var fyl;
try {
  //const {content} = JSON.parse(event.body);
  await axios({
  method:"post",
  url:"https://content.dropboxapi.com/2/files/download_zip",
  headers: {
    "Authorization":`Bearer ${ACCESS_TOKEN}`,
    "Dropbox-API-Arg":"{\"path\":\"/Newest/\"}",
    "Host":"content.dropboxapi.com"
  },
  params: {
    path:"/Newest/"
  }
}).then((res) => {
  fyl = JSON.stringify(res)
})
console.log(fyl);
return {statusCode:200,body:JSON.stringify({message:fyl})};
} catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: ' Failed fetching images ' } ),
    };
  }
};