from fastapi import APIRouter
from datetime import datetime
router = APIRouter()
@router.post("/score")
def safety_score(data: dict):
    score = 100
    hour = datetime.now().hour
    if hour >= 22 or hour <= 5:
        score -= 20
    weather = "clear"
    traffic = "medium"
    crowd = "low"
    if weather == "rain":
        score -= 10
    elif weather == "storm":
        score -= 20

    if traffic == "medium":
        score -= 5
    elif traffic == "high":
        score -= 10

    if crowd == "medium":
        score -= 8
    elif crowd == "high":
        score -= 15

    score = max(score, 0)

    if score >= 80:
        status = "Safe"
    elif score >= 50:
        status = "Moderate"
    else:
        status = "Risky"

    return {
        "score": score,
        "status": status,
        "hour": hour,
        "weather": weather,
        "traffic": traffic,
        "crowd": crowd
    }