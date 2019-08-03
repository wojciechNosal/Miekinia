import React from "react";

import Button from "../components/Button";

const Laboratory = () => {
  return (
    <section className="laboratory">
      <h1 className="laboratory__title">Laboratorium</h1>
      <p className="laboratory__text">
        Centrum Zrównoważonego Rozwoju i Poszanowania Energii WGGiOŚ, AGH w
        Miękini mieści się w ośrodku, który do 2009 stanowił bazę dla
        odbywających się w okolicy praktyk terenowych z kartografii
        geologicznej, geofizyki oraz geologii górniczej. Część z tych praktyk
        prowadzona były przez doktorantów Wydziału. Ośrodek był wykorzystywany
        również przez wydziałowe koła naukowe dla celów organizacji studenckich
        sesji naukowych. Od roku 2010 trwają prace nad jego modernizacją.
        Powstaje Małopolskie Centrum Odnawialnych Źródeł i Poszanowania Energii
        „Miękinia”.
      </p>
      <Button
        tag="a"
        href="http://laboratorium.miekinia.agh.edu.pl/"
        text="Zobacz stronę"
      />
    </section>
  );
};

export default Laboratory;
