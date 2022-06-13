import Image from "next/image";
import Button from "../UI/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import styles from "./event-item.module.css";

const EventItem = ({ item }) => {
  const exploreLink = `events/${item.id}`;
  return (
    <li className={styles.item}>
      <Image src={"/" + item.image} alt={item.title} width={250} height={160} />
      {/* <img  /> */}
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{item.title}</h2>
          <div className={styles.date}>
            <time>
              <DateIcon />
              {new Date(item.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{item.location.replace(",", "\n")}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>{" "}
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>{" "}
          </Button>
        </div>
      </div>
    </li>
  );
};
export default EventItem;
