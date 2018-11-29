/* 
  Once you complete a problem, refresh ./classes.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  Classes are a tool for building similar objects over and over again.
  They are a construct that helps your organize your code.

  Let's work with some employees at a company.
  You work for Widget Co. They have hundreds of employees.
*/

////////// PROBLEM 1 //////////

/*
  Make a class to help us build all of the employees.
  Each employee has the following properties:
    - first_name
    - last_name
    - email
    - age
  Each employee has the following methods:
    - makeWidget
      - This returns a string equal to the employees first name + last name + the word widget
      - Example: "Dave Smith Widget"

  Call your class Employee and receive all the data in the constructor in the order listed above.
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

class Employee{
  constructor(first_name,last_name,email,age){
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.age = age
  }
  makeWidget(){
    return this.first_name + ' ' + this.last_name + ' Widget'
  }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//








////////// PROBLEM 2 //////////

/*
  Next, make a manager for Widget Co.
  The manager has all the same properties as an Employee. Copy the Employee class and rename it Manager.
  Each manager has the following additional properties:
    - reports (other employees) that defaults to an empty array
  Each manager has the following additional methods:
    - hire (employee)
      - Accepts a new employee as a parameter and pushes it to their list of reports.
    - fire (index)
      - Fire removes employees from their list of reports at the given index

  Call your new class Manager
*/

//Code Here

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

class Manager{
  constructor(first_name,last_name,email,age,reports){
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.age = age
    this.reports = []
  }
  makeWidget(){
    return this.first_name + ' ' + this.last_name + ' Widget'
  }
  hire(employee){
    this.reports.push(employee)
  }
  fire(ind){
    this.reports.splice(ind,1)
  }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

////////// PROBLEM 3 //////////

/*
  Managers for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
  Progressive managers have all the same properties as managers. Copy the Manager class and rename
  it to ProgressiveManager. Add the following additional properties:
    - title - default 'Not a manager'
    - bonus - default 0

  When employees are hired or fired, the manager's title should be updated based on the number of reports.
    0 reports : Not a manager
    1-3 reports : Barely Manager
    4-10 reports : Mostly Manager
    11-50 reports : Manager
    51-100 reports : Manager Plus
    101+ reports : Bestest Manager

  Everytime they fire an employee they get $100 added to their bonus.

  Call your new class ProgressiveManager
*/

//Code Here

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// let thresh = {
//   notAManager:  [1, 'Not a manager'],
//   barelyManager: [4, 'Barely Manager'],
//   mostlyManager: [11, 'Mostly Manager'], 
//   manager: [51, 'Manager'],
//   managerPlus: [101, 'Manager Plus'],
//   bestestManager: [x+1, 'Bestest Manager']
// }

class ProgressiveManager{
  constructor(first_name,last_name,email,age,reports){
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.age = age
    this.reports = []
    this.title = 'Not a manager'
    this.bonus = 0
  }
  makeWidget(){
    return this.first_name + ' ' + this.last_name + ' Widget'
  }
  promote(){
    let x = this.reports.length
    let thresh = {
      notAManager:  [1, 'Not a manager'],
      barelyManager: [4, 'Barely Manager'],
      mostlyManager: [11, 'Mostly Manager'], 
      manager: [51, 'Manager'],
      managerPlus: [101, 'Manager Plus'],
      bestestManager: [x+1, 'Bestest Manager']
    }
    if(x < 0){return null}
    for(let key in thresh){
      if(x<thresh[key][0]){
        this.title = thresh[key][1]
        return
      }
    }
  }
  hire(employee){
    this.reports.push(employee)
    this.promote()
  }
  fire(ind){
    this.reports.splice(ind,1)
    this.bonus += 100
    this.promote()
  }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

////////// PROBLEM 4 - Black Diamond //////////

/*
  Widget Co has a factory that makes widgets.
  Factories have Machines.

  Make a Machine class that takes in no parameters
  A Machine has the following properties:
    - widgets_made_count - default 0
    - wear_and_tear_count - default 0
    - needs_reboot - default false

  A Machine has the following methods:
    - makeWidgets
        - This function takes in a number and increases widgets_made_count by that amount
        - It also increases wear_and_tear_count by 1 for every 50
    - fixMachine
        - This function sets needs_reboot to true
    - reboot
        - This function returns an anonymous function that is called when the machine is done rebooting
        - The anonymous function should decrease wear_and_tear_count by 10, and set needs_reboot to false
*/

//Code Here

class Machine{
  constructor(){
    this.widgets_made_count = 0
    this.wear_and_tear_count = 0
    this.needs_reboot = false
  }
  makeWidgets(x){
    console.log(this,`makeWidgets invoked w/ arg  `+ x)
    this.widgets_made_count += x
    let y = 0;
    console.log('current y val: ' + y)
    let r = 0;
    if(this.widgets_made_count > 49){
      y += this.widgets_made_count // if we passed in 57, y is now 57
      r = y%50 // r is now 7
      y -= r // y is now 50
      this.wear_and_tear_count = 0
      this.wear_and_tear_count += y/50 //wear and tear is now 1
      console.log('WearAndTear is now ' + this.wear_and_tear_count)
      y = 0 // y is now 0
      y += r // y is now 7
      r = 0 // r is now 0
      // console.clear()
      console.log(y,r,this.wear_and_tear_count)
    }
  }
  fixMachine(){
    this.needs_reboot = true
  }
  reboot(){
    // console.clear()
    console.log('reboot function invoked')
    if(this.wear_and_tear_count)
    return () => {
      console.log('anonymous subfunction invoked, and wear and tear is ' + this.wear_and_tear_count)
      if(this.wear_and_tear_count > 10){
        this.wear_and_tear_count -= 10
        console.log('wear and tear is greater than 10, but has been reduce to ' + this.wear_and_tear_count)
        this.needs_reboot = false
        console.log('needs reboot should be false and is ' + this.needs_reboot)
      } else {
        this.wear_and_tear_count = 0
        console.log('w&t should be 0 and is ' + this.wear_and_tear_count)
        this.needs_reboot = false
        console.log('needs reboot should be false and is ' + this.needs_reboot)
      }
    }
  }
}
