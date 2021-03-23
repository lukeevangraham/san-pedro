import { useRouter } from "next/router";
import Link from "next/link";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  const router = useRouter();

  let attachedClasses = [
    classes.NavigationItem,
    props.sticky ? classes.sticky : null,
    router.pathname.includes(props.link) ? classes.active : null,
  ];

  console.log("PATH: ", router.pathname)
  console.log("LINK: ", props.link)

  console.log("TEST: ", router.pathname.includes(props.link))



  return (
    <li className={attachedClasses.join(" ")}>
      <Link href={props.link}>
        <a>{props.children}</a>
      </Link>
    </li>
  );
};

export default navigationItem;
