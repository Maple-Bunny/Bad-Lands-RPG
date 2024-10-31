import json
import tkinter as tk
from tkinter import ttk, filedialog, messagebox

class JsonEditor:
    def __init__(self, root):
        self.root = root
        self.root.title("Editor JSON")
        self.root.geometry("800x600")
        
        self.data = {}
        
        self.frame = ttk.Frame(root, padding="3 3 12 12")
        self.frame.grid(sticky=(tk.W, tk.E, tk.N, tk.S))
        
        menu_bar = tk.Menu(root)
        root.config(menu=menu_bar)
        
        arquivo_menu = tk.Menu(menu_bar, tearoff=0)
        menu_bar.add_cascade(label="Arquivo", menu=arquivo_menu)
        arquivo_menu.add_command(label="Abrir", command=self.abrir_arquivo)
        arquivo_menu.add_command(label="Novo", command=self.criar_arquivo)
        arquivo_menu.add_command(label="Salvar", command=self.salvar_arquivo)
        
    def abrir_arquivo(self):
        caminho_arquivo = filedialog.askopenfilename(filetypes=[("JSON files", "*.json")])
        if caminho_arquivo:
            try:
                with open(caminho_arquivo, 'r') as f:
                    self.data = json.load(f)
                    self.mostrar_dados()
            except Exception as e:
                messagebox.showerror("Erro", f"Falha ao carregar o arquivo:\n{e}")

    def criar_arquivo(self):
        self.data = {}
        self.mostrar_dados()

    def salvar_arquivo(self):
        caminho_arquivo = filedialog.asksaveasfilename(defaultextension=".json", filetypes=[("JSON files", "*.json")])
        if caminho_arquivo:
            try:
                self.atualizar_dados()
                with open(caminho_arquivo, 'w') as f:
                    json.dump(self.data, f, indent=4, ensure_ascii=False)
                messagebox.showinfo("Sucesso", "Arquivo salvo com sucesso!")
            except Exception as e:
                messagebox.showerror("Erro", f"Falha ao salvar o arquivo:\n{e}")

    def mostrar_dados(self):
        for widget in self.frame.winfo_children():
            widget.destroy()
        for i, (key, value) in enumerate(self.data.items()):
            ttk.Label(self.frame, text=key).grid(column=1, row=i, sticky=tk.W)
            entry = ttk.Entry(self.frame, width=25)
            entry.insert(0, value)
            entry.grid(column=2, row=i, sticky=(tk.W, tk.E))
            entry.columnconfigure(2, weight=1)
            self.data[key] = entry

    def atualizar_dados(self):
        for key, entry in self.data.items():
            self.data[key] = entry.get()

root = tk.Tk()
app = JsonEditor(root)
root.mainloop()
