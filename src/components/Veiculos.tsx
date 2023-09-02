import React from "react";

type Props = {};

function Cardscar(props) {
  return (
    <div className="carcards">
      <div className="cardleft">
        <h1 className="cardtitle">{props.carname}</h1>
        <div className="pricebg">
        <h2  className="price1">Preço:</h2>
        <h2 className="price2">{props.price}</h2>
        </div>
      </div>
      <div className="iconcarleft">
        <div className="assentos">
        <img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/car_seat_icon_137808.png'></img>
        <p>{props.text}</p>
        </div>
        <div className="portas">
            <img src='https://cdn-icons-png.flaticon.com/512/638/638445.png'></img>
            <p>{props.text2}</p>
        </div>
        <div className="arcondi">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cvywzZuDpm2wGUtri5RV9axw-GoREtDtk1o3SuJ5I2MNzRHQHjr2HsLjbrSllOxoSVU&usqp=CAU'></img>
            <p>{props.text3}</p>
        </div>
      </div>
      <div className="carbottom">
        <img className="carimage" src={props.img}/>
      </div>
    </div>
  );
}

function Veiculos({}: Props) {
  return (
    <div className="veiculosall">
      <div className="veiculotitle">
        <h1 className="titlecars">Nossos veículos</h1>
      </div>
      <div className="allcards2">
          <Cardscar
            carname="Uno"
            price="R$200/dia"
            text="4 assentos"
            text2="4 portas"
            text3="A/C"
            img="https://cdn.adtechpanda.com/09b2c40a-c99d-432d-a064-fc3db5a16e3e/"
          />
           <Cardscar
            carname="Ranger"
            price="R$500/dia"
            text="4 assentos"
            text2="4 portas"
            text3="A/C"
            img="https://cdn.adtechpanda.com/09b2c40a-c99d-432d-a064-fc3db5a16e3e/"
          />
           <Cardscar
            carname="Uno"
            price="R$200/dia"
            text="4 assentos"
            text2="4 portas"
            text3="A/C"
            img="https://cdn.adtechpanda.com/09b2c40a-c99d-432d-a064-fc3db5a16e3e/"
          />
           <Cardscar
            carname="Uno"
            price="R$200/dia"
            text="4 assentos"
            text2="4 portas"
            text3="A/C"
            img="https://cdn.adtechpanda.com/09b2c40a-c99d-432d-a064-fc3db5a16e3e/"
          />
           <Cardscar
            carname="Uno"
            price="R$200/dia"
            text="4 assentos"
            text2="4 portas"
            text3="A/C"
            img="https://cdn.adtechpanda.com/09b2c40a-c99d-432d-a064-fc3db5a16e3e/"
          />
           <Cardscar
            carname="Uno"
            price="R$200/dia"
            text="4 assentos"
            text2="4 portas"
            text3="A/C"
            img="https://cdn.adtechpanda.com/09b2c40a-c99d-432d-a064-fc3db5a16e3e/"
          />
      </div>
    </div>
  );
}

export default Veiculos;
