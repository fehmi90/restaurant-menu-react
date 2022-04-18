import React from "react";
import Item from "../components/Item";
import '../App.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

function Menu() {

    return(
        <div className="container">
            <h1>Pizza</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis ultrices ullamcorper. Cras pretium, leo nec vehicula fringilla, mauris sapien porta tellus, nec rutrum risus dui eu turpis. Aliquam viverra ipsum ut convallis tristique. Praesent sit amet ipsum et dolor egestas consequat id quis odio. Sed a consectetur lectus, sit amet placerat ante. Donec velit velit, pharetra vitae fringilla sed, malesuada iaculis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque in eros iaculis,
                 finibus tellus vel, lobortis odio. Suspendisse sit amet sollicitudin orci.</p>

                 <Item name="pizza Calzone" desc="Cup fresh ricotta, parmesan, chopped basil, pepper, tomato sauce, fresh mozzarella" price={5} img={slide1}></Item>
                 <Item name="pizza Hawaii" desc="Pineapple, mushrooms, black olives, tomato sauce" price={5.50} img={slide3}></Item>
                 <Item name="Pizza Neapolitan" 
                  desc="Tomato, oregano, garlic, extra virgin olive oil, pepperoni, cheese, red onion, sauce, mushrooms"

                  price={6.20}
                  img={slide2}
                  
                  ></Item>
        </div>


    );




}


export default Menu;