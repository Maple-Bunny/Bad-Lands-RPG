import tkinter as tk
from PIL import Image, ImageTk
import os

class LogoWindow:
    def __init__(self, root):
        self.root = root
        self.root.title("Logo Window")

        # Load the logo image
        script_dir = os.path.dirname(os.path.abspath(__file__))
        logo_path = os.path.join(script_dir, "logo.png")
        self.logo_image = Image.open(logo_path)
        self.logo_image = ImageTk.PhotoImage(self.logo_image)

        # Create a Label to display the logo
        self.logo_label = tk.Label(self.root, image=self.logo_image)
        self.logo_label.grid(row=0, column=2, rowspan=2, padx=10, pady=10, sticky="nsew")

        # Bind the configure event to resize the logo
        self.root.bind("<Configure>", self.resize_logo)

    def resize_logo(self, event):
        # Get the new dimensions of the window
        new_width = event.width // 2
        new_height = event.height // 2

        # Resize the logo image
        self.logo_image = Image.open("logo.png")
        self.logo_image = self.logo_image.resize((new_width, new_height), Image.ANTIALIAS)
        self.logo_image = ImageTk.PhotoImage(self.logo_image)

        # Update the logo label with the resized image
        self.logo_label.config(image=self.logo_image)
