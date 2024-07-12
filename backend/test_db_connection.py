import psycopg2

try:
    connection = psycopg2.connect(
        dbname="ecommerce_db",
        user="ecommerce_user",
        password="C@ed3732",
        host="localhost",
        port="5432"
    )
    print("Connection successful")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    if connection:
        connection.close()
