import ClientOrdersRow from "../../../Components/Client/ClientOrdersRow";
import Loading from "../../../Components/Shared/Loading/Loading";
import useOrders from "../../../Components/hooks/useOrders";

const ClientOrders = () => {
    const { ordersLoading, orders, refetchOrders } = useOrders()
    if (ordersLoading) return <Loading></Loading>
    if (orders.length == 0) {
        return <span> You have 0 order</span>
    }
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Products</th>
                                <th>Order Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                orders.map((order) => <ClientOrdersRow
                                    key={order._id}
                                    order={order}
                                    refetchOrders= {refetchOrders}
                                ></ClientOrdersRow>)
                            }
                        </tbody>
                    </table>
                </div >
            </div>
        </div>
    );
};

export default ClientOrders;