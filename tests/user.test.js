import { getFirstName, isValidPassword } from '../src/utils/user.js'

test('Should return first name when given full name', () => {
    const firstName = getFirstName('Andrew Mead')
    
    expect(firstName).toBe('Andrew')
 })

 test('Should return first name when given first name', () => {
    const firstName = getFirstName('Jen')

    expect(firstName).toBe('Jen')
 })

 // Create test case "Should reject password that contains password"

 test('Should reject password that contains password', () => {
     const isPassword = isValidPassword('abcPassword098')

     expect(isPassword).toBe(false)
 })

 // Create test case "Should correctly validate a valid password"

 test('Should correctly validate a valid password', () => {
     const isValid = isValidPassword('abcPassword098!')

     expect(isValid).toBe(false)
 })

 