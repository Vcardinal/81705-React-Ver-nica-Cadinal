import "./CartWidget.css"

const CartWidget = () => {
  const imgcarrito =
    "https://i.pinimg.com/1200x/d4/d4/14/d4d414ac0ca069e3b3493e816198876e.jpg"

  return (
    <div>
      <img src={imgcarrito} alt="Imagen carrito" className="ImgCarrito" />
    </div>
  )
}

export default CartWidget



