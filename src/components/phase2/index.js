import style from "./index.module.scss";
import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';

export default function Phase2() {

  var indexphp =
`<?php get_header(); ?>
	
<main class="test-content">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php the_content() ?>
    <?php endwhile; endif; ?>
</main>
  
<?php get_footer(); ?>`

  function generateZip() {
    var zip = new JSZip();
    zip.file("index.php", indexphp);
    zip.file("Hello.txt", "Hello World\n");
    zip.generateAsync({type:"blob"})
    .then((content) => {
    saveAs(content, "example.zip");
    });
  }

  return (
    <div className={style.zippysContainer}>
      <h1>Phase 2</h1>
      <button onClick={()=> generateZip()}>Zip It</button>
    </div>
  );
}