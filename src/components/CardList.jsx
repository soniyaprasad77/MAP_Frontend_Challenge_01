import Card from "./Card";
import CARDS_DATA from "../data/data.json";
import "../App.css"
/**
 * Renders a list of cards.
 *
 * @returns {JSX.Element} The CardList component.
 */
const CardList = () => {
  return (
    <div className='flex overflow-x-scroll hide-scroll-bar custom-scroll-bar'>
      <div className='flex flex-nowrap my-8'>
        {CARDS_DATA.map((event) => (
          <Card key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
