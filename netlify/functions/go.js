exports.handler = async function (event, context)  {
try {
  const {content} = JSON.parse(event.body);
return {statusCode:200,body:JSON.stringify({message:content})};
} catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: ' Failed fetching images ' } ),
    };
  }
};