# Function that sums the digits of a integer using recursion
from utils import consolePrint
def SumOfDigits(n):
    assert n >= 0 and int(n) == n, "The number must be positive integer only!"
    if n < 10:
        return n
    elif 10 < n < 100  :
        return int(n/10) + n % 10
    else:
        return SumOfDigits(int(n/10)) + n%10

consolePrint("This module returns the sum of digits of a given positive integer.\nPlease enter a positive integer: ", "The sum of digits is ",SumOfDigits)