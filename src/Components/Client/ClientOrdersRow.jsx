import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ClientOrdersRow = ({ order, refetchOrders }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { _id, ...others } = order
    const { date, amount, products, paymentMethod, orderStatus } = others
    const handleCashOnDelivery = (id) => {
        const newOrder = {
            ...others,
            paymentMethod: 'cash on delivery',
            paymentStatus: 'due',
            orderStatus: 'processing',
        }

        axiosSecure.patch(`/orders/${id}?email=${user?.email}`, newOrder)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetchOrders()
                }
            })
    }
    const handleSslCommerz = (id) => {
        const newOrder = {
            ...others,
            paymentMethod: 'online',
            paymentStatus: 'due',
            orderStatus: 'processing',
        }
        axiosSecure.patch(`/sslPayment/${id}?email=${user?.email}`, newOrder)
            .then(res => {
                window.location.replace(res.data.url)

                // if (res.data.modifiedCount) {
                //     refetchOrders()
                // }
            })
    }

    return (
        <tr>
            <td><p>{date.split('T')[0]}</p></td>
            <td><p>{amount}/=</p></td>
            <th>
                <button className="btn btn-sm text-white bg-purple-500">  {products.length} Products</button>
            </th>
            <td>{orderStatus}</td>
            <td>{paymentMethod}</td>
            <th>
                {!orderStatus &&
                    <div>
                        <button onClick={() => handleCashOnDelivery(_id)} className="btn btn-sm text-white bg-purple-500">Cash On delivery</button>
                        <button onClick={() => handleSslCommerz(_id)} className="btn btn-sm text-white bg-purple-500">Pay Now</button>
                    </div>
                }
            </th>
        </tr>
    );
};

export default ClientOrdersRow;