const db = require('./lib')

console.log('GetAll()')
console.log(Object.keys(db.GetAll()).length)
console.log('GetCountriesShort()')
console.log(db.GetCountriesShort().length)
console.log('GetCountryByShort("US")')
console.log(db.GetCountryByShort('US'))
console.log('GetCountryInfoByShort("US")')
console.log(db.GetCountryInfoByShort('US'))
