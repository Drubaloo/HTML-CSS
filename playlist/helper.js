var fs = require('fs');
var path = require('path');
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");
var office = "//Irongiant/2tb/Videos/Shows/The Office/Season.1";
var friends = "//Irongiant/2tb/Videos/Shows/Friends/Friends Season 1 COMPLETE 720p.BRrip.sujaidr (pimprg)"
var bigBang = "//Irongiant/2tb/Videos/Shows/The.Big.Bang.Theory.S01-S08.season.1-8.Complete.720p.HDTV.x264-MRSK[cttv]/The Big Bang Theory Season 1"
var moveTo = "E:/Season 1"

var officeEpisodes = require("./officeEpisodes.json")
var friendsEpisodes = require("./friendsEpisodes.json")
var bigEpisodes = require("./bigBangEpisodes.json")


function makeJson() {
    // Loop through all the files in the temp directory
    fs.readdir(friends, function (err, files) {
        if (err) { throw err }
        files.forEach(function (ross, i) {
            fs.appendFileSync("friendsEpisodes.json", `{"episode":"${friends}/${ross}"}, \n`, (err) => {
                if (err) throw err
            })
            //friendsEpisodes.push("hello")
        })
    })
    fs.readdir(bigBang, (err, files) => {
        if (err) { throw err }
        files.forEach(function (bang, i) {

            fs.appendFileSync("bigBangEpisodes.json", `{"episode":"${bigBang}/${bang}"}, \n`, (err) => {
                if (err) throw err
            })
        })

    })
    fs.readdir(office, (err, files) => {
        if (err) { throw err }
        files.forEach(function (jims, i) {
            fs.appendFileSync("officeEpisodes.json", `{"episode":"${office}/${jims}"}, \n`, (err) => {
                if (err) throw err
            })
        })
    })
}


for (i = 0; i < friendsEpisodes.length; i++) {
    if (friendsEpisodes[i] == undefined) {
        continue
    } else if (friendsEpisodes[i].episode != undefined && friendsEpisodes[i].episode.includes("friends_s01")) {
        console.log(friendsEpisodes[i].episode)
    };
    if (bigEpisodes[i] == undefined) {
        continue
    } else if (bigEpisodes[i].episode != undefined && bigEpisodes[i].episode.includes("The")) {
        console.log(bigEpisodes[i].episode)
    };
    if (officeEpisodes[i] == undefined || officeEpisodes[i].episode == undefined) {
        continue
    } else if (officeEpisodes[i].episode != undefined && officeEpisodes[i].episode.includes("The")) {
        console.log(officeEpisodes[i].episode)
    };
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
