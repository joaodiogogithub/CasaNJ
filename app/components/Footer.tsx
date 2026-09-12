import Link from "next/link";
import styles from "./Css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Logo / Sobre */}
        <div className={styles.brand}>
          <img src="/logo.png" alt="Logo" className={styles.logoImage} width={250} />
        </div>

        {/* Navegação */}
        <div className={styles.column}>
          <h3>Navegação</h3>

          <Link href="/">Início</Link>
          <Link href="/products">Kits</Link>
          <Link href="/about">Sobre Nós</Link>
        </div>

        {/* Atendimento */}
        <div className={styles.column}>
          <h3>Atendimento</h3>

          <p>Segunda a sexta</p>
          <p>08:00 às 20:00</p>

          <a href="mailto:contato@casanj.com.br">
            contato@casanj.com.br
          </a>
        </div>

        {/* Redes sociais */}
        <div className={styles.column}>
          <h3>Fale conosco</h3>

          <p>
            Tem alguma dúvida?
            Entre em contato conosco.
          </p>

          <a
            href="https://wa.me/5516991282357"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Casa NJ. Todos os direitos reservados.
        </p>

        <p>
          Desenvolvido por Call_J
        </p>
      </div>
    </footer>
  );
}