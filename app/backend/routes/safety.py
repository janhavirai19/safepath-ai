from fastapi import APIRouter
router = APIRouter()
@router.get("/score")
def get_score():
    return {
        "score": 91,
        "status": "Safe"
    }