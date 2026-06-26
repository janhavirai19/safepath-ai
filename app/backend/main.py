# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from routes import (
#     safety,
#     crowd,
#     navigation,
#     emergency,
#     assistant,
# )
# app = FastAPI(
#     title="SafePath AI",
#     description="AI-powered safety & navigation system",
#     version="1.0.0"
# )
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:3000",
#         "http://127.0.0.1:3000"
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# app.include_router(safety.router, prefix="/safety", tags=["Safety"])
# app.include_router(crowd.router, prefix="/crowd", tags=["Crowd"])
# app.include_router(navigation.router, prefix="/navigation", tags=["Navigation"])
# app.include_router(emergency.router, prefix="/emergency", tags=["Emergency"])
# app.include_router(assistant.router, prefix="/assistant", tags=["Assistant"])

# @app.get("/")
# def home():
#     return {
#         "status": "success",
#         "message": "🛡️ SafePath AI Backend Running Successfully",
#         "docs": "/docs"
#     }



from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import (
    safety,
    crowd,
    navigation,
    assistant,
    emergency
)

app = FastAPI(
    title="SafePath AI",
    description="AI-powered safety & navigation system",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
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
    assistant.router,
    prefix="/assistant",
    tags=["Assistant"]
)

app.include_router(
    emergency.router,
    prefix="/emergency",
    tags=["Emergency"]
)
@app.get("/")
def home():
    return {
        "status": "success",
        "message": "🛡️ SafePath AI Backend Running Successfully",
        "docs": "/docs"
    }


