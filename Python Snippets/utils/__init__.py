import sys
def consolePrint(questionMessage, answerMessage, callback):
    if len(sys.argv) == 1:
        param = int(input(questionMessage))
        print(answerMessage + str(callback(param)))
    elif len(sys.argv) == 2:
        print(answerMessage + str(callback(int(sys.argv[1]))))
    elif len(sys.argv) > 2:
        print("Too many arguments!")