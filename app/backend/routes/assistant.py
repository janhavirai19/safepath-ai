from fastapi import APIRouter
router = APIRouter()
@router.post("/chat")
def chat():
    return {
        "reply": "How can I help you?"
    }