def powerOfTwo(n):
    if n == 0:
        return 1
    else:
        return 2 * powerOfTwo(n-1)
# Function that power of two numbers with an iterative approach using while loop
def powerOfTwoIterative(n):
    result = 1
    while n > 0:
        result = result * 2
        n = n - 1
    return result
"""
POINTS          RECURSION   ITERATION
Space efficient? No          Yes         No stack memory require in case of iteration
Time efficient?  No          Yes         In case of recursion system needs more time for pop and push elements to stack memory which makes recursion less time efficient.
Easy to code?   Yes         NO           We use recursion specially in the cases we known that a problem can be solved by breaking it into smaller problems.
"""
# When to Use/avoid Recursion
"""
When to use it?
1. When a problem can be solved by breaking it into smaller problems.
2. When we are fine with the extra overhead that comes with it.
3. When we need a quick working solution instead of a more efficient one.
4. When traverse a tree or graph.
5. When we use memoization in recursion. "Memoization is a technique to store the result of a function call so that we don’t have to calculate it again."
When avoid it?
1. If time ans space complexity is a matters for us.
2. Recursion uses more memory. If we use embedded memory. For example, an application that runs on a mobile phone.
3. Recursion can be slow.
"""
# How to write a recursion in 3 steps?
"""
Step 1: Recursive case - the flow (Factorial Case)
n! = n * (n-1) * .... * 2 * 1 = n * (n-1)!
"""
import sys
def stepOneFactorial(n):
    print(n)
    return n * stepOneFactorial(n-1)

def functionInfinite():
    memorystack = 10000
    while True:
        try:    
            print(stepOneFactorial())
        except RecursionError as e:
            memorystack *= 10000000000000000000
            sys.setrecursionlimit(memorystack)
            print("Memory Stack is increased to: ", memorystack)
"""
Step 2: Base case - the stopping criteria (Factorial Case)
0! = 1
1! = 1
"""
def stepTwoFactorial(n):
    if n in [0, 1]:
        return 1
    else:
        return n * stepTwoFactorial(n-1)
"""
Step 3: Unintentional case - the constrain (Factorial Case)
"""
def stepThreeFactorial(n):
    assert n >= 0 and int(n) == n, "The number must be positive integer only!"
    if n in [0, 1]:
        return 1
    else:
        return n * stepThreeFactorial(n-1)

# Example of a solution for fibonacci problem

def fibonacci(n):
    assert n >= 0 and int(n) == n, "The number must be positive integer only!"
    if n in [0, 1]:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Interview Question 
"""
1. How to find the sum of digits of a positive integer using recursion?
Step 1: Recursive case - the flow
    10 10/10 = 1 and Remainder = 0
    54 54/10 = 5 and Remainder = 4
"""
