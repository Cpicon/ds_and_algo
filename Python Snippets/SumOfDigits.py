import math as m

# Function that sums the digits of a integer using recursion

def SumOfDigits(n):
    assert n > 0 and int(n) == n, "The number must be positive integer only!"
    if n < 10:
        return n
    elif n < 100:
        return m.floor(n/10) + n % 10
    else:
        return SumOfDigits(m.floor(n/10)) + n%10

print(SumOfDigits(6666))