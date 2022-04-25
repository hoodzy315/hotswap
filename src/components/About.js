import React from "react";

/**
 * Author: Joe Woods
 * A simple component to hold the about information
 */

export default function About() {
  return (
    <main>
      <div className="About--landing">
        <div className="About--vision">
          <b>Vision Statement</b>
          <p>
            HotSwap exists to help our clients prosper and have the most
            beneficial experience trading items with other people. Our goal is
            to help users save money and discard items they no longer need or
            use for items they want or currently need.
          </p>
        </div>
        <div className="About--mission">
          <b>Mission Statement</b>
          <p>
            Our commitment to you is to provide top quality users offering their
            items/goods for a great trade. If you come across a user who does
            not meet these requirements, please let us know immediately. We
            strive to sustain the integrity of the trade system and will do what
            is necessary to conserve our commitment to you.
          </p>
        </div>
        <div className="About--history">
          <b>Company History</b>
          <p>
            HotSwap was created by college students who took into account the
            problem of many people who want to save money and at the same time
            want to get rid of items they don't need or want. Taking into
            account the technological tools that allow communication between the
            population, they decided to create the software that allows the
            exchange of goods. Resulting in a successful application that
            benefits many people.
          </p>
        </div>
        <div className="About--values">
          <b>Core Values</b>
          <p className="About--values--p">
            Genuine, Involved, Exceptional, and Customer Commitment.
          </p>
        </div>
      </div>
    </main>
  );
}
