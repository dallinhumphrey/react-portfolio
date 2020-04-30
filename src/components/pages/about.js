import React from "react";
import profilePicture from "../../../static/assets/images/bio/unnamed.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        This isn't Game of Thrones, Morty. Pluto's a planet. How do you saddle a
        fart? You want to see my first boner, or should we go straight to the
        moment I discovered interdimensional travel? Then it's time to get your
        beak wet tonight playa! What, cover me in gasoline and spiders? Fine,
        yeah, I'm in. You created a day care for my dad? Lick, lick, lick my
        balls! Did you just come into the cafeteria through a portal? This is
        Principal Vagina. No relation. Full disclosure, Morty - it's not.
        Temporary superintelligence is just a side effect of the Megaseeds
        dissolving in your rectal cavity. I'd like to order one large person
        with extra people please. white people, no no no black people... and
        hispanic on half.
      </div>
    </div>
  );
}
