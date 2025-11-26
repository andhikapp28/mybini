import os
from PIL import Image

folder = "src/img/waifu"  # folder saat ini

for filename in os.listdir(folder):
    if filename.lower().endswith((".webp", ".png", ".jpeg")):
        input_path = os.path.join(folder, filename)
        
        new_path = os.path.splitext(input_path)[0] + ".jpg"
        
        img = Image.open(input_path).convert("RGB")
        img.save(new_path, "JPEG", quality=95)

        os.remove(input_path)  # hapus file lama
        
        print(f"Replaced: {filename} → {os.path.basename(new_path)}")
