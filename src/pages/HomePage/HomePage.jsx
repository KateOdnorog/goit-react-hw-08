import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <section className={s.homepage}>
        <h1 className={s.homepageTitle}>📱 Phonebook</h1>
        <p className={s.homepageSubtitle}>
          Your personal digital contact manager
        </p>
        <p className={s.homepageDescription}>
          Store, edit, and quickly find your important phone numbers — all in
          one simple and convenient app. Start building your contact list today!
        </p>
      </section>
    </>
  );
};

export default HomePage;
