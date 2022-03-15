from threading import Thread
import subprocess


def run_command(command):
    subprocess.call(command, shell=True)


backend = Thread(target=lambda: run_command(
    "python3 backend/manage.py runserver"))

frontend = Thread(target=lambda: run_command(
    "npm --prefix frontend start"))

backend.start()
frontend.start()

print('Running two servers simultaneously')
