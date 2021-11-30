ints = [10, 10, 10, 10, 10]

def foo(ints):
    ints = [10, 10, 10, 10, 10]
    
    
    count = 0
    for i in ints:
        if (count % 2) == 0:
            ints.pop(count)
            ints.insert(0,i+1)    
            count = count + 1

        else:
            ints.pop(count)
            ints.insert(0,i-1)  
            count = count + 1

    
    return(ints)

print(foo(ints))