from flask import Flask, request, abort, url_for, redirect, render_template
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from order_model import Base, Order


app = Flask(__name__)

engine = create_engine("sqlite:///mydb.db", echo=True)
Base.metadata.create_all(bind=engine)
Session = sessionmaker(bind=engine)
session = Session()
order_count = 0

@app.route("/", methods = ['GET'])
def default():
    return render_template("MainMenu.html")

@app.route("/submit", methods = ['GET','POST'])
def submit():
    if request.method == 'POST':
        global customerName 
        customerName= request.form["customer_name"]
        global thisOrder
        thisOrder = request.form["order_text"]
        newName = Order(customer_name = customerName, orders = thisOrder, order_number = 1)
        try:
            session.add(newName)
            session.commit()
            return redirect(url_for("order_summary"))
        except:
           return "There was an issue adding your task"
    else:
       names = session.query(Order).order_by(Order.date_created).all()
       return render_template("MainMenu.html", names = names)

@app.route("/order_summary", methods = ['POST', 'GET'])
def order_summary():
    food = thisOrder.split('\n')
    global order_count
    order_count += 1
    return render_template("orderSummary.html", name = customerName, order = food, num = order_count - 1 )

@app.route("/kitchen", methods = ['POST', 'GET'])
def kitchen():
    data = session.query(Order).all()
    json_orders = [order.toJSON() for order in data]
    return render_template("kitchen.html", database = json_orders, item_list = json_orders)

@app.route("/delete/<int:id>")
def delete(id):
    order_to_delete = session.query(Order).get(id)
    if order_to_delete is None:
        abort(404)
    try:
        session.delete(order_to_delete)
        session.commit()
        return redirect("/kitchen")
    except:
        return "Could not delete task"

app.secret_key = "We here"
if __name__ == "__main__":
    app.run(debug=True)