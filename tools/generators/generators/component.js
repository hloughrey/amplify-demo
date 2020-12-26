module.exports = function (plop) {
    plop.setGenerator('Create a new component', {
        description: 'Scaffolds out a new component',
        prompts: [
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
                    '../../src/components/{{componentType}}/{{pascalCase name}}',
                base: '../templates/component',
                templateFiles: '../templates/component/*.hbs',
            },
            'Export component from atomic folder (app component)',
            {
                type: 'append',
                path: '../../src/components/{{componentType}}/index.ts',
                template: `export * from './{{pascalCase name}}';`,
                separator: '',
            },
        ],
    });
};
