const path = require('path');

const promptDirectory = require('inquirer-directory');
const {
    updateFile,
    createNewDirectories,
    deleteDirectory,
    copyFile,
    prependToFile,
} = require('../utils');

module.exports = function (plop) {
    plop.setPrompt('directory', promptDirectory);
    plop.setActionType('UpdateFile', updateFile);
    plop.setActionType('CreateNewDirectories', createNewDirectories);
    plop.setActionType('DeleteDir', deleteDirectory);
    plop.setActionType('CopyFile', copyFile);
    plop.setActionType('PrependToFile', prependToFile);

    const appsDirectoryPath = '../../apps';
    const templatesDirectoryPath = '../templates';
    const rootDirectoryPath = '../..';

    plop.setGenerator('Complete Next.js app setup', {
        description:
            'Amend the files & folders that Nx generates so they conform to the Purplebricks standards',
        prompts: [
            {
                type: 'directory',
                name: 'applicationDirectory',
                message: 'What app are you working on?',
                basePath: './apps',
            },
            {
                type: 'input',
                name: 'baseUrl',
                message:
                    'What base URL would you like to serve this application from? e.g. my properties (whatever you put in here will be converted to kebab case)',
                validate: function (value) {
                    if (/.+/.test(value)) {
                        return true;
                    }
                    return 'A base URL is required';
                },
            },
        ],
        actions: [
            'Remove cypress from the package.json file',
            {
                type: 'modify',
                path: `${rootDirectoryPath}/package.json`,
                pattern: /,\s+"cypress": "[\^.0-9]+"/gi,
                template: '',
            },
            'Delete unneeded directories',
            {
                type: 'DeleteDir',
                data: {
                    directories: ['pages', 'environments', 'specs', 'public'],
                },
            },
            'Create new directories',
            {
                type: 'CreateNewDirectories',
                data: {
                    directories: [
                        {
                            directory: 'pages',
                            subDirectories: [],
                        },
                        {
                            directory: 'page-lib',
                            subDirectories: [],
                        },
                        {
                            directory: 'context',
                            subDirectories: ['environment'],
                        },
                        {
                            directory: 'configuration',
                            subDirectories: [],
                        },
                    ],
                },
            },
            'Add the deployment pipeline configuration file',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/deploy.yml`,
                templateFile: `${templatesDirectoryPath}/deploy.yml.hbs`,
                force: true,
            },
            'Add the pipeline charts configuration files',
            {
                type: 'addMany',
                destination: `${appsDirectoryPath}/{{applicationDirectory}}/charts/{{applicationDirectory}}`,
                base: `${templatesDirectoryPath}/charts`,
                templateFiles: `${templatesDirectoryPath}/charts/**/*`,
                force: true,
            },
            'Add the helm ignore file',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/charts/{{applicationDirectory}}/.helmignore`,
                templateFile: `${templatesDirectoryPath}/charts/.helmignore`,
                force: true,
            },
            'Remove the Nx environment variable config from the workspace.json file',
            {
                type: 'UpdateFile',
                data: {
                    fileName: () => path.resolve('workspace.json'),
                    updateContent: (data, answers) => {
                        let newContent = JSON.parse(data);
                        newContent.projects[
                            answers.applicationDirectory
                        ].architect.build.configurations.production.fileReplacements = [];

                        return JSON.stringify(newContent, null, 4);
                    },
                },
            },
            'Replace the default README.md file',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/README.md`,
                templateFile: `${templatesDirectoryPath}/README.md.hbs`,
                force: true,
            },
            'Replace the default Next config file',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/next.config.js`,
                templateFile: `${templatesDirectoryPath}/next.config.js.hbs`,
                force: true,
            },
            'Replace the .babelrc file to add the styled component configuration',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/.babelrc`,
                templateFile: `${templatesDirectoryPath}/.babelrc`,
                force: true,
            },
            'Replace the default Jest config file with one that includes the code coverage thresholds',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/jest.config.js`,
                templateFile: `${templatesDirectoryPath}/jest.config.js.hbs`,
                force: true,
            },
            'Replace the default Jest setup file to import styled components',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/jest.setup.js`,
                templateFile: `${templatesDirectoryPath}/jest.setup.js`,
                force: true,
            },
            'Replace the tsconfig file',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/tsconfig.json`,
                templateFile: `${templatesDirectoryPath}/tsconfig.json`,
                force: true,
            },
            'Replace the eslint config file to include the jest-dom plugin',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/.eslintrc.json`,
                templateFile: `${templatesDirectoryPath}/.eslintrc.app.json`,
                force: true,
            },
            'Add the styled component type definitions to the index type definition file',
            {
                type: 'PrependToFile',
                data: {
                    fileName: 'index.d.ts',
                    string: `import 'styled-components';\n\nimport { TTheme } from '@pb/styles';\n\ndeclare module 'styled-components' { // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-empty-interface\nexport interface DefaultTheme extends TTheme {} }\n\n`,
                },
            },
            'Add the required files to the pages directory',
            {
                type: 'addMany',
                destination: `${appsDirectoryPath}/{{applicationDirectory}}/pages`,
                base: `${templatesDirectoryPath}/pages`,
                templateFiles: `${templatesDirectoryPath}/pages/*.hbs`,
                force: true,
            },
            'Add the required files to the page-lib directory',
            {
                type: 'addMany',
                destination: `${appsDirectoryPath}/{{applicationDirectory}}/page-lib/index-page`,
                base: `${templatesDirectoryPath}/page-lib/index-page`,
                templateFiles: `${templatesDirectoryPath}/page-lib/index-page/*.hbs`,
                force: true,
            },
            'Add the index file to the context directory',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}/context/index.ts`,
                templateFile: `${templatesDirectoryPath}/context/index.ts.hbs`,
                force: true,
            },
            'Add the required files to the environment context directory',
            {
                type: 'addMany',
                destination: `${appsDirectoryPath}/{{applicationDirectory}}/context/environment`,
                base: `${templatesDirectoryPath}/context/environment`,
                templateFiles: `${templatesDirectoryPath}/context/environment/*.hbs`,
                force: true,
            },
            'Add the required files to the configuration directory',
            {
                type: 'addMany',
                destination: `${appsDirectoryPath}/{{applicationDirectory}}/configuration`,
                base: `${templatesDirectoryPath}/configuration`,
                templateFiles: `${templatesDirectoryPath}/configuration/*.hbs`,
                force: true,
            },
            'Add the required files and subdirectories to the components directory',
            {
                type: 'addMany',
                destination: `${appsDirectoryPath}/{{applicationDirectory}}/components`,
                base: `${templatesDirectoryPath}/components`,
                templateFiles: `${templatesDirectoryPath}/**/*.*`,
                force: true,
            },
            'Add the public directory',
            {
                type: 'addMany',
                destination: `${appsDirectoryPath}/{{applicationDirectory}}/public`,
                base: `${templatesDirectoryPath}/public`,
                templateFiles: `${templatesDirectoryPath}/**/*.*`,
                force: true,
            },
            'Add the eslint import order plugin to the e2e app',
            {
                type: 'UpdateFile',
                data: {
                    fileName: answers =>
                        path.resolve(
                            'apps',
                            `${answers.applicationDirectory}-e2e`,
                            '.eslintrc'
                        ),
                    updateContent: () => {
                        return `{\n    "extends": "../../.eslintrc",\n    "plugins": ["import"],\n    "rules": {},\n    "ignorePatterns": ["!**/*"],\n    "env": {\n        "node": true\n    }\n}\n`;
                    },
                },
            },
            'Replace the default .eslintrc.json file in the e2e app to include the import order plugin',
            {
                type: 'add',
                path: `${appsDirectoryPath}/{{applicationDirectory}}-e2e/.eslintrc.json`,
                templateFile: `${templatesDirectoryPath}/.eslintrc.e2e.json`,
                force: true,
            },
            'Remove the example cypress commands from the commands support file',
            {
                type: 'UpdateFile',
                data: {
                    fileName: answers =>
                        path.resolve(
                            'apps',
                            `${answers.applicationDirectory}-e2e`,
                            'src',
                            'support',
                            'commands.ts'
                        ),
                    updateContent: () => {
                        return `// eslint-disable-next-line @typescript-eslint/no-namespace\ndeclare namespace Cypress {}\nimport '@testing-library/cypress/add-commands';`;
                    },
                },
            },
        ],
    });
};
