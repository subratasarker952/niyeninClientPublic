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
            <td className="text-center"><p>{date.split('T')[0]}</p></td>
            <td className="text-center"><p>{amount}/=</p></td>
            <th className="text-center">
                <button className="btn btn-sm text-white bg-purple-500">  {products.length} Products</button>
            </th>
            <td className="text-center">{orderStatus}</td>
            <td className="text-center">{paymentMethod}</td>
            <th className="text-center">
                {!orderStatus &&
                    <div className="flex">
                        <button onClick={() => handleCashOnDelivery(_id)} className="btn flex-1 btn-sm text-white bg-purple-500">Hand Cash</button>
                        <button onClick={() => handleSslCommerz(_id)} className="btn flex-1 btn-sm text-white bg-purple-500">Pay Now</button>
                    </div>
                }
            </th>
        </tr>
    );
};

export default ClientOrdersRow;