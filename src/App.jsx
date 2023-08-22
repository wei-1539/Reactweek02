import 'bootstrap/scss/bootstrap.scss'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Order from './pages/Order'
const data = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60
  }
]


function App() {
  // 打資料加入
  const [drinkMenu] = useState(data)
  // 購物車資料
  const [cart, setCart] = useState([])
  // 總金額
  const [sum, setSum] = useState(0)
  // 備註內容
  const [description, setDescription] = useState('')
  // 訂單成立
  const [order, setOrder] = useState({})

  // 點擊加入購物車
  const addToCart = (drink) => {
    const conformIndex = cart.findIndex((cartItem) => drink.id === cartItem.id);

    if (conformIndex === -1) {
      // -1 表示購物車還沒有這個品項
      const tempCart = [
        ...cart, // [] 淺拷貝
        {
          ...drink,
          number: 1, // 數量預設為 1
        },
      ];
      setCart(tempCart);
    } else {
      const tempCart = cart.map((cartItem) => {
        return drink.id === cartItem.id
          ? {
            ...cartItem,
            number: cartItem.number < 10 ? cartItem.number + 1 : cartItem.number,
          }
          : { ...cartItem };
      });
      setCart(tempCart);
    }
    // const repeatCart =[...cart, {
    //   ...drink,
    //   id: new Date().getTime(),
    //   number: 1,
    //   // sumTotal: drink.price,
    // }]
    // setCart(repeatCart)

  }
  // 更新cart內的數量改變【小計金額】
  const upDateCart = (item, value) => {
    const upCart = cart.map((cartItem) => {
      if (item.id === cartItem.id) {
        return {
          ...cartItem,
          number: parseInt(value),
          // sumTotal: cartItem.price * parseInt(value),
        }
      }
      return cartItem
    })
    setCart(upCart)
  }

  // 送出訂單
  const creatOrder = () => {
    setOrder({
      id: new Date().getTime(),
      cart,
      description,
      sum,
    })

    setCart([])
    setSum(0)
  }

  // 計算總金額，隨著後續更改一起變動【已加入購物車的數量變更】
  useEffect(() => {
    const newTotal = cart.reduce((pre, next) => {
      return pre + (next.price * next.number)
    }, 0)
    setSum(newTotal)
  }, [cart])
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Menu drinkMenu={drinkMenu} addToCart={addToCart} />
          </div>
          <div className="col-md-8">
            <Cart cart={cart} setCart={setCart} upDateCart={upDateCart} setDescription={setDescription} creatOrder={creatOrder} sum={sum} />
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="col-8">
            <Order order={order}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
