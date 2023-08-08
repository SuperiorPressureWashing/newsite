interface reviewPropType{
    name: string,
    desc: string
}

export default function Review(props: reviewPropType) {
  return (
    <aside className="review">
      <div className="name">{props.name}</div>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="desc">{props.desc}</div>
    </aside>
  )
}
