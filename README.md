# Pheyboard
Secondary keyboard for PC on a mobile phone.
This project is for "01204341 Software Engineer" class in Bachelor of Engineering in Computer Engineering, Kasetsart University.

## Contributors
| Student ID | Name |
| ---------- | ---- |
| 6010500095 | Chinnawach Chaidech |
| 6010500125 | Sakditach Suptanon |
| 6010500133 | Anawin Wongsadit |
| 6010500141 | Arthit Pothong |
| 6010502535 | Chanon Panomratanarak |
| 6010504678 | Chanawat Lohachala |

## Installation

### Requirement
- Android OS on mobile phone
- Linux OS or Window OS on PC

### Application on mobile phone
Installing application on your phone from `https://bit.ly/2OoZiwR`

### Software on PC
---Window OS---
1. Open linux virtual machine to run these command in terminal
   1.1 rfcomm (to connect bluetooth)
   1.2 miniterm (to receive data)
2. Run virtual environment activate script in folder pc/Window using window's command prompt "activate.bat"
3. Run parser.py in folder pc
4. Run pheyboard.py in folder pc/Window

---Linux OS---
1. Run these command in terminal
   - rfcomm (to connect bluetooth)
      > __$__ rfcomm listen -i rfcom0
   - miniterm (to receive data and append it in filename.txt) or change filename.txt to your text file name
      > __$__ miniterm /dev/rfcom >> ./filename.txt
2. Run virtual environment activate script in folder pc/Window using window's command prompt "activate.bat"
3. Run parser.py in folder pc
4. Run pheyboard.py in folder pc/Window

### Clone
Clone this repo to your local machine using `https://github.com/anawinwz/Pheyboard.git`
