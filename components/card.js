export default function Card(props) {

  let icon

  if (props.svgIcon) {
    icon = <div className="mb-4 text-primary" style={{ height: '73px' }}>
      <props.svgIcon className="svg-color-inherit"/>
    </div>
  }

  return (
    <div className="text-center pl-4 pr-4 mb-5">
      {icon}
      <h4 className="font-open-sans-bold h5 mb-3"><b>{props.title}</b></h4>
      <p className="pl-5 pr-5">{props.description}</p>
      <div className="mt-4">
        <a href={props.link.url} className="btn btn-primary btn-sm font-open-sans-bold pr-3 pl-3 text-white rounded-pill">{props.link.text}</a>
      </div>
    </div>
  )
}