import React from 'react';
import { Link } from 'react-router-dom';
export default function Childhood() {
  return <section className="page-content page-pad">
    <p className="eyebrow">CHAPTER 01 · THE ROOTS</p>
    <h1>From Leropong<br />to a life of <em>purpose.</em></h1>
    <p className="lead page-lead">Before the music, the businesses and the international trips, there was a boy in Qacha’s Nek trying to keep going through hardships he had not chosen.</p>
    <img className="wide-imag" src="/images/childhood.jpeg" alt="Ntate Milo and a fellow musician, representing the people and culture around his journey" />
    <div className="reading-column">
      <p className="eyebrow">THE BEGINNING</p><h2>A childhood that asked a lot of him</h2>
      <p>Monamoli Lucas Mahlekele was born and raised in Leropong, a village in Qacha’s Nek, Lesotho. In his interview, he describes his childhood as very difficult. After his parents separated, he had to find ways to support himself: going to school and working after school so there would be food.</p>
      <p>His mother died while he was in Form B. Her death made an already difficult situation harder. His grandmother took responsibility for him and the family, but money was limited. School fees could not always be paid on time, and he was repeatedly sent home. His schooling was repeatedly interrupted, and over time he began to lose interest in education.</p>
      <div className="quote-band"><span className="quote-mark">“</span><blockquote>I had to go to school and after school I had to go work so that we could eat.</blockquote><span className="quote-credit">MONAMOLI LUCAS MAHLEKELE · FROM HIS INTERVIEW</span></div>
      <h2>The village became part of his family</h2>
      <p>His grandmother was not the only person who helped. Members of the community stepped in, including a family in the village who helped pay his school fees and supported his education. He says the family began helping him after he protected their child from the harsh treatment that new learners sometimes faced at high school.</p>
      <p>His grandmother taught him the Sesotho principle <strong>“Motho ke motho ka batho”</strong> — a person is a person through other people. She also taught him that kindness matters: help someone today, and one day that person, or their family, may help you in return.</p>
      <h2>The dream he carried for his mother</h2>
      <p>As a child, he dreamed of finishing school, finding a decent job and buying his mother a car. He wanted to repay the sacrifices she had made to raise her children. She died before he could fulfil that dream. He says it remains painful because her children are now building stable lives, and he wishes she could have experienced the life they wanted to give her.</p>
      <p>After losing his mother, he held on to another purpose: to do good for people, whether they were family or not. That commitment reflects the values his grandmother and community passed on to him.</p>
      <h2>Learning not to compare lives</h2>
      <p>Growing up, he compared his circumstances with those of other children his age. Over time, he came to value self-acceptance: understanding your own life rather than measuring your worth against somebody else’s. He is not saying that hardship is easy. His message is that accepting your circumstances can help you stop blaming yourself and focus on the future you can build.</p>
      <div className="editor-note"><strong>A lesson from the roots</strong><p>Your circumstances are real, and it is okay to acknowledge how hard they are. But your circumstances are not a measure of your worth. Accepting your starting point can be the beginning of choosing your next step.</p></div>
      <Link className="button button-primary" to="/music-career">Next chapter: finding his voice ↗</Link>
    </div>
  </section>;
}
