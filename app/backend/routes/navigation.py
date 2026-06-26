# from fastapi import APIRouter
# router = APIRouter()
# @router.get("/route")
# def route():
#     return {
#         "route": "Safer Route Found",
#         "distance": "4.2 km"
#     }

from fastapi import APIRouter

router = APIRouter()

@router.get("/route")
def route():
    return {
        "route": "Safer route found",
        "distance": "4.2 km",
        "time": "12 mins"
    }