import { produtos } from "../lib/products";
import ProdutoCard from "../components/ProductCard";
import Navbar from "../components/NavBar";
import styles from "./products.module.css";
import WhatsappButton from "../components/WhatsappButton";
import Footer from "../components/Footer";

export default function PromotionsPage() {
  return (
  <>
    <main className={styles.page}>

      <Navbar/>

      <section className={styles.grid}>

        {produtos
          .filter((produto) => produto.promocao === true)
          .map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
            />
          ))}

      </section>

      <WhatsappButton/>

    </main>
    <Footer/>
  </>
  );
}