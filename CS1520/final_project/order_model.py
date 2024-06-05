from sqlalchemy import Column, String, Integer, Date
from sqlalchemy.orm import declarative_base
import datetime as dt

Base = declarative_base()

class Order(Base):
    __tablename__ = "Orders"

    id = Column("id", Integer, primary_key=True, autoincrement=True)
    customer_name = Column("customer name", String, nullable=False)
    orders = Column("orders", String, nullable=False)
    order_number = Column("order_number", Integer, nullable=False)
    date_created = Column("date_created", Date, nullable=False, default=dt.datetime.utcnow)

    def __int__(self, id, customer_name, orders, order_number, date_created):
            self.id = id
            self.customer_name = customer_name
            self.orders = orders
            self.order_number = order_number
            self.date_created = date_created


    def __repr__(self):
            return f"({self.id} {self.customer_name} {self.orders} {self.order_number} {self.date_created})"
    
    def toJSON(self):
        return {"id":self.id,
                "customer_name": self.customer_name,
                "orders" : self.orders,
                "order_number" : self.order_number,
                "date_created" : self.date_created}