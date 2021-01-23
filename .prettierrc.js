module.exports = {
  overrides: [
    {
      files: '*.js',
      options: {
        ...require('prettier-config-standard')
      }
    },
    {
      files: '*.ts',
      options: {
        $schema: 'http://json.schemastore.org/prettierrc',
        arrowParens: 'avoid',
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 4,
        printWidth: 120
      }
    }
  ]
}
