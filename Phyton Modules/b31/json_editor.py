import tkinter as tk
from tkinter import filedialog, messagebox
import json

class JsonEditor:
    def __init__(self, root):
        self.root = root

        # Create a Text widget with a Scrollbar to display and edit JSON
        self.text_frame = tk.Frame(self.root)
        self.text_frame.grid(row=0, column=0, rowspan=1, columnspan=2, padx=10, pady=10, sticky="nsew")
        
        self.text_scroll = tk.Scrollbar(self.text_frame)
        self.text_scroll.pack(side=tk.RIGHT, fill=tk.Y)
        
        self.text_widget = tk.Text(self.text_frame, yscrollcommand=self.text_scroll.set)
        self.text_widget.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        self.text_scroll.config(command=self.text_widget.yview)

        # Add Load JSON button
        self.load_button = tk.Button(self.root, text="Carregar JSON", command=self.load_json)
        self.load_button.grid(row=1, column=0, padx=5, pady=5)

        # Add Save JSON button
        self.save_button = tk.Button(self.root, text="Salvar JSON", command=self.save_json)
        self.save_button.grid(row=1, column=1, padx=5, pady=5)

    def load_json(self):
        # Open a file dialog to select a JSON file
        file_path = filedialog.askopenfilename(filetypes=[("JSON files", "*.json")])
        if file_path:
            with open(file_path, "r") as file:
                json_content = json.load(file)
                self.text_widget.delete(1.0, tk.END)
                self.text_widget.insert(tk.END, json.dumps(json_content, indent=4))

    def save_json(self):
        # Open a file dialog to save the JSON file
        file_path = filedialog.asksaveasfilename(defaultextension=".json", filetypes=[("JSON files", "*.json")])
        if file_path:
            try:
                # Read the content of the text widget
                json_content = self.text_widget.get(1.0, tk.END)
                # Parse and format the JSON
                json_data = json.loads(json_content)
                formatted_json = json.dumps(json_data, indent=4)
                # Save the JSON file
                with open(file_path, "w") as file:
                    file.write(formatted_json)
                messagebox.showinfo("Sucesso", "Arquivo JSON salvo com sucesso!")
            except json.JSONDecodeError:
                messagebox.showerror("Erro", "Conteúdo JSON inválido!")
