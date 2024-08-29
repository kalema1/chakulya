import Logo from "../../ui/Logo";
import NavBarRight from "./NavBarRight";

export default function PageNav() {
  return (
    <header>
      <div>
        <div>
          <div>
            <Logo />
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <NavBarRight />
          </div>
        </div>
      </div>
    </header>
  );
}
