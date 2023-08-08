interface servicePropTypes{
    name: string
    desc: string
}
export default function Service(props: servicePropTypes) {
  return (
    <aside className="service">
        <div className="name">{props.name}</div>
        <div className="desc">{props.desc}</div>
    </aside>
  )
}
