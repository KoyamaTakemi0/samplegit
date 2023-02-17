// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));
// style.scssをタスクを作成する
gulp.task('default', function() {
 // style.scssファイルを取得
 return gulp.watch('sass/common.scss', function () {
  // style.scssの更新があった場合の処理
  // style.scssファイルを取得
  return(
 gulp
 .src('sass/common.scss')//タスク対象（"sass/**/*.scss"：ディレクトリ直下の全ディレクトリを対象）
 // Sassのコンパイルを実⾏
 .pipe(sass())
 //Sassのコンパイルエラーを表示 
 .on('error', sass.logError)
 // cssフォルダー以下に保存
 .pipe(gulp.dest('css'))
 );
});
});
