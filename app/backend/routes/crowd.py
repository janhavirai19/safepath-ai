from fastapi import APIRouter

router = APIRouter()

@router.get("/predict")
def predict():
    return {
        "crowd": "Medium",
        "probability": 76
    }