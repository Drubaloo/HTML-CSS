var fs = require('fs');
var path = require('path');
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");
var office = "//Irongiant/2tb/Videos/Shows/The Office/Season.1";
var friends = "//Irongiant/2tb/Videos/Shows/Friends/Friends Season 1 COMPLETE 720p.BRrip.sujaidr (pimprg)"
var bigBang = "//Irongiant/2tb/Videos/Shows/The.Big.Bang.Theory.S01-S08.season.1-8.Complete.720p.HDTV.x264-MRSK[cttv]/The Big Bang Theory Season 1"
var moveTo = "E:/Season 1"

var officeEpisodes = []
var friendsEpisodes = []
var bigEpisodes = []

// Loop through all the files in the temp directory
fs.readdir(friends, function (err, files) {
    if (err) { throw err }
    files.forEach(function (ross, i) {

        friendsEpisodes.push("hello")
    })
})
fs.readdir(bigBang, (err, files) => {
    if (err) { throw err }
    files.forEach(function (bang, i) {


    })

})
fs.readdir(office, (err, files) => {
    if (err) { throw err }
    files.forEach(function (jims, i) {

    })
})


async function second() {
    await start()
    console.log(friendsEpisodes)
}



    // if (ross != undefined && ross.includes("friends_")) {
    //     fs.copyFile(`${friends}/${ross}`, `${moveTo}/${i += 100}.mkv`, function (error) {
    //         if (error) {
    //             console.error("File moving error.", error);
    //         } else {
    //             console.log("Moved file '%s' to '%s'.", friends, moveTo);
    //             if (bang[i] != undefined && bang[i].includes("The")) {

    //                 fs.copyFile(`${bigBang}/${bang[i]}`, `${moveTo}/${i += 100}.mkv`, function (error) {
    //                     if (error) {
    //                         console.error("File moving error.", error);
    //                     } else {
    //                         console.log("Moved file '%s' to '%s'.", bigbang, moveTo);
    //                         if (jims[i] != undefined && jims[i].includes("The")) {
    //                             fs.copyFile(`${office}/${jims[i]}`, `${moveTo}/${i += 100}.mkv`, function (error) {
    //                                 if (error) {
    //                                     console.error("File moving error.", error);
    //                                 } else {
    //                                     console.log("Moved file '%s' to '%s'.", office, moveTo);
    //                                 }
    //                             });
    //                         };
    //                     }
    //                 });
    //             };
    //         }
    //     })



    // }


            //let i = 1

            // files.forEach((file, index) => {
            //     let str = file.toString()
            //     str = str.replace("( PDFDrive )", "")
            //     //console.log(str)
            //     // fs.copyFile(`${moveFrom}/${file}`, `${moveTo}/Seaon.1.Ep${i}.avi`, function (err) {
            //     //     if (err) console.log('ERROR: ' + err);
            //     // });
            //     // console.log(file)


            //     //   files.forEach(function (file, index) {
            //     //     // Make one pass and make the file complete
            //     //     var fromPath = path.join(moveFrom, file);
            //     //     var toPath = path.join(moveTo, file);

            //     //     fs.stat(fromPath, function (error, stat) {
            //     //       if (error) {
            //     //         console.error("Error stating file.", error);
            //     //         return;
            //     //       }

            //     //       if (stat.isFile())
            //     //         console.log("'%s' is a file.", fromPath);
            //     //       else if (stat.isDirectory())
            //     //         console.log("'%s' is a directory.", fromPath);

            //     //       fs.rename(fromPath, toPath, function (error) {
            //     //         if (error) {
            //     //           console.error("File moving error.", error);
            //     //         } else {
            //     //           console.log("Moved file '%s' to '%s'.", fromPath, toPath);
            //     //         }
            //     //       });
            //     //     });
            //     //   });
            // });
