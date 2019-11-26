
import os
import sys
import time
import pyautogui
from pyfiglet import Figlet
from pyfiglet import figlet_format


def delete_lastline(n):
    for i in range(n):
        sys.stdout.write('\x1b[1A')
        sys.stdout.write('\x1b[2K')

def Pressed(data):
    for key in data:
        if(key in ['ctrl','alt','shift']):
            pyautogui.keyDown(key)
        else:
            pyautogui.press(key)

def unPressed(data):
    for key in data:
        if(key in ['ctrl','alt','shift']):
            pyautogui.keyUp(key)

def Loading():
    print(fig.renderText('NOW LOADING'))
    for i in range(3):
        time.sleep(5)
    delete_lastline(7)   

dot = False
fig = Figlet(font = 'standard',width=500)
Loading()
print(fig.renderText('PHEY BOARD'))
while True:
    try:
        f = open('data.txt','r')
    except:
        if dot:
            print('.',end='')
        print("No Pressed")
        delete_lastline(1)
        dot = not dot
    else:
        data = f.read().splitlines()
        f.close()
        os.remove('data.txt')
        data = [x.split(' ')[0] for x in data]
        for i in range(4):
            if data[i] == 'null':
                i-=1
                break
        data = data[:i+1]
        Pressed(data)
        if dot:
            print('.',end='')
        print(f"Present Key: {data[0]}",end = '')
        for i in range(1,len(data)):
            print(f"+{data[i]}",end = '')
        print('\n')
        delete_lastline(1)
        delete_lastline(1)
        dot = not dot
        unPressed(data)
    time.sleep(1)
    
