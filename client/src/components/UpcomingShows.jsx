import React, { Component } from "react";

class UpcomingShows extends Component {
  state = {
    shows: [
      {
        showName: "Group Therapy",
        showTime: { showDate: "Friday", showTime: "7:00" },
        tagline: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, distinctio. Molestiae odio voluptatum, perferendis hic tempora quo labore, ab nihil totam quas vero incidunt, earum harum ea animi dicta sed.",
      },
      {
        showName: "Cold Hearted Motherfuckers",
        showTime: { showDate: "Friday", showTime: "8:00" },
        tagline: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nesciunt ut ea consequatur? Culpa impedit incidunt ad consectetur? Repellat tempora architecto quos ipsum amet adipisci perferendis aliquid quia cumque ratione.",
      },
      {
        showName: "Murder Show",
        showTime: { showDate: "Friday", showTime: "9:00" },
        tagline: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus fuga libero voluptatum modi nisi tempore eaque sed repellendus voluptatibus, similique inventore recusandae. Magnam optio eaque quo dolores ab ipsam.",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>Upcoming Shows:</h1>
        <h2>Friday</h2>
        {this.state.shows.map((show) => (
          <>
            <h3>
              {show.showTime.showTime} {show.showName}
            </h3>
            <h4>{show.tagline}</h4>
            <p>{show.description}</p>
          </>
        ))}
      </div>
    );
  }
}

export default UpcomingShows;
