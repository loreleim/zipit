(this.webpackJsonpzipit=this.webpackJsonpzipit||[]).push([[0],{22:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var i=t(2),o=t.n(i),p=t(4),s=t.n(p),r=t(5),c=t.n(r),l=t(6),a=t(7),h=t(0);function d(){return Object(h.jsxs)("div",{className:c.a.zippysContainer,children:[Object(h.jsx)("h1",{children:"Phase 3"}),Object(h.jsx)("button",{onClick:function(){return function(){var e=new l;e.file("index.php",'<?php get_header(); ?>\n\t\n<main class="test-content">\n    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>\n      <?php the_content() ?>\n    <?php endwhile; endif; ?>\n</main>\n  \n<?php get_footer(); ?>'),e.folder("library").file("Hello.txt","Hello World\n"),e.folder("pages").file("Hello.txt","Hello World\n"),e.generateAsync({type:"blob"}).then((function(e){Object(a.saveAs)(e,"example.zip")}))}()},children:"Zip It"})]})}var f=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(d,{})})};t(22);s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))},5:function(e,n,t){e.exports={zippysContainer:"phase3_zippysContainer__2d232"}}},[[23,1,2]]]);
//# sourceMappingURL=main.de914d88.chunk.js.map