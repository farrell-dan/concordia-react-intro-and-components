const Colours = ["#335C67", "#FFF3B0", "#9E2A2B", "#540B0E", "white", "black"];

const RandomIndex = Math.floor(Math.random() * Colours.length)
const RandomColour = Colours[RandomIndex]

const colorStyle = { "color" : RandomColour}

const Header = () => {
  return (
    <header>
      <h2 style = { colorStyle }>My First React Header.</h2>
    </header>
  );
};

export default Header;
