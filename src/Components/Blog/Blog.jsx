// Blog.js

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../Asset/82ad57f29394f17633f579c8571abefb.jpg';
import img2 from '../../Asset/f2a2a76c1166b809381ecd816874ed71.jpg';
import img3 from '../../Asset/f59f40a9e25f42e8e98b7bb435e0ccc9.jpg';
import img4 from '../../Asset/1714297868681.jpg';
import "./Blog.css";

const Post = [
  {
    id: 1,
    postImage: img,
    title: 'Best Country In India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quae!'
  },
  {
    id: 2,
    postImage: img2,
    title: 'Best Country In India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quae!'
  },
  {
    id: 3,
    postImage: img3,
    title: 'Best Country In India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quae!'
  },
  {
    id: 4,
    postImage: img4,
    title: 'Best Country In India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quae!'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our Best Blog?</h2>
          <p>An insight to the incredible experience in the world.</p>
        </div>
        <div className="mainContainer grid">
          {Post.map(({ id, postImage, title, desc }) => (
            <div key={id} className="singlePost grid">
              <div className="imgDiv">
                <img src={postImage} alt={title} />
              </div>
              <div className="postDetails">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <a href="#" className="flex">
                Read More
                <BsArrowRightShort className="icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
