import { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import Banner from './../Banner/Banner';
import Products from './../Products/Products'
import Cart from './../Cart/Cart'
import WishList from './../WishList/WishList'
import OrderSummary from './../OrderSummary/OrderSummary'
import OrderPlaced from './../OrderPlaced/OrderPlaced'


const Home = () => {
    const [searchedProduct, setSearchedProduct] = useState('')
    const [activePanel, setActivePanel] = useState(null)
    const [cart, setCart] = useState(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error('Invalid cart localStorage:', error);
            localStorage.removeItem('cart');
            return [];
        }
    });

    const [orderSummary, setOrderSummary] = useState(false)
    const [orderPlaced, setOrderPlaced] = useState(false)

    const [wishList, setWishList] = useState(() => {
        const storeWishList = localStorage.getItem('wishList')
        return storeWishList ? JSON.parse(storeWishList) : []
    })

    const handleScrolling = () => {
        const section = document.getElementById("product-section")
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    // Card & WishList Fn
    const handlePanel = (tabName) => {
        setActivePanel(previous => (
            previous === tabName ? null : tabName
        ))
    }

    // handlClosePanel button of Card & WishList 
    const handlClosePanel = () => setActivePanel(null)


    const addToCart = (product) => {
        const multiProductFind = cart.find(Item => Item.id === product.id)
        if (multiProductFind) {
            alert("this item already added")
            return;
        }
        setCart([...cart, { ...product, quantity: 1 }]);
        // setActivePanel(prev => prev === 'Cart' ? prev : 'Cart')
        setActivePanel('Cart');  // auto OPEN drawer when product adding 
    };

   
    // const removeItem = (product) => {
    //     setCart(cart.filter(Item => Item.id !== product.id))
    // }

    
    // Remove item from cart (or wishlist)
    const removeItem = (product) => {
        setWishList(prevCart => prevCart.filter(item => item.id !== product.id));
        setCart(prevCart => prevCart.filter(item => item.id !== product.id));
    };


    //  quantity increase
    const quantityIncrement = (product) => {
        setCart(cart.map((item) => (
            item.id === product.id ?
                { ...item, quantity: item.quantity + 1 } : item

        )))
    }

    // quantity decrease
    const quantityDecrease = (product) => {
        setCart(cart.map((item) => (
            item.id === product.id && item.quantity > 1 ?
                { ...item, quantity: item.quantity - 1 } : item
        )))
    }

    // SUMMARY  CALCULATE

    const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0)
    const shipingFee = totalItem * 2
    const totalSummary = subTotal + shipingFee



    // WishList Fn 
    const addToWishList = (product) => {

        const isInWishList = wishList.some(item => item.id === product.id)
        if (isInWishList) {
            setWishList(wishList.filter(item => item.id !== product.id))
        }
        else {
            const addDate = new Date().toLocaleDateString('en-GB')

            setWishList([...wishList, { ...product, addDate }])
        }
    }

    const clearWishList = () => {
        setWishList([])
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart)),
            localStorage.setItem('wishList', JSON.stringify(wishList))
    }, [cart, wishList])


    return (<>
        <Nav handleScrolling={handleScrolling}
            setSearchedProduct={setSearchedProduct}
            handlePanel={handlePanel}
            totalItem={totalItem}
            wishList={wishList}
        />

        <Banner />


        {/* Use item — the current product in the .map() iteration , Wrap in an arrow function () => addToCart(item) so that it passes the product on click */}
        <Products
            searchedProduct={searchedProduct}
            addToCart={addToCart}
            addToWishList={addToWishList}
            wishList={wishList}
        />


        <Cart activePanel={activePanel}
            handlClosePanel={handlClosePanel}
            cart={cart}
            removeItem={removeItem}
            quantityIncrement={quantityIncrement}
            quantityDecrease={quantityDecrease}
            subTotal={subTotal}
            totalItem={totalItem}
            shipingFee={shipingFee}
            totalSummary={totalSummary}
            setOrderSummary={setOrderSummary}
        />


        <WishList
            handlClosePanel={handlClosePanel}
            activePanel={activePanel}
            wishList={wishList}
            addToCart={addToCart}
            clearWishList={clearWishList}
            quantityIncrement={quantityIncrement}
            removeItem={removeItem}
        />



        {/* OrderSummary */}

        {orderSummary && <OrderSummary
            cart={cart}
            subTotal={subTotal}
            shipingFee={shipingFee}
            totalSummary={totalSummary}
            setOrderPlaced={setOrderPlaced}
            setOrderSummary={setOrderSummary}
            setCart={setCart}
        />
        }


        {
            orderPlaced && (
                <OrderPlaced setOrderPlaced={setOrderPlaced} />
            )}

    </>)
}

export default Home