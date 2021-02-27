import style from "./index.module.scss";
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

function Zippys() {

  function generateZip() {
    var zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    zip.file("Hello.txt", "Hello World\n");
    zip.generateAsync({type:"blob"})
    .then((content) => {
    saveAs(content, "example.zip");
});
  }
  return (
    <div className={style.zippysContainer}>
      <h1>Zip It!</h1>
      <button onClick={()=> generateZip()}>Zip It</button>
    </div>
  );
}

export default Zippys;
