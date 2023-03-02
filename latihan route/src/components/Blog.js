import { Link, Outlet } from 'react-router-dom';

export default function Blog() {
  return (
    <>
      <h1>isi blog</h1>
      <ul>
        <li>
          <Link to='blog/:slug'>article 1</Link>
        </li>
        <li>
          <Link to='blog/:slug'>article 2</Link>
        </li>
        <li>
          <Link to='blog/:slug'>article 3</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
