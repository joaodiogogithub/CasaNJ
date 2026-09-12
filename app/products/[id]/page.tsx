import Link from "next/link";
import Image from "next/image";
import { encontrarProduto } from "../../lib/products";
import styles from "./product.module.css";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { ifDiscountedPrice } from "@/app/components/ProductCard";
import ImageCarousel from "@/app/components/ImageCarousel";
import WhatsappButton from "@/app/components/WhatsappButton";


interface ProdutoPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProdutoPage({
  params,
}: ProdutoPageProps) {

  const { id } = await params;

  const produto = encontrarProduto(id);

  if (!produto) {
    return (
      <main className={styles.notFound}>
        <h1>Produto não encontrado</h1>

        <Link
          href="/products"
          className={styles.back}
        >
          ← 
        </Link>
      </main>
    );
  }

  return (
    <>
      <main className={styles.page}>

        <div className={styles.container}>

        <Navbar />

          <div className={styles.product}>

            {/* IMAGEM */}

            <div className={styles.imageContainer}>

             <ImageCarousel images={produto.imagem} alt={produto.nome} />

            </div>


            {/* INFORMAÇÕES */}

            <div className={styles.info}>

              <h1>
                {produto.nome}
              </h1>

              <div className={styles.description}>
                <p>{produto.descricao}</p>

                {produto.descricaoDetalhada && (
                  <details className={styles.details}>
                    <summary>Ver mais detalhes</summary>
                    <p>{produto.descricaoDetalhada}</p>
                  </details>
                )}
              </div>

              <div className={styles.divider} />

              {produto.modoDeUso && (
                <details className={styles.details}>
                  <summary>Modo de Uso</summary>
                  <ol>
                    {produto.modoDeUso.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </details>
              )}
                
              {produto.itensInclusos && (
                <div className={styles.includedItems}>
                  <h3>Itens Inclusos:</h3>
                  <ul>
                    {produto.itensInclusos.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.divider} />

              {produto.promocao && produto.desconto && produto.desconto > 0 && (
                <div className={styles.priceContainer}>
                  <s>{`R$ ${produto.preco.toFixed(2)}`}</s>

                  <p className={styles.price}>
                    <b>{ifDiscountedPrice(produto.preco, produto.desconto)}</b>
                  </p>
                </div>
              )}

              {!produto.promocao && (
                <p className={styles.price}>
                  <b>{`R$ ${produto.preco.toFixed(2)}`}</b>
                </p>
              )}

              <a
                href={produto.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={styles.buy}
              >
                Comprar agora
              </a>

            </div>

          </div>

        </div>
        
        <WhatsappButton/>
        
      </main>

      <Footer />
    </>
  );
}