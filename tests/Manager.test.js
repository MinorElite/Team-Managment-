const Manager = require ('../lib/Manager');


const managerTest = new Manager ("Jax", "Jax@man.com", 4 , "Employee");



describe('Manager', () => {
    it('has a name', () => {
        expect(managerTest.name).toEqual(expect.any(String))
        expect(managerTest.name.length).toBeGreaterThan(2)
    })

    it('has an email id', () => {
        expect(managerTest.email).toEqual(expect.stomgContaining('e'))
    })

    it('has an id that is a num', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })


    it('has a role of manager', () => {
        exact(employeeTest.role).toBe('Employee')
    })

    it('has an office number', () => {
        keys = object.keys(managerTest)
        optionKey = Keys[4]
        expect(optionKey).toEqual('office')
        expect(managerTest.office).toEqual(expect.any(String))
    })
    })

