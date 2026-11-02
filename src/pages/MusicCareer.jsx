import React from 'react';
import { Link } from 'react-router-dom';

export default function MusicCareer() {
  return (
    <section className="page-content page-pad">
      <p className="eyebrow">CHAPTER 02 · THE SOUND</p>

      <h1>
        When music became
        <br />
        a place to <em>breathe.</em>
      </h1>

      <p className="lead page-lead">
        Ntate Milo first turned to music because he loved it and because
        it brought him comfort during difficult times. Before music became
        his career, it helped him cope with pain, find peace and connect
        with other people.
      </p>

      <img
        className="wide-imag"
        src="/images/stage.jpeg"
        alt="Ntate Milo performing alongside traditional musical instruments"
      />

      <div className="reading-column">
        <h2>From fan to performer</h2>

        <p>
          Ntate Milo traces his interest in music back to 2009. In Qacha’s
          Nek, before social media became a common way to promote events,
          he helped put up posters and billboards advertising shows and
          the artists who would perform. He listened to musicians such
          as Moketa and Sefako sa Menoaneng, enjoyed dancing and learned
          their songs by heart.
        </p>

        <p>
          In 2012, he joined a group of artists in Qacha’s Nek as a
          supporter and fan. However, he soon discovered that he wanted
          to sing, too. The group released its first album in 2013.
          Performing in front of an audience felt uncomfortable at first,
          but the presentation skills he developed at Limkokwing
          University of Creative Technology helped him overcome his fear
          and perform with greater confidence.
        </p>

        <h2>A song that changed his life</h2>

        <div className="milestone-highlight">
          <span className="eyebrow">THE BREAKTHROUGH · 2021</span>

          <h3>“Chelete ea Makeup”</h3>

          <p>
            Ntate Milo identifies “Chelete ea Makeup,” released in 2021,
            as the song that first brought him widespread recognition.
            The song marked a turning point in his career and changed
            the direction of his life as a musician.
          </p>
        </div>

        <h2>The collaboration behind the hit</h2>

        <figure className="collaboration-figure">
          <img
            className="collaboration-image"
            src="/images/make up.jpeg"
            alt="Ntate Milo and Qhomane, collaborators behind Chelete ea Makeup"
            loading="lazy"
          />

          <figcaption>
            Ntate Milo and Qhomane — the collaboration behind
            “Chelete ea Makeup.”
          </figcaption>
        </figure>

        <p>
          “Chelete ea Makeup” was more than just another song. It became
          a major breakthrough for Ntate Milo, helping him reach a wider
          audience and take an important step forward in his music career.
          The song was created through his collaboration with Qhomane,
          whose contribution was part of this important moment in
          Ntate Milo’s journey.
        </p>

        <p>
          Ntate Milo explains that he first met Qhomane in Qacha’s Nek
          through Qhomane’s father, whose car he was repairing. Qhomane
          had already become interested in his music after watching his
          videos. After completing high school, Qhomane came to work
          with him, and their musical journey continued together.
        </p>

        <p>
          The success of “Chelete ea Makeup” shows how collaboration,
          creativity and persistence can help an artist reach new
          heights. For Ntate Milo, the song remains a defining moment
          in the story of how his love for music grew into a career.
        </p>

        <h2>People who believed in him</h2>

        <p>
          Ntate Milo credits Matoete with supporting him and recognising
          his potential. He also speaks warmly about Ts’ehlo from
          Nazareth, who gave him time, encouragement and advice that
          helped him improve his singing. Even after others had gone
          home, Ts’ehlo would stay to help him develop his skills.
          Seeing audiences respond positively to his music motivated
          him to keep learning and improving.
        </p>

        <p>
          He also recognises Bokang Moleli, known as Malome Vector, for
          playing an important role in helping his music reach digital
          platforms and supporting the growth of his craft. Ntate Milo
          paid tribute to him following his passing.
        </p>

        <h2>More than entertainment</h2>

        <p>
          Ntate Milo wants listeners to learn about culture, history,
          language, life and self-acceptance through his music. He also
          hopes his songs will offer useful advice and other positive
          messages.
        </p>

        <p>
          He recognises that upcoming artists face challenges because
          established musicians and other people do not always give
          them opportunities to showcase their talent. His own journey
          highlights the importance of persistence, collaboration and
          support from people who believe in an artist’s potential.
        </p>

        <div className="editor-note">
          <strong>Watch and listen</strong>
          <p>
            Add official music videos, approved performance footage,
            streaming links and photographs to the Gallery. Make sure
            you have permission to publish all images, music and videos.
          </p>
        </div>

        <Link className="button button-primary" to="/achievements">
          Next chapter: building beyond music ↗
        </Link>
      </div>
    </section>
  );
}
