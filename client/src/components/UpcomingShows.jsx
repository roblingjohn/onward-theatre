import React, { Component } from "react";
import ShowInfo from "./ShowInfo";

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
      {
        showName: "Improvised Drinking Game",
        showTime: { showDate: "Saturday", showTime: "11:00" },
        tagline: "Totally not a ripoff of Improv Asshole",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim unde aliquam culpa ullam autem incidunt minima dolore amet a veritatis, tenetur recusandae harum impedit, esse, molestias quae. Sapiente, adipisci fugit?",
      },
    ],
  };
  render() {
    return (
      <div>
        <h2>Friday</h2>
        {this.state.shows.map(
          (show) =>
            show.showTime.showDate === "Friday" && (
              <>
                <ShowInfo
                  showTime={show.showTime.showTime}
                  showName={show.showName}
                  tagline={show.tagline}
                  description={show.description}
                />
              </>
            )
        )}
        <h2>Saturday</h2>
        {this.state.shows.map(
          (show) =>
            show.showTime.showDate === "Saturday" && (
              <>
                <ShowInfo
                  showTime={show.showTime.showTime}
                  showName={show.showName}
                  tagline={show.tagline}
                  description={show.description}
                />
              </>
            )
        )}
      </div>
    );
  }
}

export default UpcomingShows;
