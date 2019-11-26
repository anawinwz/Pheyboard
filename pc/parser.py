import schedule
import time
import os

FILE_PATH = "./Window/data.txt"
INCOME_PATH = "./incoming.txt"
cmds = []

def save_to_use(order):
    #print("got there")
    if os.path.exists(FILE_PATH):
        #print("exist")
        return
    else:
        #print('new')
        if len(order)>0:
            f = open(FILE_PATH, "a+")
            for i in range(4):
                print(order)
                if(len(order)==0):
                    return
                f.write(str(order[0])+'\n')
                del order[0]
            f.close()

def command_process(commands):
    order = []
    cmd = []
    for command in commands:
        for each in command.split('+'):
            order.append(each)
    if(order != []):
        for each in order:
            cmd.append(each.lower())

    try:
        i = cmd.index('')
    except ValueError:
        i = 0
    if(i):
        cmd[i] = '+'
        del cmd[i+1]


    return cmd

def read_file():
    commands = []
    f = open(INCOME_PATH, "r+")
    commands = f.read().splitlines()
    f.close()
    #print("read")

    f = open(INCOME_PATH, "w")
    f.write("")
    f.close()
    #print("cleared and got")

    #print(commands)
    return commands

def proceedure():
    now_cmd = read_file()
    processed_cmd = command_process(now_cmd)
    for each in processed_cmd:
        cmds.append(each)
    save_to_use(cmds)

schedule.every(0.01).seconds.do(proceedure)

while True:
    schedule.run_pending()
    time.sleep(0.01)
