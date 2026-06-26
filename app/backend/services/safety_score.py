from fastapi import APIRouter
from services.safety_score import calculate_safety_score

router = APIRouter()
@router.post("/score")
def get_score(data: dict):
    return calculate_safety_score(
        data["latitude"],
        data["longitude"]
    )