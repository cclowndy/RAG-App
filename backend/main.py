from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import QueryRequest, QueryResponse
from rag_chain import get_rag_chain
from db import log_query

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
rag_chain = get_rag_chain()

@app.post("/ask", response_model=QueryResponse)
def ask(req: QueryRequest):
    answer = rag_chain.run(req.query)
    log_query(req.query, answer)
    return {"answer": answer}