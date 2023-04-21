import './users.scss'
function Users({fname = "", title, lname= "",col=false, selected=false}) {
  return (
    <div className={`${col ? "user fd-col" : "user"} ${selected ? " selected": ""}`}>
        <div className="image">{fname[0]}{lname[0]}</div>
        <div className="desc">
            <div className="name">{fname} {lname}</div>
            <div className="title">{title}</div>
        </div>
    </div>
  )
}
export default Users
