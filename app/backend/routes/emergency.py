from fastapi import APIRouter

router = APIRouter()

@router.post("/sos")
def sos(data: dict):
    return {
        "message":
            "Emergency alert sent successfully.",
        "location":
            data
    }