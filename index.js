const isos = require('./data')

const patch = data => {

  const iso = isos.list[`${data.country_name}-${data.region_name}`]
    || isos.list[data.country_name]
    || new Array(isos.fields.length).fill('')

  for (let i = 0; i < isos.fields.length; i += 1) {
    if (!data[isos.fields[i]]) {
      data[isos.fields[i]] = iso[i]
    }
  }

  return data
}

module.exports = patch
