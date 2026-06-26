import random
from datetime import datetime
def calculate_safety_score(lat, lng):
    score = 90
    hour = datetime.now().hour
    if hour >= 22 or hour <= 5:
        score -= 30
    score -= random.randint(0, 15)
    risk = (
        "Safe"
        if score > 70
        else "Moderate"
        if score > 40
        else "High"
    )
    return {
        "score": score,
        "risk": risk
    }