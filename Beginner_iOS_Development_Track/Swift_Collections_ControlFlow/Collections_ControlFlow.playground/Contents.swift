//Collections and control flow

//Arrays

var todo: [String] = ["finish collections course", "buy groceries", "respond to emails"]
var numbers: [Int] = [1,2,3]

//add new item to end of array using append method
todo.append("Pick up dry cleaning")

//concatenate two arrays
[1,2,3] + [4]

//concatenate array containing string literal to todo
todo = todo + ["Order book online"]
todo += ["Order book online"]

// immutable arrays
let secondTaskList = ["mow the lawn"]

// secondTaskList.append("someTask") Error!
// secondTaskList += ["SomeTask"] Error!

// Reading from arrays
todo[0]

let firstTask = todo[0]

// Modifying existing values in an array
todo[4] = "Brush teeth"
todo

// Insert using Indexes
todo.insert("watch tv", at: 2)

// Remove items from array
todo.remove(at: 0)
todo.count



var arrayOfInts = [1,2,3,4,5,6]

arrayOfInts.append(7)
arrayOfInts.append(8)