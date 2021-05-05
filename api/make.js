// node make.js {name}
const fs = require('fs')
const args = process.argv

if(args.length < 3) {
  console.log(`To use the command: node make.js {name of resource}`)
} else {

  const resource = args[2].toLowerCase()
  const resourceName = resource.charAt(0).toUpperCase() + resource.slice(1)

  const controllerName = `${resourceName}Controller`
  const modelName = `${resourceName}Model`

  fs.mkdir(`${__dirname}/app/${resource}/routes`, { recursive: true }, (err) => {
    if (err) throw err;

    fs.writeFileSync(`${__dirname}/app/${resource}/${controllerName}.js`, `
const ${modelName} = require('./${modelName}')

module.exports = {
  async store(req, res) {
    return res.json([])
  },
  async index (req, res) {
    const ${resource} = await ${modelName}.find({})

    return res.json(${resource})
  }
}`)

fs.writeFileSync(`${__dirname}/app/${resource}/${modelName}.js`, `
const mongoose = require('mongoose')

const schema = {}

const ${resourceName}Schema = new mongoose.Schema(schema, {timestamps: true})

module.exports = mongoose.model('${resourceName}', ${resourceName}Schema)`)



fs.writeFileSync(`${__dirname}/app/${resource}/routes/index.js`, `
const route = require('express').Router()
const ${controllerName} = require('../${controllerName}')

route.get('/', ${controllerName}.index)
route.post('/', ${controllerName}.store)

module.exports = route`)

console.log(`Created Model/Controller/Routes for: ${resourceName}`)
});
}