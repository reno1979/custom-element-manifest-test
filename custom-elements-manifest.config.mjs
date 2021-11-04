
export default {
    /** Globs to analyze */
    globs: ['src/**/*.js'],
    /** Globs to exclude */
    exclude: [],
    /** Directory to output CEM to */
    outdir: '',
    /** Run in dev mode, provides extra logging */
    dev: true,
    /** Run in watch mode, runs on file changes */
    watch: true,
    /** Enable special handling for litelement */
    litelement: true,
    /** Enable special handling for catalyst */
    catalyst: false,
    /** Enable special handling for fast */
    fast: false,
    /** Enable special handling for stencil */
    stencil: false,
    /** Provide custom plugins */
    plugins: [
    ],
  }