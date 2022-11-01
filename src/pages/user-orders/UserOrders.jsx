import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./UserOrders.scss";

const UserOrders = () => {
    const loginStatus = useSelector((state) => state.user).logged;
    const navigate = useNavigate();
    const orders = useSelector((state) => state.orders).data;
    const auth = getAuth();
    const [email, setEmail] = useState();
    const [filteredOrders, setFilteredOrders] = useState([]);

    useEffect(() => {
        if (loginStatus === "false") navigate("/");
        else {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setEmail(user.email);
                }
            });
            setFilteredOrders(
                orders.filter((order) => {
                    return order.email === email;
                }),
            );
        }
    }, [auth, email, orders, navigate, loginStatus]);

    return (
        <section className="orders-container container">
            <h1 className="orders-header">Your orders</h1>
            <table>
                <tr>
                    <th>Order ID</th>
                    <th>Created At</th>
                    <th>Details</th>
                    <th>Total Price</th>
                    <th>Status</th>
                </tr>
                {filteredOrders !== [] ? (
                    filteredOrders.map((order, index) => {
                        return (
                            <tr key={index}>
                                <td>{order.id}</td>
                                <td>{order.createdAt}</td>
                                <td>
                                    {order.products.map((product, index) => {
                                        return (
                                            <div key={index}>
                                                <p>
                                                    {product.name} *{product.quantity}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </td>
                                <td>${order.totalPrice}</td>
                                <td style={{ color: "green" }}>Confirmed</td>
                            </tr>
                        );
                    })
                ) : (
                    <p>You don't have any orders.</p>
                )}
            </table>
        </section>
    );
};

export default UserOrders;
