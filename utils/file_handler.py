import os

def save_file(file, folder="data/uploads"):
    os.makedirs(folder, exist_ok=True)
    file_path = os.path.join(folder, file.filename)
    file.save(file_path)
    return file_path
