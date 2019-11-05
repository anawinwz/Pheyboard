import os
import pyautogui
from pyfiglet import Figlet

fig = Figlet(font = 'standard')
print(fig.renderText('PHEY BOARD'))
while True:
    try:
        f = open('data.txt')
    except:
        print("File not found")
    else:
        data = f.read().splitlines()
        f.close()
        os.remove('data.txt')
        data = [x.split(' ')[0] for x in data]
        print(data)
    
