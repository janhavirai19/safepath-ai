from fastapi import FastAPI
from routes import (
    safety,
    crowd,
    navigation,
    emergency,
    assistant,
)

app = FastAPI(title="SafePath AI")

app.include_router(
    safety.router,
    prefix="/safety",
    tags=["Safety"]
)

app.include_router(
    crowd.router,
    prefix="/crowd",
    tags=["Crowd"]
)

app.include_router(
    navigation.router,
    prefix="/navigation",
    tags=["Navigation"]
)

app.include_router(
    emergency.router,
    prefix="/emergency",
    tags=["Emergency"]
)

app.include_router(
    assistant.router,
    prefix="/assistant",
    tags=["Assistant"]
)

@app.get("/")
def home():
    return {
        "message": "SafePath AI Backend Running"
    }