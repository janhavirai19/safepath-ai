from fastapi import APIRouter
router = APIRouter()

@router.post("/chat")
def chat(data: dict):
    message = data.get("message", "")

    return {
        "reply":
            f"AI Assistant: I received your message '{message}'"
    }