function Order({order}) {
    return (
        <>
            {!order.id ? <div className="alert alert-secondary text-center" role="alert">尚未建立訂單</div> : (
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>訂單</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">品項</th>
                                        <th scope="col">數量</th>
                                        <th scope="col">單價</th>
                                        <th scope="col">小計</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.cart.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.number}</td>
                                                <td>{item.price}</td>
                                                <td>{item.price * item.number}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            {order.description === '' ? <></> : <div className="text-end mb-2">備註: <span>{order.description}</span></div>}

                            <div className="text-end mb-4">
                                <h4>總計: <span>${order.sum}</span></h4>
                            </div>
                            <div className="text-end">
                                <h6>訂單編號: <span>{order.id}</span></h6>
                            </div>
                                    
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Order