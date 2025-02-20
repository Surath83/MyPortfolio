import style from './Cv.module.css';
import Resume from './assets/Resume_SurathChowdhury.pdf';
const Cv = () => {
  const downloadFileAtURL = (url) => {
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', 'Resume_SurathChowdhury.pdf');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
    return (
    <div className={style.box}>
      <h2>Resume</h2><br />
      <div className={style.ff}>
        <h4>My resume</h4>
        <button className={style.downbutton} onClick={() => downloadFileAtURL(Resume)}>Download</button>
      </div><br/>
     </div>
  );
};
export default Cv;