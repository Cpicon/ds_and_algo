def GCD (a, b):
    assert a >= 0 | b >= 0 and int(a) == a | int(b) == b, "The number must be positive integer only!"
    if b == 0:
        return a
    else:
        return GCD(b, a % b)