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
                                <th className="text-center font-bold">Date</th>
                                <th className="text-center font-bold">Amount</th>
                                <th className="text-center font-bold">Products</th>
                                <th className="text-center font-bold">Order Status</th>
                                <th className="text-center font-bold">Action</th>
                                <th className="text-center font-bold">Payment Option</th>
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