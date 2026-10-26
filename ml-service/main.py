from datetime import datetime

from fastapi import FastAPI


app = FastAPI(
    title="AgroNexus AI Engine",
    description="Machine learning service for agricultural intelligence",
    version="1.0.0",
)


@app.get("/health")
def health_check():
    return {
        "success": True,
        "service": "AgroNexus ML Engine",
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
    }