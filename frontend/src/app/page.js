import Image from "next/image";
import styles from "./page.module.css";
import TopNav from "./components/TopNav/TopNav.js";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

export default function Home() {

  return (
    <>
      <header className={styles.header}>
        <TopNav />
      </header>

      <main className={styles.main}>

        <section className={styles.hero}>
          <div className={styles.description}>
            <h1>MyCarTeam.</h1>
            <h2>Notre mission, facilitez vos trajets professionnels</h2>

            <div className={styles.quoteImg}>
              <div className={styles.quote}>
                <span style={{ fontSize: '2rem', fontWeight: "bold", display: 'block', textAlign: 'left', height: 'fit-content' }}>“</span>
                <p>70% des trajets domicile-travail sont réalisés en véhicule individuel et seulement 3% en covoiturage</p>
                <span style={{ fontSize: '2rem', fontWeight: "bold", display: 'block', textAlign: 'right' }}>”</span>
              </div>

              <Image
                src="/car.png"
                width={200}
                height={200}
                alt="illustration justice"
                className={styles.heroImg}
              />
            </div>
          </div>
        </section>

        <section className={styles.specialties}>

          <Card
            className={styles.specialityCard}
            img="/earth.png"
            title="Écologie"
            text="Partager sa voiture, c'est diviser son empreinte carbonne"
            alt="illustration de la planètre terre qui sourit"
          />

          <Card
            img="/time.png"
            title="Efficacité"
            text="Gagnez du temps dans vos recherches de solutions de transport"
            alt="illustration d'un chronomètre"
          />

          <Card
            img="/team.png"
            title="Cohésion d'équipe"
            text="Rien de mieux qu'un long trajet pour partager ses passions"
            alt="illustration d'une équipe"
          />

        </section>

        <section className={styles.presentation}>

          <div className={styles.presentationImgContainer}>
            <video preload="none" autoPlay={true} loop={true} muted={true}>
              <source src="/video_car.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.presentationText}>
            <h2 style={{ fontVariant: "small-caps" }}>Le partenaire d'une mobilité professionnelle et responsable</h2>
            <p>MyCarTeam est une application de covoiturage professionnel permettant la mise en relation de salariés d'une même entreprise souhaitant covoiturer.</p>
            <p>A destination des entreprises et de ses salariés, elle offre un espace de rencontre entre ceux qui proposent des trajets et ceux qui cherchent à voyager de façon responsable</p>
            <p>Discuter à la machine à café c'est sympa, discuter sur le chemin de votre lieu de travail ou d'évènements d'entreprise, c'est mieux</p>
            <p>Avec MyCarTeam, c'est la fin des longs moments à chercher un moyen de se rendre sur un lieu de travail.</p>
            <p>L'essayer c'est l'adopter</p>
          </div>
        </section>

      </main >

      <Footer />
    </>
  );
}
