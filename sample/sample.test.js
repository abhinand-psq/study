const namesplit = require("./index.js");


test('sdf',()=>{
    let a = 'abhinand'
    let val = namesplit(a)
    expect(val).toBe('my name is abhinand')
})