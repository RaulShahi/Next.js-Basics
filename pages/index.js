import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { Fragment } from "react";

const HomePage = ({ featuredEvents }) => {
  return (
    <Fragment>
      <Head>
        <title>Featured Events</title>
        <meta
          name="description"
          content="Find a lot of great events for your personal growth"
        />
      </Head>
      <EventList items={featuredEvents} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
};
export default HomePage;
