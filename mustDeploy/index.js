
var BASE_URL="/spContent/bespoke/mq-digital-v2/";
var DIV_ID = "interactive-bespoke-mq-digital-v2";

var FILELIST = [
    //"https://code.jquery.com/jquery-1.12.4.js"

]


function loadExt(e,t){var s=this;s.files=e,s.js=[],s.head=document.getElementsByTagName("head")[0],s.after=t||function(){},s.loadStyle=function(e){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,s.head.appendChild(t)},s.loadScript=function(e){var t=document.createElement("script");t.type="text/javascript",t.src=s.js[e];var a=function(){++e<s.js.length?s.loadScript(e):s.after()};t.onload=function(){a()},s.head.appendChild(t)};for(var a=0;a<s.files.length;a++)/\.js$|\.js\?/.test(s.files[a])&&s.js.push(s.files[a]),/\.css$|\.css\?/.test(s.files[a])&&s.loadStyle(s.files[a]);s.js.length>0?s.loadScript(0):s.after()}

async function loadHtml() {
   // console.log("Load react js and css files ...");
    await fetch("/spContent/bespoke/mq-digital-v2/asset-manifest.json")
    .then(response => response.json())
    .then(function(json){
        json.entrypoints.forEach(function(value){
            FILELIST.push(BASE_URL+value);
        });
    });
    //console.log("Load content into div ...");
    const response = await fetch(BASE_URL+"index.html");

    // console.log(BASE_URL+"index.html");

    var text = await response.text();
    // Fix images and videos references
    //  console.log(text);
    text = text.replaceAll('src="images', 'src="'+BASE_URL+'images');
    text = text.replaceAll('src="images', "src='"+BASE_URL+"images");
    text = text.replaceAll('src="videos', 'src="'+BASE_URL+'videos');
    text = text.replaceAll('src="videos', "src='"+BASE_URL+"videos");
    text = text.replaceAll('url("images', 'url("'+BASE_URL+'images');
    text = text.replaceAll("url('images", "url('"+BASE_URL+"images");
    text = text.replaceAll('src="audios', 'src="'+BASE_URL+'audios');
    text = text.replaceAll('src="audios', "src='"+BASE_URL+"audios");
    // Fix js and css paths
    text = text.replaceAll('src="/static/', 'src="'+BASE_URL+'static/');
    text = text.replaceAll('href="/static/', 'href="'+BASE_URL+'static/');

    document.getElementById(DIV_ID).innerHTML = text;
    new loadExt(FILELIST, function() {
       // console.log("FOW All files loaded", FILELIST);
    })
};
loadHtml();
