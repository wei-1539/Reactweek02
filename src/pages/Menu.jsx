function Menu({ drinkMenu, addToCart }) {
    return (
        <>
            {/* 將data的資料印出 S*/}
            <div className="list-group">
                {drinkMenu.map(item => {
                    return (
                        <a href="#" className="list-group-item list-group-item-action" key={item.id} onClick={(e) => {
                            e.preventDefault()
                            addToCart(item)
                        }}>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{item.name}</h5>
                                <small>${item.price}</small>
                            </div>
                            <p className="mb-1">{item.description}</p>
                        </a>
                    )
                })}
            </div>
            {/* 將data的資料印出 E*/}
        </>
    )
}
export default Menu