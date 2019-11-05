
import os
import sys
import time
import pyautogui
from pyfiglet import Figlet
from pyfiglet import figlet_format

def clear(): 
    # for windows 
    if os.name == 'nt': 
        _ = os.system('cls') 
    # for mac and linux(here, os.name is 'posix') 
    else: 
        _ = os.system('clear') 

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
    clear()

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

    else:
        data = f.read().splitlines()
        f.close()
        os.remove('data.txt')
        data = [x.split(' ')[0] for x in data]
        
        for i in range(4):
            if data[i] == 'null':
                i-=1;
                break
        data = data[:i+1]
        print(data)
        Pressed(data)
        if dot:
            print('.',end='')
        print(f"Present Key: {data[0]}",end = '')
        for i in range(1,len(data)):
            print(f"+{data[i]}",end = '')
        print('\n')
        unPressed(data)
        
    dot = not dot
    time.sleep(1)

    
    
