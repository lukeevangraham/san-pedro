import React from "react";
import NewsCard from "../News/NewsCard/NewsCard";
import classes from "./HomePage.module.css";

const HomePage = ({ data }) => (
  <>
    <section>
      <div className="row">
        <div className="col">
          <h2>Featured News</h2>
          {/* <div className="row"> */}
          <div className={classes.grid}>
            {data.news.map((article) => (
              <NewsCard article={article} key={article.id} />
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>

    <section className={[classes.second].join(" ")}>
      <div className="row">
        <h2>Section title</h2>
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            rhoncus consequat massa, vel vulputate orci molestie eu. Suspendisse
            ullamcorper neque ultricies justo euismod gravida. Cras lobortis
            commodo arcu vitae auctor. Maecenas tristique ante sed enim
            consequat congue. Vestibulum iaculis ac orci at auctor. Sed rutrum
            turpis nunc, sed vehicula neque ornare eget. Suspendisse euismod
            velit quis tempor consequat. Mauris quis tellus in dui dictum
            congue. Sed consectetur risus sem, quis gravida ipsum eleifend at.
            In vulputate nulla est. Aenean quis fermentum orci, id laoreet
            lacus. Proin sit amet faucibus sem. Etiam tincidunt ligula elit, eu
            feugiat elit fringilla sit amet. Ut venenatis erat augue, maximus
            congue nisl congue vulputate. Maecenas elit felis, tincidunt eu
            venenatis vel, molestie non lacus. In blandit ultricies volutpat.
            Donec leo nisl, dignissim et mollis quis, tincidunt vel ipsum. Cras
            ut mattis quam. Donec maximus in purus porta sagittis. Maecenas
            iaculis sit amet est a faucibus. Donec consequat, nunc mattis
            pharetra eleifend, lorem quam aliquet sem, ut luctus magna mi ac
            neque. Sed nunc augue, tincidunt nec ligula ut, consequat vulputate
            risus. Aliquam dignissim turpis eget urna vehicula consequat. Aenean
            hendrerit accumsan faucibus. Ut in libero nec felis elementum
            elementum in in eros. Pellentesque vitae elit molestie, commodo sem
            ac, consectetur mi. Curabitur eu est non mauris hendrerit feugiat.
            Quisque pellentesque commodo justo, et eleifend felis lacinia non.
            Quisque metus nisi, congue eu nulla non, tincidunt ultricies turpis.
            Sed tortor ipsum, finibus quis efficitur nec, pretium ut massa.
            Vivamus molestie ligula purus, ac rutrum metus commodo sed. Proin
            metus lacus, dictum in nibh ac, dictum rutrum nisl. Suspendisse
            pharetra consequat odio a ultricies. Suspendisse in diam et mauris
            aliquet mollis. Sed malesuada, augue vitae porttitor ultricies, sem
            augue dapibus purus, sit amet finibus diam sem ut nisi. Sed
            malesuada, eros et venenatis varius, sapien elit gravida sem, eu
            aliquam est odio ac orci. Nulla risus odio, varius a tempus sed,
            tempor quis ipsum. Donec vel porta neque. Vivamus ipsum augue,
            lobortis eu odio sed, varius blandit est. Donec varius feugiat nunc,
            sit amet imperdiet libero pellentesque sed. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Phasellus ullamcorper tellus ac enim sodales commodo. Nunc vitae
            tortor pharetra, bibendum nulla et, sollicitudin mauris. Etiam vel
            turpis mauris. Aenean rutrum sed dolor non feugiat. Phasellus
            luctus, neque quis congue porta, metus dui pellentesque magna, sit
            amet faucibus sem orci eu erat. Praesent semper dui elit, id
            suscipit tortor hendrerit eget. Aliquam suscipit orci dui. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Mauris vulputate dapibus efficitur. In rhoncus
            leo eget consectetur varius. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            rhoncus consequat massa, vel vulputate orci molestie eu. Suspendisse
            ullamcorper neque ultricies justo euismod gravida. Cras lobortis
            commodo arcu vitae auctor. Maecenas tristique ante sed enim
            consequat congue. Vestibulum iaculis ac orci at auctor. Sed rutrum
            turpis nunc, sed vehicula neque ornare eget. Suspendisse euismod
            velit quis tempor consequat. Mauris quis tellus in dui dictum
            congue. Sed consectetur risus sem, quis gravida ipsum eleifend at.
            In vulputate nulla est. Aenean quis fermentum orci, id laoreet
            lacus. Proin sit amet faucibus sem. Etiam tincidunt ligula elit, eu
            feugiat elit fringilla sit amet. Ut venenatis erat augue, maximus
            congue nisl congue vulputate. Maecenas elit felis, tincidunt eu
            venenatis vel, molestie non lacus. In blandit ultricies volutpat.
            Donec leo nisl, dignissim et mollis quis, tincidunt vel ipsum. Cras
            ut mattis quam. Donec maximus in purus porta sagittis. Maecenas
            iaculis sit amet est a faucibus. Donec consequat, nunc mattis
            pharetra eleifend, lorem quam aliquet sem, ut luctus magna mi ac
            neque. Sed nunc augue, tincidunt nec ligula ut, consequat vulputate
            risus. Aliquam dignissim turpis eget urna vehicula consequat. Aenean
            hendrerit accumsan faucibus. Ut in libero nec felis elementum
            elementum in in eros. Pellentesque vitae elit molestie, commodo sem
            ac, consectetur mi. Curabitur eu est non mauris hendrerit feugiat.
            Quisque pellentesque commodo justo, et eleifend felis lacinia non.
            Quisque metus nisi, congue eu nulla non, tincidunt ultricies turpis.
            Sed tortor ipsum, finibus quis efficitur nec, pretium ut massa.
            Vivamus molestie ligula purus, ac rutrum metus commodo sed. Proin
            metus lacus, dictum in nibh ac, dictum rutrum nisl. Suspendisse
            pharetra consequat odio a ultricies. Suspendisse in diam et mauris
            aliquet mollis. Sed malesuada, augue vitae porttitor ultricies, sem
            augue dapibus purus, sit amet finibus diam sem ut nisi. Sed
            malesuada, eros et venenatis varius, sapien elit gravida sem, eu
            aliquam est odio ac orci. Nulla risus odio, varius a tempus sed,
            tempor quis ipsum. Donec vel porta neque. Vivamus ipsum augue,
            lobortis eu odio sed, varius blandit est. Donec varius feugiat nunc,
            sit amet imperdiet libero pellentesque sed. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Phasellus ullamcorper tellus ac enim sodales commodo. Nunc vitae
            tortor pharetra, bibendum nulla et, sollicitudin mauris. Etiam vel
            turpis mauris. Aenean rutrum sed dolor non feugiat. Phasellus
            luctus, neque quis congue porta, metus dui pellentesque magna, sit
            amet faucibus sem orci eu erat. Praesent semper dui elit, id
            suscipit tortor hendrerit eget. Aliquam suscipit orci dui. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Mauris vulputate dapibus efficitur. In rhoncus
            leo eget consectetur varius. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
