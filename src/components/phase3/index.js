import style from "./index.module.scss";
import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';

export default function Phase3() {

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

    //library
    var folder1 = zip.folder("library");
    folder1.file("Hello.txt", "Hello World\n");

    //blocks - gutenberg block templates

    //pages - where you put ACF templates
    var folder2 = zip.folder("pages");
    folder2.file("Hello.txt", "Hello World\n");

    zip.generateAsync({type:"blob"})
    .then((content) => {
    saveAs(content, "example.zip");
    });
  }

  return (
    <div className={style.zippysContainer}>
      <h1>Phase 3</h1>
      <button onClick={()=> generateZip()}>Zip It</button>
    </div>
  );
}