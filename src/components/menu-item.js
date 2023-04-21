function MenuItem({ name, icon, path="/" }) {
  return (
    <a href={path} target="_blank" className="links" rel="noreferrer">
      <span id="icon" className={`icon-${icon} links-icon`}></span>
      <span className="links-name">{name}</span>
    </a>
  );
}
export default MenuItem;
