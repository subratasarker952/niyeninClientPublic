import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../../../Components/hooks/useAuth'
import useAxiosSecure from '../../../Components/hooks/useAxiosSecure'
import useRole from '../../../Components/hooks/useRole'
import useCart from '../../../Components/Context/CartProvider/useCart'

const ShippingAddress = () => {
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const { order, setOrder, setCart } = useCart()
    const { user } = useAuth()
    const { userWithRole } = useRole()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const phone = form.phone.value
        const country = form.country.value
        const zilla = form.zilla.value
        const village = form.village.value
        const upoZilla = form.upoZilla.value
        const postcode = form.postcode.value
        const currency = form.currency.value
        const street = form.street.value

        const shippingAddress = {
            name, email: user?.email, phone, country, village, zilla, upoZilla, street, postcode, currency
        }

        if (order?.products && user && phone && country && village && zilla && upoZilla && street && currency && postcode) {
            const newOrder = { ...order, ...shippingAddress }
            axiosSecure.post(`/orders?email=${user?.email}`, newOrder)
                .then((res) => {
                    // window.location.replace(res.data.url)
                    if (res.data.insertedId) {
                        setCart([])
                        setOrder({})
                        navigate('/user/orders')
                        axiosSecure.put(`/user?email=${user?.email}`, shippingAddress)
                            .then(() => {
                                Swal.fire({
                                    title: "Good Job!",
                                    text: "Address update And Order Submit Successfully!",
                                    icon: "success"
                                });
                            })
                    }
                })
        }
        else {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Add an item and provide shipping address",
                footer: `<a className='btn' href='/shop'>Continue shopping</a>`
            });

        }

    }
    return (
        <div className='flex justify-center items-center mx-4 gap-4'>
            <div className='w-5/12'>
                <h2 className='text-3xl'> Your Order Summary</h2>
                <hr className='border-red-500 my-4' />
                <div className='text-left ml-14'>
                    <p className='text-2xl'>Total Product :- {order?.products?.length}</p>
                    <p className='text-2xl'>Total Amount :- {order?.amount}</p>
                </div>
            </div>
            <div className='w-7/12'>
                <div className='w-full bg-white my-8 shadow-lg '>
                    <p className='text-3xl my-4'>Shipping Address</p>

                    <form onSubmit={handleSubmit} className='bg-white, p-3 my-9 border'>
                        <div className='flex  text-left gap-3'>
                            <div className='flex-1 '>
                                <div className="border-b pb-12">
                                    <div className="">
                                        <div className="w-full">
                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Your Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    autoComplete="off"
                                                    required
                                                    defaultValue={user?.displayName}
                                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full mt-6">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 my-2">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    readOnly
                                                    required
                                                    defaultValue={user?.email}
                                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                                Phone Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="text"
                                                    required
                                                    defaultValue={userWithRole?.address?.phone}
                                                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3 mt-4">
                                            <label htmlFor="currency" className="block text-sm font-medium leading-6 text-gray-900">
                                                currency
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    id="currency"
                                                    name="currency"
                                                    autoComplete="currency-name"
                                                    className="w-full p-2 border"
                                                >
                                                    <option defaultValue={userWithRole?.address?.country}>BDT</option>
                                                    {/* <option value="us">  United States</option>
                                            <option value="canada">  Canada</option>
                                            <option value="mexico">  Mexico</option> */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 flex flex-col gap-4'>
                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Country
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="w-full p-2 border"
                                        >
                                            <option defaultValue={userWithRole?.address?.country}>Bangladesh</option>
                                            {/* <option value="us">  United States</option>
                                            <option value="canada">  Canada</option>
                                            <option value="mexico">  Mexico</option> */}
                                        </select>
                                    </div>
                                </div>


                                <div className='flex justify-between mt-1'>
                                    <div className="flex-1">
                                        <label htmlFor="Zilla" className="block text-sm font-medium leading-6 text-gray-900">
                                            Zilla
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="zilla"
                                                id="Zilla"
                                                defaultValue={userWithRole?.address?.zilla}

                                                autoComplete="address-level2"
                                                className="block w-full p-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                            UpoZilla
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="upoZilla"
                                                id="region"
                                                defaultValue={userWithRole?.address?.upoZilla}

                                                autoComplete="address-level1"
                                                className="block w-full p-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <label htmlFor="village" className="block text-sm font-medium leading-6 text-gray-900">
                                            Village
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"

                                                name="village"
                                                defaultValue={userWithRole?.address?.village}
                                                id="village"
                                                autoComplete="postal-code"
                                                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between mt-1'>
                                    <div className="flex-1">
                                        <label htmlFor="postcode" className="block text-sm font-medium leading-6 text-gray-900">
                                            postcode
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="postcode"
                                                id="postcode"
                                                defaultValue={userWithRole?.address?.postcode}

                                                autoComplete="address-level2"
                                                className="block w-full p-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="flex-1">
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                            UpoZilla
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="upoZilla"
                                                id="region"
                                                defaultValue={userWithRole?.address?.upoZilla}

                                                autoComplete="address-level1"
                                                className="block w-full p-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <label htmlFor="village" className="block text-sm font-medium leading-6 text-gray-900">
                                            Village
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"

                                                name="village"
                                                defaultValue={userWithRole?.address?.village}
                                                id="village"
                                                autoComplete="postal-code"
                                                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                                            />
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-span-full mt-1">
                                    <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="street"
                                            id="street"
                                            defaultValue={userWithRole?.address?.street}

                                            autoComplete="street-address"
                                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>


                            </div>

                        </div>
                        <input className='w-full bg-pink-500 p-2 text-white' type="submit" value="Palce Order" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ShippingAddress