import tkinter as tk
from logo_window import LogoWindow
from json_editor import JsonEditor
from json_navigator import JsonNavigator

def main():
    root = tk.Tk()
    root.geometry("1280x720")
    logo_window = LogoWindow(root)
    json_editor = JsonEditor(root)
    json_navigator = JsonNavigator(root)
    json_editor.set_navigator(json_navigator)  # Link navigator to the editor
    root.mainloop()

if __name__ == "__main__":
    main()
