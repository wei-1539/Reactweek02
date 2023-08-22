function Cart({cart,setCart,upDateCart,setDescription,creatOrder,sum}) {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" width="50">操作</th>
                        <th scope="col">品項</th>
                        <th scope="col">描述</th>
                        <th scope="col" width="90">數量</th>
                        <th scope="col">單價</th>
                        <th scope="col">小計</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (

                            <tr key={item.id}>
                                <td><button type="button" className="btn btn-sm"
                                    onClick={() => {
                                        const newCart = cart.filter(cartItem => {
                                            return cartItem.id !== item.id
                                        })
                                        //刪除相同的菜單，保留其餘的
                                        // 回傳給 Cart的資料集內
                                        setCart(newCart)
                                    }}
                                >x</button></td>
                                <td>{item.name}</td>
                                <td><small>{item.description}</small></td>
                                <td>
                                    <select className="form-select" value={item.number} onChange={(e) => {
                                        const value = e.target.value;
                                        upDateCart(item, value)
                                        console.log(cart)
                                    }}>
                                        {/* 做選單 */}
                                        {[...Array(10).keys()].map((optionItem) => {
                                            return (
                                                <option value={optionItem + 1} key={optionItem}>{optionItem + 1}</option>
                                            )
                                        })}

                                    </select>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.price * item.number}</td>
                            </tr>
                        )
                    })
                    }
                    {/* 將加入cart的內容印出來  E*/}
                </tbody>
            </table>
            {cart.length === 0 ? <div className="alert alert-primary text-center" role="alert">請選擇商品</div> : (
                <>
                    <div className="text-end mb-3">
                        <h5>總計: <span>${sum}</span></h5>
                    </div>
                    <textarea className="form-control mb-3" rows="3" placeholder="備註" onChange={(e) => {
                        setDescription(e.target.value)
                    }}></textarea>
                    <div className="text-end">
                        <button className="btn btn-primary" onClick={(e) => {
                            e.preventDefault()
                            creatOrder()
                        }}>送出</button>
                    </div>
                </>
            )}
        </>
    )
}

export default Cart