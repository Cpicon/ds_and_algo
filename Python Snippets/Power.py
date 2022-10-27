def Power(x, n):
    assert x >= 0 | n >= 0 and int(x) == n | int(n) == n, "The number must be positive integer only!"
    if n == 0:
        return 1
    else:
        return x * Power(x, n - 1)

