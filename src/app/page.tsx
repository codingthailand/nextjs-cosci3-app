'use client'

import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import AppProductCard from "./components/app-product-card";

export default function Home() {

  return (
    <div>
      <AppHeader />
      Home Page
      <AppProductCard 
        name="Coke" 
        price={20} 
        stock={100} 
        onAddToCart={ (name) => alert(`เพิ่ม ${name} ในตะกร้าแล้ว`) }
      />
      <AppProductCard 
        name="Pepsi" 
        price={30} 
        stock={200}
        onAddToCart={ (name) => alert(`เพิ่ม ${name} ในตะกร้าแล้ว`)}
      />
      <AppFooter />
    </div>
  );
}
