from fastapi import APIRouter
router = APIRouter()
@router.post("/sos")
def sos():
    return {
        "message": "SOS Alert Sent"
    }