from fastapi import APIRouter
router = APIRouter()

@router.post("/score")
def safety_score(data: dict):
    score = 85

    if data.get("hour", 12) >= 22:
        score -= 20

    return {
        "score": score,
        "status": "Safe" if score > 70 else "Risk"
    }