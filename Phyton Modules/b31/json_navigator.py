import tkinter as tk
from tkinter import ttk

class JsonNavigator:
    def __init__(self, root):
        self.root = root

        # Create Treeview widget to navigate JSON
        self.tree_frame = tk.Frame(self.root)
        self.tree_frame.grid(row=2, column=0, rowspan=1, columnspan=2, padx=10, pady=10, sticky="nsew")

        self.tree = ttk.Treeview(self.tree_frame)
        self.tree.pack(fill=tk.BOTH, expand=True)

        # Bind tree selection
        self.tree.bind('<<TreeviewSelect>>', self.on_tree_select)

        # Create entry boxes for editing fields and values
        self.edit_frame = tk.Frame(self.root)
        self.edit_frame.grid(row=2, column=2, rowspan=1, columnspan=2, padx=10, pady=10, sticky="nsew")

        self.fields = []
        self.values = []

    def load_json_tree(self, data, parent=""):
        for key, value in data.items():
            node_id = self.tree.insert(parent, "end", text=key, open=True)
            if isinstance(value, dict):
                self.load_json_tree(value, node_id)
            elif isinstance(value, list):
                for index, item in enumerate(value):
                    item_id = self.tree.insert(node_id, "end", text=f"[{index}]", open=True)
                    if isinstance(item, dict):
                        self.load_json_tree(item, item_id)
                    else:
                        self.tree.insert(item_id, "end", text=str(item), open=True)
            else:
                self.tree.insert(node_id, "end", text=str(value), open=True)

    def on_tree_select(self, event):
        selected_item = self.tree.selection()[0]
        item_text = self.tree.item(selected_item, "text")

        # Clear previous entries
        for widget in self.edit_frame.winfo_children():
            widget.destroy()

        # Create new entries for fields and values
        field_label = tk.Label(self.edit_frame, text="Field:")
        field_label.grid(row=0, column=0, padx=5, pady=5)
        value_label = tk.Label(self.edit_frame, text="Value:")
        value_label.grid(row=0, column=1, padx=5, pady=5)

        field_entry = tk.Entry(self.edit_frame)
        field_entry.grid(row=1, column=0, padx=5, pady=5)
        field_entry.insert(0, item_text)

        value_entry = tk.Entry(self.edit_frame)
        value_entry.grid(row=1, column=1, padx=5, pady=5)
        # Assuming value is stored in the tags of the node
        value = self.tree.item(selected_item, "values")
        if value:
            value_entry.insert(0, value[0])

        self.fields.append(field_entry)
        self.values.append(value_entry)
