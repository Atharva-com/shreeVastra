import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'


export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState('')
  const [progress, setProgress] = useState(0)
  
  const router = useRouter()

  useEffect(() => {

    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })

    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
        let subt = 0
        let keys = (Object.values(JSON.parse(localStorage.getItem("cart"))))
        let obj = Object.values(Object.values(JSON.parse(localStorage.getItem("cart"))))
        for (let i = 0; i < keys.length; i++) {
          subt += obj[i].Price * obj[i].qty

        }
        setSubTotal(subt)
      }
    } catch (error) {
      // alert("hello")
      // localStorage.clear()
    }

    const myUser = JSON.parse(localStorage.getItem('myUser'))
    if (myUser) {
      setUser({ value: myUser.token, email: myUser.email })
    }
    setKey(Math.random())
  }, [router.query])

  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart))
    let subt = 0
    let keys = Object.keys(newCart)
    for (let i = 0; i < keys.length; i++) {
      subt += newCart[keys[i]].Price * newCart[keys[i]].qty
    }
    setSubTotal(subt)
    setCart(newCart)
  }

  const addToCart = (itemCode, qty, Price, name, size, variant) => {
    if (Object.keys(cart).length == 0) {
      setKey(Math.random())
    }
    if (localStorage.getItem('myUser')) {
      const myCart = cart;
      if (itemCode in cart) {
        myCart[itemCode].qty = cart[itemCode].qty + qty
      }
      else {
        myCart[itemCode] = { qty: 1, Price, name, size, variant }
      }
      setCart(myCart)
      toast.success("Item has been added to the Cart.", { autoClose: 1000 })
      saveCart(myCart)
    }
    else {
      toast.error("Oops!! Login to your Account First.", { autoclose: 1000 })
      router.push('/login')
    }

  }

  const removeFromCart = (itemCode, qty, Price, name, size, variant) => {
    if (localStorage.getItem('myUser')) {
      const myCart = cart;
      if (itemCode in cart) {
        myCart[itemCode].qty = cart[itemCode].qty - qty
      }
      if (myCart[itemCode].qty <= 0) {
        delete myCart[itemCode]
      }
      toast.success("Item has been removed from the Cart .", { autoClose: 1000 })
      setCart(myCart)
      saveCart(myCart)
    }
    else {
      toast.error("Oops!! Login to your Account First.", { autoclose: 1000 })
      router.push('/login')
    }
  }

  const clearCart = () => {
    if (localStorage.getItem('myUser')) {
      setCart({})
      saveCart({})
      toast.success("Cart has been cleared !!", { autoclose: 1000 })
    } else {
      toast.error("Oops!! Login to your Account First.", { autoclose: 1000 })
    }
  }

  const buyNow = (itemCode, qty, Price, name, size, variant) => {

    if (localStorage.getItem('myUser')) {
      const myCart = {}
      myCart[itemCode] = { qty, Price, name, size, variant }
      setCart(myCart)
      saveCart(myCart)
      router.push('/orders')
    }
    else {
      toast.error("Oops!! Login to your Account First.", { autoclose: 1000 })
      router.push('/login')
    }
  }

  const logout = () => {
    localStorage.removeItem("myUser")
    saveCart({})
    localStorage.removeItem("cart")
    setUser({ value: null })
    setKey(Math.random())
    toast.success("You have been loged Out Successfully ! Login to access your account", { autoClose: 1000 })
    router.push('/')


  }


  return (

    <div className='bg-gray-900'>
      <LoadingBar
        color='#f11946'
        progress={progress}
        loaderSpeed={800}
        waitingTime={500}
        ClassName='shadow-5xl shadow-red-400'
        onLoaderFinished={() => setProgress(0)}
      />
      {key && <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />}
      <ToastContainer theme='dark' autoClose='1500' />

      <Component user={user} cart={cart} addToCart={addToCart} buyNow={buyNow} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />

      <Footer logout={logout} />
    </div>
  )
}
