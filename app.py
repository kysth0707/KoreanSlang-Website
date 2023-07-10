import os

Link = os.getcwd()
os.system(f"cd {Link}")
print(Link)
os.system('python -m http.server 8989')