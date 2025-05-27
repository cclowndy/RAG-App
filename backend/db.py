import psycopg2
import os

def log_query(question, answer):
    conn = psycopg2.connect(
        dbname = "ragdb",
        user = "raguser",
        password="ragpass",
        host="postgres",
        port=5432
    )
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO logs (question, answer) VALUES (%s, %s)",
        (question, answer)
    )
    conn.commit()
    conn.close()
    cur.close()