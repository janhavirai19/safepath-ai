from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime
router = APIRouter()
class Location(BaseModel):
    lat: float
    lng: float
@router.post("/predict")
def predict(data: Location):
    hour = datetime.now().hour
    crowd = "Low"
    risk = 20
    if 8 <= hour <= 10 or 17 <= hour <= 21:
        crowd = "High"
        risk = 85
    elif 11 <= hour <= 16:
        crowd = "Medium"
        risk = 55
    return {
        "crowd": crowd,
        "risk": risk,
        "message": f"Predicted crowd level is {crowd}",
        "lat": data.lat,
        "lng": data.lng
    }