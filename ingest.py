from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Milvus
from pymilvus import connections

connections.connect(alias="default", host="localhost", port="19530")
loader = TextLoader("")
docs = loader.load()
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
documents = text_splitter.split_documents(docs)
vectorstore = Milvus.from_documents(documents,
                                    embedding=OpenAIEmbeddings(),
                                    collection_name="rag_docs",
                                    connection_arg={"host": "localhost", "port": "19530"}
                                    )


