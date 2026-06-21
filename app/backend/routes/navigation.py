from fastapi import APIRouter
router = APIRouter()
@router.get("/route")
def route():
    return {
        "route": "Safer Route Found",
        "distance": "4.2 km"
    }