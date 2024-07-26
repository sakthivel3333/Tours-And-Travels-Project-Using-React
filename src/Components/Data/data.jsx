import img from '../../Asset/mountain.jpg';
import img2 from '../../Asset/pexels-efe-ersoy-393937500-20157706.jpg';
import img3 from '../../Asset/28a130b185373e76abc8603fc2bef625.jpg';
import img4 from '../../Asset/3fad6d537aac84ff7139fd47dac41d29.jpg';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Chennai,',
    location: 'India',
    grade: 'Beach',
    details: {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam facilis nemo, facere quisquam.',
      duration: '3 days',
      groupSize: '10 people',
      ages: '18-99 yrs',
      languages: 'English, Japanese'
    },
    overview: 'The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip whisks you around the islands in one day. Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit...', 
    additionalImages: [img2, img3, img4],
     Highlight: 'Experience the thrill of a speedboat to the stunning Phi Phi Islands Be amazed by the variety of marine life in the archepelagoEnjoy relaxing in paradise with white sand beaches and azure turquoise waterFeel the comfort of a tour limited to 35 passengers Catch a glimpse of the wild monkeys around Monkey Beach'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Ajay,',
    location: 'India',
    grade: 'Relax',
    details: {
      description: 'Detailed description about Ajay in India.',
      duration: '2 days',
      groupSize: '15 people',
      ages: '10-70 yrs',
      languages: 'Hindi, English'
    },
    overview: 'Explore the serene beauty of Ajay, India, with its rich cultural heritage and tranquil landscapes...', 
    additionalImages: [img, img3, img4],
     Highlight: 'Experience the thrill of a speedboat to the stunning Phi Phi Islands Be amazed by the variety of marine life in the archepelagoEnjoy relaxing in paradise with white sand beaches and azure turquoise waterFeel the comfort of a tour limited to 35 passengers Catch a glimpse of the wild monkeys around Monkey Beach'
  },
  {
    id: 3,
    imgSrc: img3, 
    destTitle: 'Thor,',
    location: 'Canada',
    grade: 'Beach',
    details: {
      description: 'Detailed description about Thor in Canada.',
      duration: '4 days',
      groupSize: '8 people',
      ages: '20-60 yrs',
      languages: 'English, French'
    },
    overview: 'Discover the majestic landscapes of Thor, Canada, with its stunning beaches and scenic vistas...', 
    additionalImages: [img, img2, img4],
     Highlight: 'Experience the thrill of a speedboat to the stunning Phi Phi Islands Be amazed by the variety of marine life in the archepelagoEnjoy relaxing in paradise with white sand beaches and azure turquoise waterFeel the comfort of a tour limited to 35 passengers Catch a glimpse of the wild monkeys around Monkey Beach'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Wanda,',
    location: 'Goa',
    grade: 'Resort',
    details: {
      description: 'Detailed description about Wanda in Goa.',
      duration: '5 days',
      groupSize: '12 people',
      ages: '18-99 yrs',
      languages: 'English, Konkani'
    },
    overview: 'Discover the majestic landscapes of Goa, India, with its vibrant culture and beautiful resorts...', 
    additionalImages: [img, img2, img3],
    Highlight: 'Experience the thrill of a speedboat to the stunning Phi Phi Islands Be amazed by the variety of marine life in the archepelagoEnjoy relaxing in paradise with white sand beaches and azure turquoise waterFeel the comfort of a tour limited to 35 passengers Catch a glimpse of the wild monkeys around Monkey Beach'
  }
];

export default Data;
