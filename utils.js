const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

const appendToFile = (answers, config) => {
    const { fileName, content } = config.data;

    fs.writeFile(
        path.resolve('apps', answers.applicationDirectory, fileName),
        JSON.stringify(content, null, 4),
        { flag: 'a+' },
        error => {
            if (error) {
                return error;
            }
        }
    );
};

const updateFile = (answers, config) => {
    const { fileName, updateContent } = config.data;
    const fileToBeEdited = fileName(answers);

    fs.readFile(fileToBeEdited, 'utf8', (error, data) => {
        if (error) {
            return console.error(error);
        }

        try {
            fs.writeFile(
                fileToBeEdited,
                updateContent(data, answers),
                'utf8',
                error => {
                    if (error) {
                        return console.error(error);
                    }
                }
            );
        } catch (error) {
            return console.error(error);
        }
    });
};

const createNewDirectories = (answers, config) => {
    const { directories } = config.data;

    directories.forEach(directory => {
        const directoryPath = path.resolve(
            'apps',
            answers.applicationDirectory,
            directory.directory
        );

        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath);

            directory.subDirectories.forEach(subDirectory => {
                const subDirectoryPath = path.resolve(
                    directoryPath,
                    subDirectory
                );
                fs.mkdirSync(subDirectoryPath);
            });
        }
    });
};

const deleteDirectory = (answers, config) => {
    const { directories } = config.data;

    directories.forEach(directory => {
        const dirPath = path.resolve(
            'apps',
            answers.applicationDirectory,
            directory
        );

        if (fs.existsSync(dirPath)) {
            rimraf.sync(dirPath);
        }
    });
};

const copyFile = (answers, config) => {
    const { src, dest } = config.data;
    const sourceDirectory = src(answers);
    const destinationDirectory = dest(answers);

    if (!fs.existsSync(destinationDirectory)) {
        fs.copyFileSync(sourceDirectory, destinationDirectory);
    }
};

const prependToFile = (answers, config) => {
    const { fileName, string } = config.data;

    const filePath = path.resolve(
        'apps',
        answers.applicationDirectory,
        fileName
    );

    if (!fs.existsSync(filePath)) {
        return;
    }

    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            return console.error(error);
        }

        fs.writeFile(filePath, `${string}${data}`, 'utf8', error => {
            if (error) {
                return console.log(error);
            }
        });
    });
};

module.exports = {
    appendToFile,
    updateFile,
    createNewDirectories,
    deleteDirectory,
    copyFile,
    prependToFile,
};
