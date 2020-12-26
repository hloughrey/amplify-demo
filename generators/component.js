const promptDirectory = require('inquirer-directory');

const { deleteFile } = require('../utils');

module.exports = function (plop) {
    plop.setPrompt('directory', promptDirectory);
    plop.setActionType('DeleteFile', deleteFile);

    function skipWhenAppComponent(answers) {
        return answers.sharedComponent
            ? undefined
            : `Skipping as you're creating a component for a specific app`;
    }

    function skipWhenSharedComponent(answers) {
        return answers.sharedComponent
            ? `Skipping as you're creating a shared component`
            : undefined;
    }

    plop.setGenerator('Create a new component', {
        description: 'Scaffolds out a new component',
        prompts: [
            {
                name: 'sharedComponent',
                type: 'confirm',
                message: 'Is this a shared component?',
                default: false,
            },
            {
                type: 'directory',
                name: 'directory',
                message: 'What app are you working on?',
                basePath: './apps',
                when: function (answers) {
                    return !answers.sharedComponent;
                },
            },
            {
                type: 'list',
                name: 'componentType',
                message: 'What type of component would you like?',
                choices: [
                    { name: 'Atom', value: 'atoms' },
                    { name: 'Molecule', value: 'molecules' },
                    { name: 'Organism', value: 'organisms' },
                ],
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your component?',
                validate: function (value) {
                    if (/.+/.test(value)) {
                        return true;
                    }
                    return 'name is required';
                },
            },
        ],
        actions: [
            'Create new component in selected app',
            {
                type: 'addMany',
                destination:
                    '../../apps/{{directory}}/components/{{componentType}}/{{pascalCase name}}',
                base: '../templates/component',
                templateFiles: '../templates/component/*.hbs',
                skip: skipWhenSharedComponent,
            },
            'Create a new shared component',
            {
                type: 'addMany',
                destination:
                    '../../libs/shared-components/src/lib/{{componentType}}/{{pascalCase name}}',
                base: '../templates/component',
                templateFiles: '../templates/component/*.hbs',
                skip: skipWhenAppComponent,
            },
            'Export component from atomic folder (shared component)',
            {
                type: 'append',
                path:
                    '../../libs/shared-components/src/lib/{{componentType}}/index.ts',
                template: `export * from './{{pascalCase name}}';`,
                separator: '',
                skip: skipWhenAppComponent,
            },
            'Export component from atomic folder (app component)',
            {
                type: 'append',
                path:
                    '../../apps/{{directory}}/components/{{componentType}}/index.ts',
                template: `export * from './{{pascalCase name}}';`,
                separator: '',
                skip: skipWhenSharedComponent,
            },
        ],
    });
};
