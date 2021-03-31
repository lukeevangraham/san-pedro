import { useRouter } from "next/router";
import Link from "next/link";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  const router = useRouter();

  let attachedClasses = [
    classes.NavigationItem,
    props.sticky ? classes.sticky : null,
    router.pathname.startsWith(props.link) ? classes.active : null,
  ];

  return (
    <li className={attachedClasses.join(" ")}>
      <Link href={props.link}>
        <a
          className={
            !router.pathname.startsWith(props.link) ? classes.left : null
          }
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export default navigationItem;
