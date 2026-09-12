"use client";
import Image from "next/image";
import VideoCarousel from "./components/VideoCarousel";
import Navbar from "./components/NavBar";
import { produtos } from "./lib/products";
import ProdutoCard from "./components/ProductCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import styles from "./components/Css/AboutUs.module.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const produtosDestaque = produtos.filter(
    (produto) => produto.destaque
  );
  
  return (
   <>
     <Navbar />

      <main>
        <section id="inicio">
          <VideoCarousel />
        </section>

        <section
        id="produtos"
        style={{
          maxWidth: "1200px",
          margin: "0px auto",
          padding: "0px 20px",
        }}
      >

        <h2 style={{ textAlign: "center" , color: "#9b7cf6", fontSize: "32px", fontWeight: "bold"   }}>
          Produtos em destaque
        </h2>

        <div
          style={{
            display: isMobile ? "block" : "flex",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "30px",
          }}
        >

          {produtosDestaque.map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
            />
          ))}

        </div>

        <section className={styles.aboutus}>
          <h1>Sobre Nós</h1>
          <p>Na Casa NJ, acreditamos que cuidar de si é muito mais do que uma rotina: é uma forma de expressar quem você é, valorizar sua beleza e elevar sua autoestima.<br/><br/>
             Por isso, trabalhamos para oferecer produtos que unem qualidade, inovação, praticidade e resultados, trazendo até você o melhor do universo de cuidados pessoais.</p>
        </section>

      </section>

      <WhatsappButton />
      
      <Footer />

        
      </main>
   </> 
  );
}
