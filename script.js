const users = [
  {
    fullName: "Aarav Mehta",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    profession: "Full-Stack Developer",
    description:
      "Passionate MERN stack developer who loves building clean UI and scalable backend systems.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    fullName: "Sana Kapoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    description:
      "Designs intuitive and modern interfaces with strong user-centric thinking.",
    tags: ["Figma", "UI/UX", "Prototyping", "Illustration"]
  },
  {
    fullName: "Rohit Verma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Analyst",
    description:
      "Transforms raw data into meaningful insights using Python, SQL, and visualization tools.",
    tags: ["Python", "SQL", "PowerBI", "Data Analysis"]
  },
  {
    fullName: "Emily Johnson",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "Digital Marketer",
    description:
      "Expert in SEO, social media strategy, and growth marketing for online brands.",
    tags: ["SEO", "Content Strategy", "Marketing", "Branding"]
  },
  {
    fullName: "Lucas Fernandez",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Mobile App Developer",
    description:
      "Builds smooth and optimized mobile experiences with React Native and Flutter.",
    tags: ["React Native", "Flutter", "Android", "iOS"]
  }
];

var sum="";

users.forEach(function(elem){
  sum+=`<div class="card">
      <img src="${elem.image}" alt="">
      <h3>${elem.fullName}</h3>
      <h4>${elem.profession}</h4>
      <p>${elem.description}</p>
    </div>`
})

var main = document.querySelector("main");

main.innerHTML = sum;


