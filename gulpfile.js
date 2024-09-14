// Importa o módulo 'gulp' para automatizar tarefas.
const gulp = require('gulp');

// Importa o módulo 'gulp-sass' e o configura para utilizar o 'sass' como compilador.
const sass = require('gulp-sass')(require('sass'));

// Importa o módulo 'gulp-imagemin' para otimizar imagens.
const imagemin = require('gulp-imagemin');

const uglify = require('gulp-uglify');


function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

// Função responsável por processar arquivos SCSS.
function styles() {
    return gulp.src('./src/styles/*.scss') // Seleciona todos os arquivos SCSS na pasta 'src/styles'.
        .pipe(sass({outputStyle: 'compressed'})) // Compila o SCSS para CSS, comprimindo o resultado.
        .pipe(gulp.dest('./dist/css')); // Salva o CSS compilado na pasta 'dist/css'.
}

// Função responsável por otimizar imagens.
function images() {
    return gulp.src('./src/imagens/**/*') // Seleciona todas as imagens na pasta 'src/images'.
        .pipe(imagemin()) // Otimiza as imagens.
        .pipe(gulp.dest('./dist/images')); // Salva as imagens otimizadas na pasta 'dist/images'.
}

// Tarefa padrão que executa as funções de processamento de estilos e imagens em paralelo.
exports.default = gulp.parallel(styles, images, scripts);

// Função que observa mudanças nos arquivos SCSS e reexecuta a função 'styles' automaticamente.
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) // Observa a pasta 'src/styles' por mudanças nos arquivos SCSS.
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}