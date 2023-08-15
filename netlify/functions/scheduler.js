const {Dropbox} = require("dropbox"),
dayjs = require("dayjs"),
dbx = new Dropbox({ 
  clientId: "gm4dyloi7rntol5",
  clientSecret: process.env.APP_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
}),
json = require("../../instagram.json"),
utc = require("dayjs/plugin/utc"),
minMax = require("dayjs/plugin/minMax"),
timezone = require("dayjs/plugin/timezone");

exports.handler = async (event, context) => {
try {
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(minMax);

dayjs.tz.setDefault("America/Chicago");

var {dayt,relatym,onbord} = JSON.parse(event.body),
honor = dayjs.tz();
//path = url.parse(uri,true),
//names = path.pathname.split("/"),
//dir = names[names.length - 1];
//var enc = dir.split("-").join(" ");

} catch (err) {
return {statusCode:400,body:JSON.stringify({error:`Malformed Request: ${err}`})};
}

var kairos = [false,false,false],
today = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][dayt],
hr = honor.hour(),
ndx,
assort = [],
latest,
tab,
nth;

if (honor.day() === dayt) kairos[0] = true;
//if (hr >= relatym) kairos[1] = true;
//if (hr <= (relatym + 1)) kairos[2] = true;

if (kairos[0]) {

await dbx.filesListFolder({path:`/SMM/Instagram/${today}`,include_deleted:false}).then(async (response) => {
   tab = response.result.entries;
   nth = response.result.entries.length;
   ndx = response.result.entries.length;
});
for (;nth;--nth) {
  if (tab[nth - 1].tag !== "file") continue;
  assort.push(dayjs(tab[nth - 1].server_modified).tz());
}
latest = dayjs.max(assort);

//for (;ndx;--ndx) {
//if (dayjs(latest).isSame(assort[ndx - 1])) break;
//}

//var fyl = tab[ndx - 1].name;
}
try {
return {statusCode:200,body:JSON.stringify({success:latest.minute()})};
} catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: " Failed fetching resources " } ),
    };
  }
}