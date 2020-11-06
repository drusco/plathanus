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
      <h4 className="font-open-sans-bold h5"><b>{props.title}</b></h4>
      <p>{props.description}</p>
      <div className="mt-2">
        <a href={props.link.url} className="btn btn-primary btn-sm pr-3 pl-3 text-white rounded-pill">{props.link.text}</a>
      </div>
    </div>
  )
}