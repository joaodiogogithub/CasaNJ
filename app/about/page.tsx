'use client'

import { produtos } from "../lib/products";
import ProdutoCard from "../components/ProductCard";
import style from "./AboutUs.module.css";
import Navbar from "../components/NavBar";
import WhatsappButton from "../components/WhatsappButton";
import Footer from "../components/Footer";

export default function ProdutosPage() {

  return (
    <main>
      <Navbar />

      <section className={style.aboutus}>
        <div className={style.content}>
          <div>
            <h1>Na Casa NJ, cuidamos de você!</h1>
            <p>
              Na Casa NJ, acreditamos que cuidar de si é muito mais do que uma rotina: é uma forma de expressar quem você é, valorizar sua beleza e elevar sua autoestima. Por isso, trabalhamos para oferecer produtos que unem qualidade, inovação, praticidade e resultados, trazendo até você o melhor do universo de cuidados pessoais.<br /><br />
              Nossa missão é aproximar nossos clientes de produtos que fazem parte de uma rotina de cuidados completa, proporcionando uma experiência de compra segura, prática e satisfatória.
              Na Casa NJ, cada produto é escolhido pensando em você. <br /><br />
              Buscamos oferecer opções que atendam diferentes necessidades, estilos e rotinas, sempre prezando pela qualidade, procedência e confiança. Mais do que vender produtos, queremos construir uma relação duradoura com nossos clientes, baseada em transparência, respeito e excelência no atendimento.
            </p>
          </div>

          {/* <img 
            src="/assets/castelo-linhas.png" 
            alt="Sobre Nós" 
          /> */}

        </div>
      </section>
      <Footer/>
    </main>

  );
}