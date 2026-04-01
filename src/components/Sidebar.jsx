export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>About Me</h3>
      <p>Based in Sydney Australia — Exists sometimes. Welcome to my site!</p>

      <h4>Career</h4>
      <ul className="infoList careerList">
        <li className="infoItem">
          <span className="infoTitle">Central Telecoms</span>
          <span className="infoDetail">2024 - Current</span>
        </li>
      </ul>

      <h4>Contact Me</h4>
      <div className="socialLinks">
        <a href="mailto:jacobnichollssmart@gmail.com" className="socialLink">
          Email
        </a>
      </div>

      <footer>© 2025 Kyn lmao</footer>
    </aside>
  );
}