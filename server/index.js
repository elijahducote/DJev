import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import util from "util";
import { exec } from "child_process";
const app = express();

function print(msg,status = 2) {
  const color = [
    // failure
    "\x1b[31;4;1m",
    // success
    "\x1b[32;1m",
    // info
    "\x1b[36;3;1m",
    // warning
    "\x1b[33;1;3m"][status]
  console.log(`${color}${msg}\x1b[m`)
}

const execAsync = util.promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname,"..","client/source");

async function rebuild (command) {
  try {
    const {stdout, stderr} = await execAsync(command);
    if (stdout.length) print(stdout);
    if (stderr.length) print(stderr,0);
  } catch (e) {
    print(e,0);
  }
}
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(source));
app.use("/CDN",express.static(source));

app.get("/",(req,res) => {
  //rebuild(`esbuild ${source}/script/*.js --tree-shaking=true --legal-comments=none --charset=utf8 --format=iife --bundle --platform=browser --minify --target=chrome120,firefox120,edge120,safari16,opera103 --outdir=${source}/js`);
  print(source);
  rebuild(`bun esbuild "E:/nodejs/DJ_EV/client/source/script/*.js" --keep-names --drop:debugger --tree-shaking=true --legal-comments=none --charset=utf8 --format=iife --bundle --platform=browser --minify --target=chrome120,firefox120,edge120,safari16,opera103 --outdir="E:/nodejs/DJ_EV/client/source/js" && esbuild "E:/nodejs/DJ_EV/client/source/ravel.css" --loader:.css=css --tree-shaking=true --legal-comments=none --charset=utf8 --bundle --platform=browser --minify --target=chrome120,firefox120,edge120,safari16,opera103 --outdir="E:/nodejs/DJ_EV/client/source/css"`);
  const options = {
    root: source
  };
  res.sendFile("index.html",options);
  //res.sendStatus(200);
});
app.listen(3000);