from fastapi.staticfiles import StaticFiles

from fastapi import FastAPI, WebSocket
from fastapi.concurrency import run_in_threadpool
import asyncio
from main import cpu, ram, disco

app = FastAPI()

@app.websocket("/ws/status")
async def status_ws(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = {
                "cpu": await run_in_threadpool(cpu),
                "ram": await run_in_threadpool(ram),
                "disco": await run_in_threadpool(disco)
            }
            await websocket.send_json(data)
            await asyncio.sleep(1)
    except Exception as e:
        print("Cliente desconectado:", e)
    finally:
        await websocket.close()


app.mount("/static", StaticFiles(directory="frontend"), name="static")
from fastapi.responses import FileResponse

@app.get("/")
def index():
    return FileResponse("frontend/index.html")
