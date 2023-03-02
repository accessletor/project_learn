import { Link, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <>
      <h1>Ini Adalah About</h1>
      <p>
        ini adalah link team : <Link to='team'>Team</Link>
      </p>
      <Outlet />
    </>
  );
}
