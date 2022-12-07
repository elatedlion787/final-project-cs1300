

export default function WordExperienceCard(props){
    return(
    <div className='box btn_shadow'>
    <div className='title_content d_flex'>
      <div className='title'>
        <h2>{props.title}</h2>
        <span>{props.company}</span>
        <h5> {props.skills}</h5>
      </div>
      <div className='rate'>
        <h6>{props.start_date}-{props.end_date}</h6>
      </div>
    </div>
    <hr />
    <p>{props.desc}</p>
  </div>
    );
}