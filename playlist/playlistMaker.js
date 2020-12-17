var fs = require('fs');
var path = require('path');
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");
var moveFrom = "E:/Tv Shows/SOA/Sons.Of.Anarchy.S01.Season.1.720p.5.1Ch.BluRay.ReEnc-DeeJayAhmed"
var moveTo = "F:/Test"


console.log(moveFrom)

let track = []
let item = []
let locations = []
let titles = []
let image



// var exec = require('child_process').exec;
// function showLetter(callback) {
//     exec('wmic logicaldisk get caption', function(err, stdout, stderr) {
//         if(err || stderr) {
//             console.log("root path open failed" + err + stderr);
//             return;
//         }
//         callback(stdout);
//     })
// }
// showLetter("E")

// Loop through all the files in the temp directory
fs.readdir(moveFrom, async function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    image = moveFrom[0]

    let i = 0

    await files.forEach((file, index) => {
        let str = file.toString()

        str = str.replace("( PDFDrive )", "")

        console.log(moveFrom[i])

        track.push(`<track>
    <location>file:///${moveFrom}/${file}</location>
    <title>${file}</title>
    <image>file:///${moveFrom[0]}</image>
    <extension application="http://www.videolan.org/vlc/playlist/0">
        <vlc:id>${i}</vlc:id>
    </extension>
</track>`)

        item.push(`<vlc:item tid="${i}"/>`)

        i++
    })
    let template = `<?xml version="1.0" encoding="UTF-8"?>
    <playlist xmlns="http://xspf.org/ns/0/" xmlns:vlc="http://www.videolan.org/vlc/playlist/ns/0/" version="1">
        <title>Playlist</title>
        <trackList>
            ${track}
        </trackList>
        <extension application="http://www.videolan.org/vlc/playlist/0">
            ${item}
        </extension>
    </playlist>`


    fs.writeFile("playlist.xspf", template, (err) => {
        console.log(err)
    })

    //   files.forEach(function (file, index) {
    //     // Make one pass and make the file complete
    //     var fromPath = path.join(moveFrom, file);
    //     var toPath = path.join(moveTo, file);

    //     fs.stat(fromPath, function (error, stat) {
    //       if (error) {
    //         console.error("Error stating file.", error);
    //         return;
    //       }

    //       if (stat.isFile())
    //         console.log("'%s' is a file.", fromPath);
    //       else if (stat.isDirectory())
    //         console.log("'%s' is a directory.", fromPath);

    //       fs.rename(fromPath, toPath, function (error) {
    //         if (error) {
    //           console.error("File moving error.", error);
    //         } else {
    //           console.log("Moved file '%s' to '%s'.", fromPath, toPath);
    //         }
    //       });
    //     });
    //   });
});