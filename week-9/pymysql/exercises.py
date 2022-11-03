
import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)
#### ex1 :

# try:
#     with connection.cursor() as cursor:
#         query = "CREATE TABLE categories( \
#                                 name VARCHAR(20) PRIMARY KEY \
#                                         )"
#         cursor.execute(query)
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = "CREATE TABLE products( \
#                                 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
#                                 name VARCHAR(20), \
#                                 category VARCHAR(20), \
#                                 FOREIGN KEY(category) REFERENCES categories(name) \
#                                       )"
#         cursor.execute(query)
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = "INSERT into categories (name) values ('Fruites'), \
#                                                       ('Veg')"
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = "INSERT into products values(null,'Apple','Fruites')"
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# ex2:

# try:
#     with connection.cursor() as cursor:
#         query = "SELECT *  \
#                 FROM products p \
#                 WHERE p.category = 'Fruites'"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)

# except:
#     print("Error")

# ex3:

# try:
#     with connection.cursor() as cursor:
#         query = "SELECT *  \
#                 FROM products p \
#                 WHERE p.id = 1"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)

# except:
#     print("Error")
