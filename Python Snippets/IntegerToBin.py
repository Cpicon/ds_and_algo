from utils import consolePrint
def IntToBin(n):
    assert n >= 0 and int(n) == n, "The number must be positive integer only!"
    if n == 0:
        return "0"
    if n == 1:
        return "1"
    else:
        return IntToBin(int(n / 2)) + str(n % 2)

consolePrint("This module returns the binary representation of a given positive integer.\nPlease enter a positive integer: ", "The binary representation is ", IntToBin)