import React, { Component } from 'react';

class Form extends Component {

  onSubmit(e) {
    e.preventDefault();

    axios.post('http://localhost:5000/getplaces', newQuery).then((result) =>{

    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
      <div className="jumbotron text-center">
        <h1>Search Page</h1>
        <p>For searching places of interest</p>
      </div>
        <div className="row container text-center">
          <div className="col-sm-12">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="addr">Enter address:</label>
                <input id="addr" name="address" className="form-control" type="text" placeholder="Enter address..."/>
                <p></p>
                <label htmlFor="name">Enter name:</label>
                <input id="name" name="name" className="form-control" type="text" placeholder="Enter name..."/>
                <p></p>
                <label htmlFor="places-type">Select type of place:</label>
                <p></p>
                  <select id="places-type" name="placetype" className="form-control">
                  <option value="accounting">accounting</option>
                  <option value="airport">airport</option>
                  <option value="amusement_park">amusement_park</option>
                  <option value="aquarium">aquarium</option>
                  <option value="art_gallery">art_gallery</option>
                  <option value="atm">atm</option>
                  <option value="bakery">bakery</option>
                  <option value="bank">bank</option>
                  <option value="bar">bar</option>
                  <option value="beauty_salon">beauty_salon</option>
                  <option value="bicycle_store">bicycle_store</option>
                  <option value="book_store">book_store</option>
                  <option value="bowling_alley">bowling_alley</option>
                  <option value="bus_station">bus_station</option>
                  <option value="cafe">cafe</option>
                  <option value="campground">campground</option>
                  <option value="car_dealer">car_dealer</option>
                  <option value="car_rental">car_rental</option>
                  <option value="car_repair">car_repair</option>
                  <option value="car_wash">car_wash</option>
                  <option value="casino">casino</option>
                  <option value="cemetery">cemetery</option>
                  <option value="church">church</option>
                  <option value="city_hall">city_hall</option>
                  <option value="clothing_store">clothing_store</option>
                  <option value="convenience_store">convenience_store</option>
                  <option value="courthouse">courthouse</option>
                  <option value="dentist">dentist</option>
                  <option value="department_store">department_store</option>
                  <option value="doctor">doctor</option>
                  <option value="electrician">electrician</option>
                  <option value="electronics_store">electronics_store</option>
                  <option value="embassy">embassy</option>
                  <option value="fire_station">fire_station</option>
                  <option value="florist">florist</option>
                  <option value="funeral_home">funeral_home</option>
                  <option value="furniture_store">furniture_store</option>
                  <option value="gas_station">gas_station</option>
                  <option value="gym">gym</option>
                  <option value="hair_care">hair_care</option>
                  <option value="hardware_store">hardware_store</option>
                  <option value="hindu_temple">hindu_temple</option>
                  <option value="home_goods_store">home_goods_store</option>
                  <option value="hospital">hospital</option>
                  <option value="insurance_agency">insurance_agency</option>
                  <option value="jewelry_store">jewelry_store</option>
                  <option value="laundry">laundry</option>
                  <option value="lawyer">lawyer</option>
                  <option value="library">library</option>
                  <option value="liquor_store">liquor_store</option>
                  <option value="local_government_office">local_government_office</option>
                  <option value="locksmith">locksmith</option>
                  <option value="lodging">lodging</option>
                  <option value="meal_delivery">meal_delivery</option>
                  <option value="meal_takeaway">meal_takeaway</option>
                  <option value=""></option>
                  <option value="mosque">mosque</option>
                  <option value="movie_rental">movie_rental</option>
                  <option value="movie_theater">movie_theater</option>
                  <option value="moving_company">moving_company</option>
                  <option value="museum">museum</option>
                  <option value="night_club">night_club</option>
                  <option value="painter">painter</option>
                  <option value="park">park</option>
                  <option value="parking">parking</option>
                  <option value="pet_store">pet_store</option>
                  <option value="pharmacy">pharmacy</option>
                  <option value="physiotherapist">physiotherapist</option>
                  <option value="plumber">plumber</option>
                  <option value="police">police</option>
                  <option value="post_office">post_office</option>
                  <option value="real_estate_agency">real_estate_agency</option>
                  <option value="restaurant">restaurant</option>
                  <option value="roofing_contractor">roofing_contractor</option>
                  <option value="rv_park">rv_park</option>
                  <option value="school">school</option>
                  <option value="shoe_store">shoe_store</option>
                  <option value="shopping_mall">shopping_mall</option>
                  <option value="spa">spa</option>
                  <option value="stadium">stadium</option>
                  <option value="storage">storage</option>
                  <option value="store">store</option>
                  <option value="subway_station">subway_station</option>
                  <option value="supermarket">supermarket</option>
                  <option value="synagogue">synagogue</option>
                  <option value="taxi_stand">taxi_stand</option>
                  <option value="train_station">train_station</option>
                  <option value="transit_station">transit_station</option>
                  <option value="travel_agency">travel_agency</option>
                  <option value="veterinary_care">veterinary_care</option>
                  <option value="zoo">zoo</option>

                  </select>
                <p></p>
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Form;
