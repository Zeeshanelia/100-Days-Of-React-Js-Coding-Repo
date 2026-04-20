# Simple Add to Cart App


Cart state is managed globally using Redux Toolkit. The cartSlice exposes an addToCart action that any component can dispatch. The ProductCard component dispatches this action directly on button click: dispatch(addToCart(product));

Product cards feature a clean white image panel with mix-blend-multiply for transparent product photos
Indigo accent color used consistently for prices and CTA buttons
Cards use hover:shadow-xl for subtle depth on interaction