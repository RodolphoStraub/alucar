import React from 'react';
import { Carousel } from 'antd';

const App: React.FC = () => (
  <Carousel
  dots={false}
  swipeToSlide draggable
   autoplay
   slidesToShow={3}
   autoplaySpeed={4000}
   pauseOnHover={true} 
   >
    <div>
    <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
      />
    </div>
    <div>
    <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
      />
    </div>
    <div>
    <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
      />
    </div>
    <div>
    <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
      />
    </div>
  </Carousel>
);

function Opinions(props) {
  return (
    <div className="opinioncards">
      <div className="cardpic">
        <img src={props.img}></img>
          <h2>{props.name}</h2>
      </div>
      <p className='cardtext'>{props.text}</p>
    </div>
  );
}

export {App};

function Opinioes() {
  return (
    <div className="wrapperopinioesall">
      <div className="opinioestext">
        <h1 className="opinion">
          O que nossos clientes acham
        </h1>
      </div>
      <App/>
    </div>
  );
}

export default Opinioes;
