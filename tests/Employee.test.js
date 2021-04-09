const Employee = require ('../lib/Employee');


const employeeTest = new Employee ("McMan", "mcman@man.com", 3 , "Employee");



describe('Employee', () => {
    it('has a name', () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

    it('has an email id', () => {
        expect(employeeTest.email).toEqual(expect.stomgContaining('e'))
    })

    it('has an id that is a num', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })


    it('has a role of employee', () => {
        exact(employeeTest.role).toBe('Employee')
    })

})