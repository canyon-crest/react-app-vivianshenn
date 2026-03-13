import Card from './Card';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to Vivian's Dance Shop!</p>
      <p>Feel free to browse our selection of dancewear and accessories.</p>

      <Card name="Ballet leotards" description="Ballet leotards in all designs and colors!" />
      <Card name="Contemporary shoes" description="Comfortable contemporary shoes for modern dancers!" />
      <Card name="Dance bags" description="Dance bags with huge space and convenient pockets!" />
    </div>
  );
}

export default Home;
