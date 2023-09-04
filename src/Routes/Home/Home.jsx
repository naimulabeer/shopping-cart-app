import { Outlet } from "react-router-dom";
import Directory from "../../Components/Directory/Directory";

function Home() {
  const categories = [
    {
      id: 1,
      title: "T-shirts",
      imageUrl: "https://i.ibb.co/jkQGStZ/polo1.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/DzBtC4Y/jackets1.jpg",
    },
    {
      id: 3,
      title: "Hats",
      imageUrl: "https://i.ibb.co/ryyLCsX/hats1.jpg",
    },
    {
      id: 4,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/WKcBqz4/sneakers1.jpg",
    },
    {
      id: 5,
      title: "Suit",
      imageUrl: "https://i.ibb.co/Y8xVnL3/suits1.jpg",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
}

export default Home;
