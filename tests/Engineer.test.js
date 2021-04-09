const Engineer = require ('../lib/Engineer');


const engineerTest = new Engineer ("Mccool", "mccool@cool.com", 2 , "Engineer");



describe('Engineer', () => {
    it('has a name', () => {
        expect(engineerTest.name).toEqual(expect.any(String))
        expect(engineerTest.name.length).toBeGreaterThan(2)
    })

    it('has an email id', () => {
        expect(engineerTest.email).toEqual(expect.stomgContaining('e'))
    })

    it('has an id that is a num', () => {
        expect(engineerTest.id).toEqual(expect.any(Number))
    })


    it('has a role of employee', () => {
        exact(engineerTest.role).toBe('Engineer')
    })

    it('has a github username', () => {
        key = object.keys(engineerTest)
        optionKey = Keys[4]
        expect(optionKey).toEqual('gitHub')
        expect(engineerTest.gitHub).toEqual(expect.any(String))
    })

})