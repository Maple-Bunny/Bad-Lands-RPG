import tkinter as tk
from logo_window import LogoWindow
from json_editor import JsonEditor

def main():
    root = tk.Tk()
    logo_window = LogoWindow(root)
    json_editor = JsonEditor(root)
    root.mainloop()

if __name__ == "__main__":
    main()
