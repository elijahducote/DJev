const {Dropbox} = require("dropbox"),
dayjs = require("dayjs"),
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
//raw = JSON.parse(json),
honor = dayjs.tz(dayjs().format());
//path = url.parse(uri,true),
//names = path.pathname.split("/"),
//dir = names[names.length - 1];
//var enc = dir.split("-").join(" ");

} catch (err) {
return {statusCode:400,body:JSON.stringify({error:`Malformed Request: ${err}`})};
}

var kairos = [0,0],
today = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][dayt],
hr = honor.day(),
ndx,
assort,
latest,
tab,
nth;

if (honor.day() === dayt) kairos[0] = true;
if (hr >= relatym) kairos[1] = true;
if (hr <= (relatym + 1)) kairos[2] = true;

if (kairos[0] && kairos[1] && kairos[2]) {

await dbx.filesListFolder({path:`/SMM/Instagram/${today}`,include_deleted:false,limit:256}).then(async (response) => {
   tab = response.result.entries;
   nth = response.result.entries.length;
   ndx = response.result.entries.length;
});
for (;nth;--nth) {
  if (tab[nth - 1].tag !== "file") continue;
  assort[nth - 1] = dayjs(tab[nth - 1].client_modified);
}
latest = dayjs.max(assort);

for (;ndx;--ndx) {
if (latest.isSame(assort[ndx - 1])) break;
}

var fyl = tab[ndx - 1].name;
}
try {
return {statusCode:200,body:JSON.stringify({success:true,file:tab})};
} catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: " Failed fetching resources " } ),
    };
  }
}