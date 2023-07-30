var {arrayBufferToBinaryString} = require("blob-util"),
fetch = await import("node-fetch"),
body,
adm = require("adm-zip"),
zip,
sample_png = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=",
axios = require("axios"),
git_path = "https://api.github.com/repos/elijahducote/djev/contents/img/newest.png",
Dropbox = require("dropbox").Dropbox,
ketch = require("isomorphic-fetch"),
sendr = {"Host":"api.github.com","Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","Authorization":`${process.env.TOKEN}`};

exports.handler = async function (event) {
  body = event.body;
  
  var req = await fetch(git_path, {
    method:"GET",
    headers:sendr
  }).then((res) => {
  
   var fyl = res.json();
   body.sha = fyl.sha;
  
  });
  
  var dbx = new Dropbox({accessToken:`${process.env.ACCESS_TOKEN}`,fetch: ketch});
  dbx.filesDownload({path:"/Newest"}).then(function(resp) {
      var blob = resp.result.fileBinary;
      zip = new adm(blob);
    })
  return {statusCode:200,body:JSON.stringify({message:"DELIVERED."})};
};


const MODES = {FILE:"100644",FOLDER:"040000"},
TYPE = {BLOB:"blob",TREE:"tree"},
FILES_TO_COMMIT = [
  {
    path: "/img/newest.png",
    content: sample_png
  },
  {
    path: "/img/newer.png",
    content: sample_png
  },
   {
    path: "/img/new.png",
    content: sample_png
  },
  {
    path: "/img/old.png",
    content: sample_png
  },
  {
    path: "/img/older.png",
    content: sample_png
  },
  {
    path: "/img/oldest.png",
    content: sample_png
  }
],
COMMITS_URL = "https://api.github.com/repos/elijahducote/djev/git/commits",
REPOSITORY_TREE_URL = "https://api.github.com/repos/elijahducote/djev/git/trees",
REF_URL = "https://api.github.com/repos/elijahducote/djev/git/refs/heads/main";

const main = async () => {
  var ntries = zip.getEntries(),
  obj = [],
  len;
  
  ntries.forEach(function (entry) {
   var elm = obj.push({}),
   format = entry.header.toJSON();
   elm.dub = entry.entryName;
   elm.tym = format.time;
  });
  obj.sort(function(a,b){
   return b.tym.getTime() - a.tym.getTime();
  });
  
  for (var len = 6;len;--len) {
   var data = zip.getEntry(FILES_TO_COMMIT[len - 1].dub),
   procure = data.readAsText();
   FILES_TO_COMMIT[len - 1].content = arrayBufferToBinaryString(procure);
  }
  
  const { data: { object: { sha: currentCommitSha } } } = await axios({ url: REF_URL, headers: sendr });
  const COMMIT_URL = `${COMMITS_URL}/${currentCommitSha}`;
  const { data: { tree: { sha: treeSha } } } = await axios({ url: COMMIT_URL, headers: sendr });

  const { data: { sha: newTreeSha } } = await axios({
    url: REPOSITORY_TREE_URL,
    method: "POST",
    headers:sendr,
    data: {
      base_tree: treeSha,
      tree: FILES_TO_COMMIT
        .map(({ content, path }) => (
          content
            ? { path, content, mode: MODES.FILE, type: TYPE.BLOB } // Works for text files, utf-8 assumed
            : { path, sha: null, mode: MODES.FILE, type: TYPE.BLOB } // If sha is null => the file gets deleted
        )),
    },
  });

  const { data: { sha: newCommitSha } } = await axios({
    url: COMMITS_URL,
    method: "POST",
    headers:sendr,
    data: {
      message: "Committing with GitHub's API :fire:",
      tree: newTreeSha,
      parents: [ currentCommitSha ],
    },
  });

  await axios({
    url: REF_URL,
    method: "POST",
    headers:sendr,
    data: { sha: newCommitSha },
  });
};

main()
  .catch((error) => console.log(error.response.data));