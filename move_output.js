const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

const buildDir = path.join(__dirname, "build");
const outputDir = path.join(__dirname, "docs");
const cname = path.join(__dirname, "CNAME");
const cnameOutput = path.join(outputDir, "CNAME");

if (!fs.existsSync(buildDir)) {
    console.log(`${buildDir} does not exist, exiting`);
    process.exit(-1);
}

async function a() {
    if (fs.existsSync(outputDir)) {
        // NOTE: requires nodejs 13+
        fs.rmdirSync(outputDir, {
            recursive: true,
        });
    }

    // Wait a few seconds for some reason
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });

    fs.renameSync(buildDir, outputDir);

    console.log(cnameOutput);

    fs.copyFileSync(cname, cnameOutput);

    exec("git add *", (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

a();

// Finally: remove build dir
/*if (fs.existsSync(buildDir)) {
    fs.rmdirSync(buildDir, {
        recursive: true,
    });
}*/
