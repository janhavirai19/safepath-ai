from fastapi import APIRouter
import random
router = APIRouter()
@router.post("/predict")
def predict(data: dict):
    crowd = random.choice([
        "Low Crowd",
        "Medium Crowd",
        "High Crowd"
    ])
    return {
        "crowd": crowd
    }