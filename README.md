
# DirFuck
## What is it?
DirFuck is an [esoteric programming language](https://esolangs.org/wiki/Esoteric_programming_language) created by [boon-cpu](https://github.com/boon-cpu).
It is based off of a [Turing Tape](https://en.wikipedia.org/wiki/Turing_machine) and has 8 different operations including loops.

However, there's something different about this language... where's all the code?
DirFuck doesn't read any files, it runs different operations based off of the folder structure of your project's directory.

## Is there a usecase?
no

## So how do I make a program???
### Folder Structure
 In the main directory of your program, there should be 1 directory for every operation.
 There should then be the correct number of sub-directories corresponding to which operation you want to execute.
 
 Note: The names of the folders do not matter, however they are executed in alphabetical order.
 
 ```
.
└--01
|  |
|  └-Sub
|
└--02
|  └-Sub0
|  └-Sub1
|  └-Sub2
|  └-Sub3
|  └-Sub4
|
└--03
```
Read below for an explanation of how this folder would be run.

### Operations
Which operation is executed is decided by how many sub-directories are in each directory.
|No. of sub-directories| Operation |
|--|--|
| 0 | Output ASCII character of the data at current memory slot.|
| 1 | Input character which is converted to ASCII value and stored at current memory slot. |
| 2 | Decrement pointer. |
| 3 | Increment pointer. |
| 4 | Decrement data at current memory slot. |
| 5 | Increment data at current memory slot. |
| 6 | Defines label. |
| 7 | Jump to label if data at current memory slot is nonzero. |

Using this table, we can see how the example program below would run:
 ```
.
└--01
|  |
|  └-Sub
|
└--02
|  └-Sub0
|  └-Sub1
|  └-Sub2
|  └-Sub3
|  └-Sub4
|
└--03
```
The first operation to be run would be `01`, in this case, it has 1 sub-directory, this then means that the first operation will be to take input.
Next, `02` will be read, 5 sub-directories means that this would increment the data at the current memory slot.
Finally, `03` gets run. This file has no sub-directories, referring to our table, we can see that this will output the data at the current memory slot.
## Issues
If you do find any issues with DirFuck, feel free to create a new issue [here](https://github.com/boon-cpu/DirFuck/issues).
Similarly, if you would like to suggest any code changes, open a pull request [here](https://github.com/boon-cpu/DirFuck/pulls)

