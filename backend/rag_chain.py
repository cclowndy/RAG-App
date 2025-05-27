from langchain.chains.retrieval_qa.base import RetrievalQA
from langchain.chat_models import ChatOpenAI
from vector_store import get_vector_store


def get_rag_chain():
    vectorstore = get_vector_store()
    retriever = vectorstore.as_retriever(search_type="similarity", k=3)
    llm = ChatOpenAI(temperature=0.2, model="gpt-4o-mini")
    return RetrievalQA.from_chain_type(llm=llm, retriever=retriever)