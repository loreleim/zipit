# Zip It
Zip it up with JSZip

NPM installs
```
npm install jszip
npm install file-saver --save
```


Import @ top of file
```
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
```

Example
```
var zip = new JSZip();
zip.file("Hello.txt", "Hello World\n");
var img = zip.folder("images");
img.file("smile.gif", imgData, {base64: true});
zip.generateAsync({type:"blob"})
.then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});
```
