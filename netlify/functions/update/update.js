exports.handler = async function (event, context, callback) {
  try {
    console.log(event)
    var body = JSON.parse(event.body)
  }
  catch (e) {
    console.log(event)
    callback(
      e.message,
      {
        statusCode: 400,
        body: `[ERROR] Invalid JSON - ${e.message}`
      }
    )
    return
  }
 
  var uri = body.content + "&raw=1",
  encoder = require("@rossbob/image-to-base64"),
  URL = require("url"),
  https = require("https"),
  fyl = URL.parse("https://api.github.com/repos/elijahducote/djev/contents/blob/main/img/newest.png"),
  cfg = {hostname:fyl.hostname,path:fyl.pathname,method:'PUT',headers:{'Content-Type': 'application/vnd.github+json','Accept':'application/vnd.github+json','Authorization':`Bearer ${process.env.TOKEN}`,'X-GitHub-Api-Version':'2022-11-28'}};
  async function main(str) {
  const imageBase64WithURI = await encoder.toBase64({uri:str})
  return imageBase64WithURI;
  }

  main(uri).then((dt) => {
  body.content = dt;
  }).catch(console.error);

  async function getFylHash() {
  var data = "",
  options = {hostname:fyl.hostname,path:fyl.pathname,method:'GET',headers:{'Content-Type': 'application/vnd.github+json','Accept':'application/vnd.github+json','Authorization':`Bearer ${process.env.TOKEN}`,'X-GitHub-Api-Version':'2022-11-28'}},
  responseBody = '';
  
  let p = new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            res.setEncoding('utf8');

            res.on('data', (chunk) => {
                responseBody += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(responseBody));
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.write(data)
        req.end();
    });

    return await p;
  }
  getFylHash().then((bdy) => {
    body.ssh = bdy.ssh;
  });
  
  
  const req = https.request(cfg, function(res) {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}`)
    res.setEncoding('utf8');

    // Log data
    res.on('data', function (body) {
      console.log(`Body: ${body}`);
    });
  })

  // Handle webhook request error
  req.on('error', function(e) {
    const errorMessage = `[ERROR] Problem with request: ${e.message}`
    console.log(errorMessage)

    callback(
      e.message,
      {
        statusCode: 400,
        body: errorMessage
      }
    )
  })

  // Send form data to webhook request and end request
  req.end(JSON.stringify(body))

  callback(
    null,
    {
      statusCode: 200,
      body: `[SUCCESS] Sending webhook to ${fyl.format()}`
    }
  );
}