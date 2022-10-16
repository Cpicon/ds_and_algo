#Function that return fibonacci series from a given integer number, using recursion

def Fibonacci(n):
    assert n > 0 and int(n) == n, "The number must be a positive integer only!"
    if n in [0, 1]:
        return n
    else:
        return Fibonacci(n-1) + Fibonacci(n-2)
        
print(Fibonacci(7))