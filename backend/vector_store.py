from langchain.vectorstores import Milvus
from langchain.embeddings import OpenAIEmbeddings

def get_vector_store():
    return Milvus(
        embedding_function=OpenAIEmbeddings(),
        collection_name="rag_docs",
        connection_args={"host": "milvus", "port": "19530"}
    )
