import report from '../assets/report.png';

const LogoContainer = () => {
  return (
    <div style = {{width: '150px', height: '30px', margin: '30px', display: 'flex'}}>
      <img src={report} alt="Report Logo" style = {{width: '20%',height: '100%'}} />
      <div style={{ display: 'flex',  alignItems :'center'}}>
        <div style = {{ marginLeft : '10px'}}>SnapSummary</div>
        <div style = {{transform: 'rotate(270deg)' , fontSize : '10px', alignSelf :'center'}}>.com</div>
      </div>
      
    </div>
  );
};

export default LogoContainer;
