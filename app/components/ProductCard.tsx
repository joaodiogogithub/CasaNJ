import Link from "next/link";
import Image from "next/image"
import { Produto, produtos } from "../lib/products"
import styles from "./Css/ProductsCard.module.css";

interface ProdutoCardProps {
  produto: Produto;
}

export default function ProdutoCard({
  produto,
}: ProdutoCardProps) {
  return (
    <Link
      href={`/products/${produto.id}`}
      className={styles.card}
    >

      <div className={styles.imageContainer}>

        <Image
          src={produto.imagem[0]}
          alt={produto.nome}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 300px"
          loading="eager"
        />

        {produto.desconto && produto.desconto > 0 && (
          <span className={styles.discountBadge}>
            {produto.desconto}% OFF
          </span>
        )}

        {produto.destaque && (
          <span className={styles.badge}>
            Destaque
          </span>
        )}

        <div className={styles.overlay}>
          <span>Ver produto →</span>
        </div>

      </div>

      <div className={styles.content}>

        <span className={styles.category}>
          {produto.categoria}
        </span>

        <h2>
          {produto.nome}
        </h2>

        {produto.promocao && produto.desconto && produto.desconto > 0 && (
          <div className={styles.priceContainer}>
            <s>{`R$ ${produto.preco.toFixed(2)}`}</s>

            <p>
              <b>{ifDiscountedPrice(produto.preco, produto.desconto)}</b>
            </p>
          </div>
        )}

        {!produto.promocao && (
          <p>
            <b>{`R$ ${produto.preco.toFixed(2)}`}</b>
          </p>
        )}

        <p className={styles.description}>
          {produto.descricao}
        </p>

      </div>

    </Link>
  );
}

export function ifDiscountedPrice(preco: number, desconto?: number): string {
  if (desconto && desconto > 0) {
    const discountedPrice = preco * (1 - desconto / 100);
    return `R$ ${discountedPrice.toFixed(2)}`;
  }
  return `R$ ${preco.toFixed(2)}`;
}
