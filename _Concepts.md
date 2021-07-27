### Recursion
- recursion is when a function calls itself
- To steal from Douglas Adams: Anything that, in happening, causes itself to happen again, happens again. That is recursion in a nutshell. Usually it is a function that calls itself inside the body of the function.
- Recursion can be thought of as a thing that contains within it a complete copy of itself.

Example:
Recursion is often helpful for dealing with structures that contain nested things. Like if you want to count all the files in a directory. Your 'countFiles' function needs to take into account that directories can contain other directories, so when it finds a dir within a dir it has to use the 'countFiles' function (itself) again to count those files as well.

```pseudoCode
function countFiles(dir) {
    sum = 0
    for each thing in dir:
        if thing is a file:
            sum += 1
        if thing is a directory:
            sum += countFiles(directory)
    return sum
}
```

Because all directories are basically the same and directories can contain other directories, the function to count the files contains a reference to itself. This is not the only type of thing recursion can be used for, but it is an example where it is definitely the best way to do it.