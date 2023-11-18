import classes from "./HomeHeroB.module.scss";

const HomeHeroB = ({ data }) => (
  <main className={`row ${classes.Hero}`}>
    <div className={classes.Hero__Title}>{data.title}</div>
    <div className={classes.Hero__Description}>{data.description}</div>
    <div
      className={classes.Hero__SmallText}
      dangerouslySetInnerHTML={{ __html: data.smallTextWithLink }}
    />
  </main>
);

export default HomeHeroB;
