from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime
router = APIRouter()

class SOSRequest(BaseModel):
    lat: float
    lng: float
@router.post("/sos")
def send_sos(data: SOSRequest):
    return {
        "status": "success",
        "message": "SOS alert activated",
        "location": {
            "lat": data.lat,
            "lng": data.lng
        },
        "time": datetime.now()
    }