export default function Area(props: {area: string}) {
  return (
    <aside className="area">
      <img src="./img/location_icon.svg" aria-hidden/>
      <span className="content">{props.area}</span>
    </aside>
  )
}
