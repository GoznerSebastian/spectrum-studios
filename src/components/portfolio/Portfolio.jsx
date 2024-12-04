import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Sapient Imobiliare",
    img: "./sapient.jpg",
    desc: "We partnered with Sapient Imobiliare to showcase their premium real estate portfolio through high-quality videography and drone footage. Our team created cinematic property tours that highlight the unique features of each property, engaging potential buyers and boosting Sapient's online presence. This collaboration significantly enhanced their marketing strategy, emphasizing professionalism and luxury in every frame.",
  },
  {
    id: 2,
    title: "Hilton Oradea",
    img: "./hilton.jpeg",
    desc: "For Hilton Oradea, we provided top-notch content creation services to promote their luxury hospitality offerings. Our team developed a series of visually stunning promotional videos and lifestyle imagery that captured the elegance and sophistication of the Hilton brand. The content was tailored for social media campaigns, helping Hilton Oradea attract a wider audience and establish a strong digital presence.",
  },
  {
    id: 3,
    title: "Huta Slavia",
    img: "./huta-3.jpg",
    desc: "Our collaboration with Huta Slavia focused on creating captivating content for their eco-tourism initiatives. We produced immersive videos featuring the natural beauty of the location, drone shots of the breathtaking landscapes, and engaging stories about their sustainable practices. The result was a powerful visual narrative that resonated with environmentally conscious travelers, helping Huta Slavia increase bookings and brand loyalty.",
  },
  {
    id: 4,
    title: "Giorgio Mare",
    img: "./giorgio.jpg",
    desc: "Giorgio Mare enlisted our services to promote their exquisite coastal restaurant and its fine dining experience. We created a series of videos showcasing the culinary artistry, stunning ocean views, and the welcoming ambiance of the venue. By blending aerial shots with close-ups of signature dishes, we helped Giorgio Mare captivate their audience and boost both foot traffic and online reservations.",
  },
  {
    id: 5,
    title: "",
    img: "./qubmenu.png",
    desc: "We collaborated with QubMenu, a pioneer in digital menus for restaurants, to create engaging video and photography content. Our team captured the innovative design and seamless functionality of their products, showcasing how QubMenu enhances the dining experience. The final visuals effectively highlight their technology, supporting QubMenu's marketing and brand promotion efforts.",
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured <span className='text-white'>Works</span></h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
