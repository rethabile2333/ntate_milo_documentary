import React from 'react';
import { useState } from 'react';
const photos = [
 {src:'/images/ntate-milo-profile.png',alt:'Portrait of Ntate Milo',caption:'The man behind the name'},
 {src:'/images/ntate-milo-biography.png',alt:'Ntate Milo with a fellow musician and musical instruments',caption:'Music, culture and collaboration'},
 // Add more entries here after placing your files under public/media/. Example:
 // {src:'/media/childhood/young-milo.jpg',alt:'Ntate Milo during childhood',caption:'Where the journey began'},
];
const videos = [
 {src:'/media/videos/documentary-trailer.mp4',title:'Documentary trailer',description:'A short introduction to Ntate Milo’s journey.',optional:true},
 {src:'/media/videos/interview.mp4',title:'Ntate Milo in his own words',description:'A longer interview or reflection from the story.',optional:true}
];
export default function Gallery() {
 const [selected,setSelected] = useState(null);
 const [videoErrors,setVideoErrors] = useState({});
 return <section className="page-content page-pad"><p className="eyebrow">DOCUMENTARY ARCHIVE</p><h1>Moments that<br/>tell <em>a story.</em></h1><p className="lead page-lead">Photographs, performances, memories and videos help bring this story to life. The two supplied photographs are included. The video spaces are ready for approved recordings to be added.</p><h2 className="gallery-heading">Photographs & memories</h2><div className="gallery-grid">{photos.map((photo,i)=><button className="gallery-item" key={photo.src} onClick={()=>setSelected(photo)}><img src={photo.src} alt={photo.alt}/><span>0{i+1} / {photo.caption} ↗</span></button>)}</div><h2 className="gallery-heading">Documentary videos</h2><div className="video-grid">{videos.map((video,i)=><article className="video-card" key={video.src}><video controls preload="metadata" poster="/images/ntate-milo-profile.png" onError={()=>setVideoErrors(old=>({...old,[video.src]:true}))}><source src={video.src} type="video/mp4"/></video><div><p className="eyebrow">FILM 0{i+1}</p><h3>{video.title}</h3><p>{video.description}</p>{videoErrors[video.src] && <small className="media-help">Add your MP4 at <code>public{video.src}</code> to display this video.</small>}</div></article>)}</div><div className="editor-note"><strong>How to add media</strong><p>Place photographs in <code>public/media/</code> and videos in <code>public/media/videos/</code>. Use the filenames listed on this page or update the relevant <code>src</code> path. Publish only photographs and recordings you have permission to use.</p></div><p className="gallery-note">You can expand this archive over time with childhood photographs, school memories, music videos, posters, studio footage, travel photographs, interviews and pictures from community tournaments.</p>{selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.caption} onClick={()=>setSelected(null)}><button onClick={()=>setSelected(null)} aria-label="Close image">×</button><img src={selected.src} alt={selected.alt}/><p>{selected.caption}</p></div>}</section>;
}
