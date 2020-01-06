import gulp from 'gulp';
import browserSync from 'browser-sync';

const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './public'
    }
  });
  done();
}

const watch = () => gulp.watch("public/*.html", reload);

const dev = gulp.series(serve, watch);
export default dev;
