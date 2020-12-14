import React from "react";
import moment from "moment";
import { locationSearch, getForecast } from "../../services/location-services";
import Spinner from "../spinner/spinner.component";
import CurrentConditions from "../current-conditions/current-conditions.component";
import Forecast from "../forecast/forecast.component";
import Search from "../../components/search/search.component";
import Selector from "../../components/selector/selector.component";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationForecast: null,
      loading: true,
      measurement: "c",
    };
  }

  setForecast = (woeid) => {
    this.setState({ loading: true });
    getForecast(woeid).then((forecast) => {
      this.setState({
        locationForecast: forecast,
        loading: false,
      });
    });
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      locationSearch({ lattlong: `${latitude}, ${longitude}` }).then((response) => {
        this.setForecast(response[0].woeid);
      });
    });
  }

  render() {
    let { loading, locationForecast, measurement } = this.state;

    return (
      <>
        <Search setForecast={this.setForecast} />
        {loading ? (
          <Spinner />
        ) : (
          <>
            <CurrentConditions
              locationName={locationForecast.title}
              date={moment(locationForecast.time).format("dddd, MMMM Do")}
              description={locationForecast.consolidated_weather[0].weather_state_name}
              icon={locationForecast.consolidated_weather[0].weather_state_abbr}
              temperature={Math.round(locationForecast.consolidated_weather[0].the_temp)}
              measurement={measurement}
            />
            <Forecast
              forecast={locationForecast.consolidated_weather}
              measurement={measurement}
            />
            <div className="center-content">
              <Selector
                onClick={() => this.setState({ measurement: "c" })}
                active={measurement === "c"}
              >
                &deg;C
              </Selector>
              <Selector
                onClick={() => this.setState({ measurement: "f" })}
                active={measurement === "f"}
              >
                &deg;F
              </Selector>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Weather;
