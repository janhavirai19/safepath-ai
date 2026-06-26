from fastapi import APIRouter
import random
router = APIRouter()
@router.get("/predict")
def predict():
    crowd = random.randint(10, 100)

    return {
        "crowd_percentage": crowd,
        "status":
            "High Crowd" if crowd > 70
            else "Moderate Crowd" if crowd > 40
            else "Low Crowd"
    }